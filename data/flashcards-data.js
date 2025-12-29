/**
 * AWS Cloud Practitioner Flashcards Data
 * CLF-C02 Exam Preparation
 * 
 * Categories:
 * - concepts: Cloud Concepts (Domain 1 - 24%)
 * - security: Security and Compliance (Domain 2 - 30%)
 * - technology: Cloud Technology and Services (Domain 3 - 34%)
 * - billing: Billing, Pricing, and Support (Domain 4 - 12%)
 */

const FLASHCARDS_DATA = [
    // ==========================================================================
    // CLOUD CONCEPTS (Domain 1 - 24%)
    // ==========================================================================
    {
        id: 'concepts-001',
        category: 'concepts',
        question: 'What are the 6 advantages of cloud computing?',
        answer: '1) Trade capital for variable expense 2) Benefit from economies of scale 3) Stop guessing capacity 4) Increase speed & agility 5) Stop spending on data centers 6) Go global in minutes'
    },
    {
        id: 'concepts-002',
        category: 'concepts',
        question: 'What is an AWS Region?',
        answer: 'A physical geographic location with multiple Availability Zones. Each Region is completely independent and isolated from other Regions.'
    },
    {
        id: 'concepts-003',
        category: 'concepts',
        question: 'What is an Availability Zone (AZ)?',
        answer: 'One or more discrete data centers with redundant power, networking, and connectivity within a Region. Designed to be isolated from failures in other AZs.'
    },
    {
        id: 'concepts-004',
        category: 'concepts',
        question: 'What are Edge Locations?',
        answer: 'Sites deployed in major cities to cache content closer to users. Used by CloudFront (CDN) and Route 53. There are MORE edge locations than Regions.'
    },
    {
        id: 'concepts-005',
        category: 'concepts',
        question: 'What are the 3 cloud deployment models?',
        answer: '1) Public Cloud - Everything on cloud provider 2) Private Cloud - Dedicated to single organization 3) Hybrid Cloud - Combination of on-premises and cloud'
    },
    {
        id: 'concepts-006',
        category: 'concepts',
        question: 'What is Elasticity in AWS?',
        answer: 'The ability to automatically scale resources up or down based on demand, paying only for what you use.'
    },
    {
        id: 'concepts-007',
        category: 'concepts',
        question: 'What is High Availability?',
        answer: 'Designing systems to operate continuously without failure. Achieved through multiple AZs, load balancing, and redundancy.'
    },
    {
        id: 'concepts-008',
        category: 'concepts',
        question: 'What are the 6 pillars of the Well-Architected Framework?',
        answer: '1) Operational Excellence 2) Security 3) Reliability 4) Performance Efficiency 5) Cost Optimization 6) Sustainability'
    },
    {
        id: 'concepts-009',
        category: 'concepts',
        question: 'What is IaaS?',
        answer: 'Infrastructure as a Service - Basic building blocks (compute, storage, networking). Example: EC2. YOU manage: OS, apps, data.'
    },
    {
        id: 'concepts-010',
        category: 'concepts',
        question: 'What is PaaS?',
        answer: 'Platform as a Service - AWS manages infrastructure, you focus on code. Examples: Elastic Beanstalk, Lambda.'
    },
    {
        id: 'concepts-011',
        category: 'concepts',
        question: 'What is SaaS?',
        answer: 'Software as a Service - Complete product run and managed by the provider. Examples: Gmail, Salesforce, Amazon WorkSpaces.'
    },
    {
        id: 'concepts-012',
        category: 'concepts',
        question: 'What is AWS Local Zone?',
        answer: 'An extension of a Region placed in proximity to large population centers for latency-sensitive applications.'
    },

    // ==========================================================================
    // SECURITY AND COMPLIANCE (Domain 2 - 30%)
    // ==========================================================================
    {
        id: 'security-001',
        category: 'security',
        question: 'What is the AWS Shared Responsibility Model?',
        answer: 'AWS is responsible for security OF the cloud (infrastructure). Customer is responsible for security IN the cloud (data, IAM, encryption, firewall config).'
    },
    {
        id: 'security-002',
        category: 'security',
        question: 'What is AWS responsible for in the Shared Responsibility Model?',
        answer: 'Physical security, hardware, managed services software, networking infrastructure, and the virtualization layer.'
    },
    {
        id: 'security-003',
        category: 'security',
        question: 'What is the CUSTOMER responsible for in the Shared Responsibility Model?',
        answer: 'Customer data, encryption, IAM (users/groups/roles), OS patches, network/firewall configuration, and application security.'
    },
    {
        id: 'security-004',
        category: 'security',
        question: 'What is AWS IAM?',
        answer: 'Identity and Access Management - A FREE, GLOBAL service to manage users, groups, roles, and permissions for AWS resources.'
    },
    {
        id: 'security-005',
        category: 'security',
        question: 'What is an IAM Policy?',
        answer: 'A JSON document that defines permissions. Can be attached to users, groups, or roles. Should follow least privilege principle.'
    },
    {
        id: 'security-006',
        category: 'security',
        question: 'What is an IAM Role?',
        answer: 'An identity with permissions that can be assumed by users, applications, or services. Provides TEMPORARY credentials.'
    },
    {
        id: 'security-007',
        category: 'security',
        question: 'What are IAM Best Practices?',
        answer: 'Never use root account, enable MFA, create individual users, use groups for permissions, follow least privilege, rotate credentials, use roles for EC2.'
    },
    {
        id: 'security-008',
        category: 'security',
        question: 'What is AWS WAF?',
        answer: 'Web Application Firewall - Protects web apps from common exploits like SQL injection, XSS, and other Layer 7 attacks.'
    },
    {
        id: 'security-009',
        category: 'security',
        question: 'What is AWS Shield?',
        answer: 'DDoS protection service. Shield Standard is FREE and automatic. Shield Advanced offers enhanced protection and 24/7 DRT access.'
    },
    {
        id: 'security-010',
        category: 'security',
        question: 'What is Amazon GuardDuty?',
        answer: 'Threat detection service that uses machine learning to monitor for malicious activity and unauthorized behavior.'
    },
    {
        id: 'security-011',
        category: 'security',
        question: 'What is Amazon Inspector?',
        answer: 'Automated security assessment service that checks EC2 instances and container workloads for vulnerabilities.'
    },
    {
        id: 'security-012',
        category: 'security',
        question: 'What is AWS KMS?',
        answer: 'Key Management Service - Create and manage encryption keys. Integrated with many AWS services for data encryption.'
    },
    {
        id: 'security-013',
        category: 'security',
        question: 'What is AWS CloudTrail?',
        answer: 'Records ALL API calls for your account. Essential for governance, compliance, and auditing. Answers: WHO did WHAT and WHEN.'
    },
    {
        id: 'security-014',
        category: 'security',
        question: 'What is Amazon Macie?',
        answer: 'Uses machine learning to discover, classify, and protect sensitive data (like PII) stored in S3.'
    },
    {
        id: 'security-015',
        category: 'security',
        question: 'What is MFA?',
        answer: 'Multi-Factor Authentication - Adds extra security by requiring something you KNOW (password) and something you HAVE (device/token).'
    },

    // ==========================================================================
    // CLOUD TECHNOLOGY AND SERVICES (Domain 3 - 34%)
    // ==========================================================================
    {
        id: 'technology-001',
        category: 'technology',
        question: 'What is Amazon EC2?',
        answer: 'Elastic Compute Cloud - Resizable virtual servers in the cloud. You have full control over OS, apps, and configuration.'
    },
    {
        id: 'technology-002',
        category: 'technology',
        question: 'What are the EC2 pricing options?',
        answer: '1) On-Demand 2) Reserved (1-3 yr, up to 72% off) 3) Spot (up to 90% off, can be interrupted) 4) Dedicated Hosts 5) Savings Plans'
    },
    {
        id: 'technology-003',
        category: 'technology',
        question: 'What is AWS Lambda?',
        answer: 'Serverless compute - Run code without managing servers. Pay only for compute time. Scales automatically. Max timeout: 15 minutes.'
    },
    {
        id: 'technology-004',
        category: 'technology',
        question: 'What is Amazon S3?',
        answer: 'Simple Storage Service - Object storage with virtually unlimited capacity. Objects stored in buckets. Globally unique bucket names.'
    },
    {
        id: 'technology-005',
        category: 'technology',
        question: 'What are S3 storage classes?',
        answer: 'Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant/Flexible, Glacier Deep Archive'
    },
    {
        id: 'technology-006',
        category: 'technology',
        question: 'What is Amazon EBS?',
        answer: 'Elastic Block Store - Block storage for EC2 instances. Persists independently. Single AZ. Supports snapshots for backup.'
    },
    {
        id: 'technology-007',
        category: 'technology',
        question: 'What is Amazon EFS?',
        answer: 'Elastic File System - Managed NFS file system that can be mounted by MULTIPLE EC2 instances simultaneously across AZs.'
    },
    {
        id: 'technology-008',
        category: 'technology',
        question: 'What is Amazon RDS?',
        answer: 'Relational Database Service - Managed databases supporting MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora.'
    },
    {
        id: 'technology-009',
        category: 'technology',
        question: 'What is Amazon DynamoDB?',
        answer: 'Serverless NoSQL database with single-digit millisecond latency. Key-value and document data models. Auto-scales.'
    },
    {
        id: 'technology-010',
        category: 'technology',
        question: 'What is Amazon VPC?',
        answer: 'Virtual Private Cloud - Your own isolated network in AWS. You control IP ranges, subnets, route tables, and gateways.'
    },
    {
        id: 'technology-011',
        category: 'technology',
        question: 'What is Amazon CloudFront?',
        answer: 'Content Delivery Network (CDN) - Caches content at edge locations worldwide for low latency delivery.'
    },
    {
        id: 'technology-012',
        category: 'technology',
        question: 'What is Amazon Route 53?',
        answer: 'DNS web service. Routes users to applications. Supports domain registration, DNS routing, and health checking.'
    },
    {
        id: 'technology-013',
        category: 'technology',
        question: 'What is Elastic Load Balancing?',
        answer: 'Distributes traffic across multiple targets. Types: Application (Layer 7), Network (Layer 4), Gateway, Classic.'
    },
    {
        id: 'technology-014',
        category: 'technology',
        question: 'What is AWS CloudFormation?',
        answer: 'Infrastructure as Code (IaC) - Define and provision AWS resources using JSON or YAML templates.'
    },
    {
        id: 'technology-015',
        category: 'technology',
        question: 'What is Amazon CloudWatch?',
        answer: 'Monitoring service - Collects metrics, logs, and events. Sets alarms and triggers automated actions.'
    },

    // ==========================================================================
    // BILLING, PRICING, AND SUPPORT (Domain 4 - 12%)
    // ==========================================================================
    {
        id: 'billing-001',
        category: 'billing',
        question: "What are AWS's three pricing fundamentals?",
        answer: '1) Pay-as-you-go 2) Save when you commit (Reserved/Savings Plans) 3) Pay less by using more (volume discounts)'
    },
    {
        id: 'billing-002',
        category: 'billing',
        question: 'What are the AWS Support Plans?',
        answer: 'Basic (free), Developer ($29+), Business ($100+), Enterprise On-Ramp ($5,500+), Enterprise ($15,000+)'
    },
    {
        id: 'billing-003',
        category: 'billing',
        question: 'Which support plan includes a Technical Account Manager (TAM)?',
        answer: 'Enterprise Support only. TAM provides proactive guidance and advocacy.'
    },
    {
        id: 'billing-004',
        category: 'billing',
        question: 'What is AWS Trusted Advisor?',
        answer: 'Best practice recommendations for Cost, Security, Fault Tolerance, Performance, and Service Limits. 7 checks free; full checks require Business/Enterprise.'
    },
    {
        id: 'billing-005',
        category: 'billing',
        question: 'What is AWS Cost Explorer?',
        answer: 'Visualize, understand, and manage AWS costs and usage over time with graphs and forecasting.'
    },
    {
        id: 'billing-006',
        category: 'billing',
        question: 'What is AWS Budgets?',
        answer: 'Set custom cost and usage budgets. Get alerts via email/SNS when thresholds are exceeded.'
    },
    {
        id: 'billing-007',
        category: 'billing',
        question: 'What is the AWS Free Tier?',
        answer: '3 types: Always Free (Lambda, DynamoDB), 12 Months Free (EC2, S3, RDS), and Trials for specific services.'
    },
    {
        id: 'billing-008',
        category: 'billing',
        question: 'What is Consolidated Billing?',
        answer: 'Single bill for all accounts in an AWS Organization. Volume discounts apply across ALL accounts combined.'
    }
];

// Category metadata
const CATEGORIES = {
    all: {
        name: 'All Cards',
        icon: '📚',
        description: 'All flashcards from every domain'
    },
    concepts: {
        name: 'Cloud Concepts',
        icon: '☁️',
        description: 'Domain 1: Cloud Concepts (24% of exam)'
    },
    security: {
        name: 'Security',
        icon: '🔒',
        description: 'Domain 2: Security and Compliance (30% of exam)'
    },
    technology: {
        name: 'Technology',
        icon: '⚙️',
        description: 'Domain 3: Cloud Technology and Services (34% of exam)'
    },
    billing: {
        name: 'Billing & Pricing',
        icon: '💰',
        description: 'Domain 4: Billing, Pricing, and Support (12% of exam)'
    }
};

// Export for module usage (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FLASHCARDS_DATA, CATEGORIES };
}
