/**
 * AWS Cloud Practitioner Flashcards Application
 * Interactive flashcard study tool for CLF-C02 exam preparation
 * 
 * @author AWS Flashcards
 * @version 2.0.0
 */

(function() {
    'use strict';

    // ==========================================================================
    // Application State
    // ==========================================================================
    const state = {
        cards: [...FLASHCARDS_DATA],
        filteredCards: [...FLASHCARDS_DATA],
        currentIndex: 0,
        currentCategory: 'all',
        viewedCards: new Set(),
        masteredCards: new Set(),
        isFlipped: false
    };

    // ==========================================================================
    // DOM Elements
    // ==========================================================================
    const elements = {
        // Flashcard elements
        flashcard: document.getElementById('flashcard'),
        question: document.getElementById('question'),
        answer: document.getElementById('answer'),
        categoryLabel: document.getElementById('categoryLabel'),
        categoryLabelBack: document.getElementById('categoryLabelBack'),
        
        // Progress elements
        currentCard: document.getElementById('currentCard'),
        totalCards: document.getElementById('totalCards'),
        progressFill: document.getElementById('progressFill'),
        
        // Statistics elements
        viewedCount: document.getElementById('viewedCount'),
        remainingCount: document.getElementById('remainingCount'),
        masteredCount: document.getElementById('masteredCount'),
        
        // Navigation buttons
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        shuffleBtn: document.getElementById('shuffleBtn'),
        resetBtn: document.getElementById('resetBtn'),
        
        // Category buttons
        categoryBtns: document.querySelectorAll('.category-btn'),
        
        // Toast notification
        toast: document.getElementById('toast')
    };

    // ==========================================================================
    // Utility Functions
    // ==========================================================================
    
    /**
     * Fisher-Yates shuffle algorithm
     * @param {Array} array - Array to shuffle
     * @returns {Array} - Shuffled array
     */
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Get category display name
     * @param {string} categoryKey - Category key
     * @returns {string} - Display name
     */
    function getCategoryName(categoryKey) {
        return CATEGORIES[categoryKey]?.name || categoryKey;
    }

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {string} type - Type of toast (success, error, info)
     * @param {number} duration - Duration in milliseconds
     */
    function showToast(message, type = 'info', duration = 2000) {
        const toast = elements.toast;
        toast.textContent = message;
        toast.className = `toast toast--${type} show`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    /**
     * Save state to localStorage
     */
    function saveState() {
        try {
            const savedState = {
                viewedCards: Array.from(state.viewedCards),
                masteredCards: Array.from(state.masteredCards),
                currentCategory: state.currentCategory
            };
            localStorage.setItem('awsFlashcardsState', JSON.stringify(savedState));
        } catch (e) {
            console.warn('Could not save state to localStorage:', e);
        }
    }

    /**
     * Load state from localStorage
     */
    function loadState() {
        try {
            const saved = localStorage.getItem('awsFlashcardsState');
            if (saved) {
                const parsed = JSON.parse(saved);
                state.viewedCards = new Set(parsed.viewedCards || []);
                state.masteredCards = new Set(parsed.masteredCards || []);
                // We don't restore currentCategory to always start fresh
            }
        } catch (e) {
            console.warn('Could not load state from localStorage:', e);
        }
    }

    // ==========================================================================
    // Card Display Functions
    // ==========================================================================

    /**
     * Update the displayed card
     */
    function updateCard() {
        if (state.filteredCards.length === 0) {
            elements.question.textContent = 'No cards in this category';
            elements.answer.textContent = 'Try selecting a different category';
            return;
        }

        const card = state.filteredCards[state.currentIndex];
        
        // Reset flip state
        state.isFlipped = false;
        elements.flashcard.classList.remove('flipped');
        
        // Update content
        elements.question.textContent = card.question;
        elements.answer.textContent = card.answer;
        
        // Update category labels
        const categoryName = getCategoryName(card.category);
        elements.categoryLabel.textContent = categoryName;
        elements.categoryLabelBack.textContent = categoryName;
        
        // Update mastered state
        if (state.masteredCards.has(card.id)) {
            elements.flashcard.classList.add('mastered');
        } else {
            elements.flashcard.classList.remove('mastered');
        }
        
        // Mark as viewed
        state.viewedCards.add(card.id);
        
        // Update UI
        updateProgress();
        updateNavigationButtons();
        updateStatistics();
        saveState();
    }

    /**
     * Update progress bar and counter
     */
    function updateProgress() {
        const current = state.currentIndex + 1;
        const total = state.filteredCards.length;
        
        elements.currentCard.textContent = current;
        elements.totalCards.textContent = total;
        
        const percentage = total > 0 ? (current / total) * 100 : 0;
        elements.progressFill.style.width = `${percentage}%`;
        
        // Update ARIA attributes
        const progressBar = elements.progressFill.parentElement;
        progressBar.setAttribute('aria-valuenow', Math.round(percentage));
    }

    /**
     * Update navigation button states
     */
    function updateNavigationButtons() {
        elements.prevBtn.disabled = state.currentIndex === 0;
        elements.nextBtn.disabled = state.currentIndex >= state.filteredCards.length - 1;
    }

    /**
     * Update statistics display
     */
    function updateStatistics() {
        // Count viewed cards in current filter
        const viewedInFilter = state.filteredCards.filter(
            card => state.viewedCards.has(card.id)
        ).length;
        
        // Count mastered cards in current filter
        const masteredInFilter = state.filteredCards.filter(
            card => state.masteredCards.has(card.id)
        ).length;
        
        const total = state.filteredCards.length;
        
        elements.viewedCount.textContent = viewedInFilter;
        elements.remainingCount.textContent = Math.max(0, total - viewedInFilter);
        elements.masteredCount.textContent = masteredInFilter;
    }

    /**
     * Update category button counts
     */
    function updateCategoryCounts() {
        const counts = {
            all: FLASHCARDS_DATA.length,
            concepts: 0,
            security: 0,
            technology: 0,
            billing: 0
        };
        
        FLASHCARDS_DATA.forEach(card => {
            if (counts.hasOwnProperty(card.category)) {
                counts[card.category]++;
            }
        });
        
        document.querySelectorAll('.category-btn__count').forEach(countEl => {
            const category = countEl.dataset.count;
            if (counts.hasOwnProperty(category)) {
                countEl.textContent = counts[category];
            }
        });
    }

    // ==========================================================================
    // Navigation Functions
    // ==========================================================================

    /**
     * Go to next card
     */
    function nextCard() {
        if (state.currentIndex < state.filteredCards.length - 1) {
            state.currentIndex++;
            updateCard();
        }
    }

    /**
     * Go to previous card
     */
    function prevCard() {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            updateCard();
        }
    }

    /**
     * Flip the current card
     */
    function flipCard() {
        state.isFlipped = !state.isFlipped;
        elements.flashcard.classList.toggle('flipped', state.isFlipped);
    }

    /**
     * Shuffle the cards
     */
    function shuffleCards() {
        state.filteredCards = shuffleArray(state.filteredCards);
        state.currentIndex = 0;
        updateCard();
        showToast('Cards shuffled! 🔀', 'success');
    }

    /**
     * Reset all progress
     */
    function resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            state.viewedCards.clear();
            state.masteredCards.clear();
            state.currentIndex = 0;
            filterCards(state.currentCategory);
            saveState();
            showToast('Progress reset!', 'info');
        }
    }

    /**
     * Toggle mastered state for current card
     */
    function toggleMastered() {
        if (state.filteredCards.length === 0) return;
        
        const card = state.filteredCards[state.currentIndex];
        
        if (state.masteredCards.has(card.id)) {
            state.masteredCards.delete(card.id);
            elements.flashcard.classList.remove('mastered');
            showToast('Removed from mastered', 'info');
        } else {
            state.masteredCards.add(card.id);
            elements.flashcard.classList.add('mastered');
            showToast('Marked as mastered! ✓', 'success');
        }
        
        updateStatistics();
        saveState();
    }

    // ==========================================================================
    // Filter Functions
    // ==========================================================================

    /**
     * Filter cards by category
     * @param {string} category - Category to filter by
     */
    function filterCards(category) {
        state.currentCategory = category;
        
        if (category === 'all') {
            state.filteredCards = [...FLASHCARDS_DATA];
        } else {
            state.filteredCards = FLASHCARDS_DATA.filter(
                card => card.category === category
            );
        }
        
        state.currentIndex = 0;
        updateCard();
        updateCategoryButtons(category);
    }

    /**
     * Update category button active states
     * @param {string} activeCategory - Currently active category
     */
    function updateCategoryButtons(activeCategory) {
        elements.categoryBtns.forEach(btn => {
            const isActive = btn.dataset.category === activeCategory;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });
    }

    // ==========================================================================
    // Event Handlers
    // ==========================================================================

    /**
     * Handle keyboard events
     * @param {KeyboardEvent} event
     */
    function handleKeydown(event) {
        // Ignore if user is typing in an input
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                nextCard();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                prevCard();
                break;
            case ' ':
                event.preventDefault();
                flipCard();
                break;
            case 's':
            case 'S':
                event.preventDefault();
                shuffleCards();
                break;
            case 'm':
            case 'M':
                event.preventDefault();
                toggleMastered();
                break;
            case 'r':
            case 'R':
                if (event.ctrlKey || event.metaKey) {
                    // Don't interfere with browser refresh
                    return;
                }
                event.preventDefault();
                resetProgress();
                break;
        }
    }

    /**
     * Handle flashcard click
     */
    function handleCardClick() {
        flipCard();
    }

    /**
     * Handle flashcard keyboard activation
     * @param {KeyboardEvent} event
     */
    function handleCardKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            flipCard();
        }
    }

    /**
     * Handle category button click
     * @param {Event} event
     */
    function handleCategoryClick(event) {
        const btn = event.target.closest('.category-btn');
        if (btn) {
            const category = btn.dataset.category;
            filterCards(category);
        }
    }

    // ==========================================================================
    // Touch Support
    // ==========================================================================

    let touchStartX = 0;
    let touchEndX = 0;

    /**
     * Handle touch start
     * @param {TouchEvent} event
     */
    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
    }

    /**
     * Handle touch end
     * @param {TouchEvent} event
     */
    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }

    /**
     * Process swipe gesture
     */
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next card
                nextCard();
            } else {
                // Swipe right - previous card
                prevCard();
            }
        }
    }

    // ==========================================================================
    // Initialization
    // ==========================================================================

    /**
     * Initialize the application
     */
    function init() {
        // Load saved state
        loadState();
        
        // Update category counts
        updateCategoryCounts();
        
        // Set up event listeners
        
        // Navigation buttons
        elements.prevBtn.addEventListener('click', prevCard);
        elements.nextBtn.addEventListener('click', nextCard);
        elements.shuffleBtn.addEventListener('click', shuffleCards);
        elements.resetBtn.addEventListener('click', resetProgress);
        
        // Flashcard interactions
        elements.flashcard.addEventListener('click', handleCardClick);
        elements.flashcard.addEventListener('keydown', handleCardKeydown);
        
        // Category buttons
        elements.categoryBtns.forEach(btn => {
            btn.addEventListener('click', handleCategoryClick);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeydown);
        
        // Touch/swipe support
        elements.flashcard.addEventListener('touchstart', handleTouchStart, { passive: true });
        elements.flashcard.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Initial card display
        updateCard();
        
        console.log('AWS Flashcards initialized! 🚀');
        console.log(`Loaded ${FLASHCARDS_DATA.length} flashcards`);
    }

    // Start the application when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
