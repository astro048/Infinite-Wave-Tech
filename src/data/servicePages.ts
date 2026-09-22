import { DynamicPageData } from '../types/dynamicPage';

export const servicePagesData: Record<string, DynamicPageData> = {
    'managed-it': {
        id: 'managed-it',
        slug: 'managed-it',
        type: 'service',
        category: 'Services',
        title: 'Managed IT',
        subtitle: 'Proactive Infrastructure Management & 24/7 Operations',
        tagline: 'End-to-end management of your entire technology stack for zero downtime and peak performance.',
        description: 'Comprehensive IT infrastructure management, 24/7 system monitoring, proactive maintenance, automated backups, and enterprise security to ensure your business runs uninterrupted.',
        highlights: [
            'IT Infrastructure Management',
            '24/7 Monitoring & Alerting',
            'Preventative Maintenance',
            'Managed Security Operations',
            'Automated Cloud Backups',
            'Performance Optimization'
        ],
        overview: {
            heading: 'Reliable, Predictable, and Resilient IT Operations',
            text: [
                'In the modern digital economy, unplanned downtime or sluggish networks can derail productivity and customer trust. Businesses cannot afford to react only after an outage occurs.',
                'Our Managed IT services deliver complete peace of mind. We act as your dedicated infrastructure team—monitoring server clusters, network switches, endpoints, and cloud accounts 24/7, fixing bottlenecks before they affect your users.'
            ],
            stats: [
                { value: '99.95%', label: 'Infrastructure Uptime' },
                { value: '<15m', label: 'Critical Response Time' },
                { value: '24/7/365', label: 'NOC & SOC Monitoring' },
                { value: '100%', label: 'Disaster Recovery Tested' }
            ]
        },
        whatWeProvide: [
            {
                title: 'IT Infrastructure Management',
                description: 'Full lifecycle administration of servers, virtual machines, cloud instances, and storage arrays.',
                points: ['Server & virtual machine provisioning', 'Patch management & OS updates', 'Storage management & SAN allocation']
            },
            {
                title: '24/7 Continuous Monitoring',
                description: 'Proactive health checks on network latency, CPU/memory loads, and disk capacity with instant alert triaging.',
                points: ['Proactive alerting via PagerDuty/Slack', 'Synthetic transaction testing', 'Bandwidth and packet drop inspection']
            },
            {
                title: 'Proactive Maintenance',
                description: 'Scheduled maintenance windows, vulnerability patching, firmware updates, and database indexing.',
                points: ['Kernel & firmware security updates', 'Automated system cleanup routines', 'Capacity planning forecasts']
            },
            {
                title: 'Endpoint & Network Security',
                description: 'Firewall management, intrusion detection/prevention systems (IDS/IPS), and endpoint antivirus orchestration.',
                points: ['Managed firewall policies', 'Zero-trust network access (ZTNA)', 'Endpoint protection & EDR']
            },
            {
                title: 'Automated Backup & Disaster Recovery',
                description: 'Continuous immutable backups with automated recovery point objective (RPO) and recovery time objective (RTO) tests.',
                points: ['Multi-region encrypted backups', 'Regular bare-metal restore drills', 'Ransomware-proof snapshots']
            },
            {
                title: 'Performance & Cost Optimization',
                description: 'Eliminating resource waste, right-sizing cloud instances, and tuning network routes to lower IT expenditures.',
                points: ['Cloud bill rationalization', 'Database query performance audits', 'Load balancer fine-tuning']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & IT Audit',
                description: 'Cataloging hardware assets, network topology, cloud configurations, licensing, and vulnerability surfaces.'
            },
            {
                step: '02',
                title: 'Design & NOC Setup',
                description: 'Configuring telemetry agents, baseline health metrics, escalation protocols, and SLA matrices.'
            },
            {
                step: '03',
                title: 'Develop & Automated Remediation',
                description: 'Deploying auto-remediation scripts, patch managers, centralized logs, and backup schedules.'
            },
            {
                step: '04',
                title: 'Deploy & 24/7 Operations',
                description: 'Seamless handover to our 24/7 operations center with monthly executive reporting and quarterly reviews.'
            }
        ],
        technologies: [
            'Linux / Windows Server', 'Docker', 'Kubernetes', 'AWS', 'Azure',
            'Terraform', 'Prometheus', 'Grafana', 'Datadog', 'Ansible'
        ],
        whyChooseUs: [
            {
                title: 'Proactive Rather than Reactive',
                description: 'Over 85% of potential incidents are detected and resolved before end users even notice a slowdown.'
            },
            {
                title: 'Guaranteed SLA Backing',
                description: 'Strict, financially backed Service Level Agreements ensuring rapid response and minimal MTTR.'
            },
            {
                title: 'Full Stack Transparency',
                description: 'Live client dashboard providing real-time visibility into your infrastructure health and opened tickets.'
            }
        ]
    },

    'it-support': {
        id: 'it-support',
        slug: 'it-support',
        type: 'service',
        category: 'Services',
        title: 'IT Support',
        subtitle: 'Enterprise Technical Support & Helpdesk Services',
        tagline: 'Fast, friendly, and expert support resolving employee and system challenges around the clock.',
        description: 'End-to-end technical support, rapid troubleshooting, remote desktop assistance, hardware maintenance, device fleet management, and network troubleshooting for your workforce.',
        highlights: [
            'Technical Helpdesk Support',
            'Rapid Troubleshooting',
            'Remote Desktop Assistance',
            'System Maintenance',
            'Device & Fleet Management',
            'Network Diagnostics'
        ],
        overview: {
            heading: 'Keeping Your Workforce Productive Without Technological Hurdles',
            text: [
                'When employees encounter software crashes, VPN disconnections, or hardware failures, their productivity halts. Slow or unresponsive IT ticketing damages morale and impacts customer commitments.',
                'Our IT Support desk provides rapid, empathetic, and expert technical assistance across Tier 1, 2, and 3 issues. Whether fixing remote laptops or resolving complex office network drops, we resolve issues on the first call.'
            ],
            stats: [
                { value: '<5min', label: 'First Response Time' },
                { value: '88%', label: 'First Contact Resolution' },
                { value: '98%', label: 'User Satisfaction (CSAT)' },
                { value: '24/7', label: 'Helpdesk Coverage' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Technical Helpdesk Support',
                description: 'Multi-channel support via phone, Slack, email, and ticketing portals staffed by certified IT professionals.',
                points: ['Multi-channel ticketing portal', 'Tier 1 to Tier 3 issue escalation', 'SLA-tracked ticket resolution']
            },
            {
                title: 'Troubleshooting & Diagnostics',
                description: 'Swift diagnosis and permanent fixes for OS crashes, software conflicts, audio/video errors, and email hiccups.',
                points: ['Root-cause analysis', 'Application dependency troubleshooting', 'Registry and driver stabilization']
            },
            {
                title: 'Remote Support & Screen Sharing',
                description: 'Secure, encrypted remote desktop control to fix employee devices anywhere in the world in minutes.',
                points: ['Zero-install secure screen control', 'Session video recordings for security', 'Fast mobile & tablet remote assist']
            },
            {
                title: 'System Maintenance & Optimization',
                description: 'Periodic disk defragmentation, cache clears, registry optimization, and memory profiling on user workstations.',
                points: ['Automated background workstation tuneups', 'Malware scanning & quarantine', 'Storage drive health audits']
            },
            {
                title: 'Device & Fleet Management (MDM)',
                description: 'Automated onboarding, software provisioning, encryption enforcement (BitLocker/FileVault), and remote wiping.',
                points: ['Zero-touch Mac/Windows onboarding', 'MDM policy enforcement', 'Remote wipe for lost devices']
            },
            {
                title: 'Network & Connectivity Support',
                description: 'Resolving office Wi-Fi dead zones, VPN authentication issues, DNS resolution delays, and router resets.',
                points: ['Corporate VPN setup & troubleshooting', 'Wi-Fi mesh configuration', 'DNS & firewall whitelist tuning']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Ticket Assessment',
                description: 'Auditing common issue types, employee device OS distribution, support channels, and resolution benchmarks.'
            },
            {
                step: '02',
                title: 'Design & Knowledge Base Setup',
                description: 'Authoring standard operating procedures, building self-service knowledge articles, and routing rules.'
            },
            {
                step: '03',
                title: 'Develop & Tooling Integration',
                description: 'Integrating MDM, ticketing agents, remote assist utilities, and Slack/Teams bot automated responses.'
            },
            {
                step: '04',
                title: 'Deploy & Dedicated Helpdesk',
                description: 'Go-live with dedicated support engineers, real-time CSAT tracking, and continuous workflow improvements.'
            }
        ],
        technologies: [
            'macOS', 'Windows 11', 'Microsoft 365', 'Google Workspace',
            'Jira Service Management', 'Zendesk', 'Jamf', 'Intune', 'WireGuard / OpenVPN'
        ],
        whyChooseUs: [
            {
                title: 'Rapid First-Call Resolution',
                description: 'Our Tier 1 agents have deep technical training, solving most problems immediately without bouncing tickets.'
            },
            {
                title: 'Global Remote Support',
                description: 'Supporting distributed remote teams across all time zones with consistent, high-quality care.'
            },
            {
                title: 'Self-Service Knowledge Base',
                description: 'We curate step-by-step internal guides that empower employees to solve common tasks independently.'
            }
        ]
    },

    'it-consultancy': {
        id: 'it-consultancy',
        slug: 'it-consultancy',
        type: 'service',
        category: 'Services',
        title: 'IT Consultancy',
        subtitle: 'Strategic Technology Advisory & Architecture Planning',
        tagline: 'Aligning your technology investments with strategic business objectives for sustainable competitive advantage.',
        description: 'Strategic technology advisory, enterprise architecture consulting, digital transformation roadmaps, cloud readiness audits, technical due diligence, and cost-effective software strategies.',
        highlights: [
            'Technology Strategy & Vision',
            'Architecture Consulting',
            'Digital Transformation',
            'Infrastructure Planning',
            'Software Consulting & Auditing',
            'Technical Roadmaps'
        ],
        overview: {
            heading: 'Transforming Business Objectives into Engineering Excellence',
            text: [
                'Technology evolves rapidly, making it difficult for executive teams to discern high-leverage innovations from short-lived trends. Poor architecture decisions or misaligned IT roadmaps result in expensive rewrites and missed opportunities.',
                'Our IT Consultancy practice acts as your fractional CTO and senior enterprise architect. We assess your legacy state, evaluate technological trade-offs, and design practical multi-year roadmaps that accelerate growth while managing risk.'
            ],
            stats: [
                { value: '3x', label: 'Faster Time-to-Market' },
                { value: '40%', label: 'Tech Stack Cost Savings' },
                { value: '100+', label: 'Advisory Projects' },
                { value: '100%', label: 'Vendor Agnostic Advice' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Technology Strategy & Executive Advisory',
                description: 'Fractional CTO services, board-level technology roadmaps, and alignment between IT spending and revenue goals.',
                points: ['Fractional CTO / VP Eng guidance', 'Technology stack selection', 'IT budget modeling & ROI analysis']
            },
            {
                title: 'Enterprise Architecture Consulting',
                description: 'Designing fault-tolerant, scalable system architectures using microservices, domain-driven design, and event-driven patterns.',
                points: ['Domain-Driven Design (DDD)', 'Microservices decomposition', 'API governance & contracts']
            },
            {
                title: 'Digital Transformation Roadmaps',
                description: 'Step-by-step plans to replace legacy mainframes, modernize manual operations, and establish agile engineering cultures.',
                points: ['Legacy debt mitigation roadmaps', 'Agile delivery model adoption', 'Automated governance frameworks']
            },
            {
                title: 'Infrastructure & Cloud Readiness',
                description: 'Auditing current compute, networking, and data storage to architect optimal hybrid-cloud or multi-cloud migrations.',
                points: ['Cloud readiness assessments', 'TCO comparisons (AWS vs Azure vs On-Prem)', 'Disaster recovery blueprints']
            },
            {
                title: 'Software Consulting & Code Audits',
                description: 'Deep-dive security, performance, and maintainability audits of existing codebases, third-party libraries, and APIs.',
                points: ['Static code quality analysis', 'Architectural risk reporting', 'Third-party vendor due diligence']
            },
            {
                title: 'Technical Roadmaps & Execution Plans',
                description: 'Detailed sprint-by-sprint release milestones, resource allocations, and risk mitigation strategies for implementation.',
                points: ['Milestone-based delivery schedules', 'Team staffing & skill gap models', 'Technical debt paydown strategies']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Stakeholder Alignment',
                description: 'Interviewing executive leadership, department heads, and engineering leads to define business objectives.'
            },
            {
                step: '02',
                title: 'Design & Architectural Blueprint',
                description: 'Modeling target-state architectures, cost matrices, technology choices, and proof-of-concepts.'
            },
            {
                step: '03',
                title: 'Develop & Phased Roadmap',
                description: 'Formulating detailed execution phases, security milestones, and hiring/vendor guidance.'
            },
            {
                step: '04',
                title: 'Deploy & Advisory Governance',
                description: 'Ongoing strategic oversight, architecture review boards (ARB), and periodic executive health checks.'
            }
        ],
        technologies: [
            'Microservices', 'Event-Driven Architecture', 'Cloud-Native', 'React / Next.js',
            'Node.js / Go / Java', 'AWS / Azure / GCP', 'Kubernetes', 'GraphQL / REST'
        ],
        whyChooseUs: [
            {
                title: 'Unbiased, Vendor-Agnostic',
                description: 'We recommend tools and architectures based purely on your business needs, not vendor commissions.'
            },
            {
                title: 'Hands-On Practitioners',
                description: 'Our consultants are active software architects and engineers who understand real-world production code.'
            },
            {
                title: 'Clear Financial Modeling',
                description: 'Every recommendation is accompanied by projected ROI, licensing costs, and operational TCO.'
            }
        ]
    },

    'cloud-computing': {
        id: 'cloud-computing',
        slug: 'cloud-computing',
        type: 'service',
        category: 'Services',
        title: 'Cloud Computing',
        subtitle: 'Cloud Migration, Architecture & FinOps Optimization',
        tagline: 'Designing elastic, secure, and cost-efficient cloud foundations for modern applications.',
        description: 'End-to-end cloud migration, multi-cloud architecture, serverless systems, automated scaling, cloud security compliance, and FinOps cost optimization on AWS, Azure, and Google Cloud.',
        highlights: [
            'Seamless Cloud Migration',
            'Scalable Cloud Architecture',
            'Serverless & Containerization',
            'Elastic Auto-Scaling',
            'Cloud Security & Compliance',
            'FinOps Cost Optimization'
        ],
        overview: {
            heading: 'Unlocking Unrivaled Agility with Cloud-Native Engineering',
            text: [
                'Migrating to the cloud is no longer just about moving virtual machines off-premises—it is about unlocking continuous innovation, automatic scalability, and high-availability global reach.',
                'We help enterprises migrate seamlessly to AWS, Azure, and Google Cloud without downtime. From containerized microservices on Kubernetes to serverless event pipelines, we engineer cloud platforms that scale automatically under load and minimize operating costs.'
            ],
            stats: [
                { value: '45%', label: 'Average Cloud Cost Reduction' },
                { value: '99.99%', label: 'Cloud Architecture SLA' },
                { value: 'Zero', label: 'Downtime During Migration' },
                { value: '10x', label: 'Faster Deployment Cycles' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Cloud Migration Services',
                description: 'Rehost (lift and shift), replatform, and refactor applications to AWS, Azure, or GCP with zero data loss.',
                points: ['Lift-and-shift & container refactoring', 'Database replication & zero-downtime cutover', 'Legacy application modernization']
            },
            {
                title: 'Cloud Infrastructure & IaC',
                description: 'Automating multi-environment cloud setups using Terraform, OpenTofu, and AWS CloudFormation.',
                points: ['Declarative Terraform modules', 'Multi-account AWS Organizations / Azure Tenancies', 'Immutable infrastructure pipelines']
            },
            {
                title: 'Cloud Applications & Serverless',
                description: 'Designing event-driven backends using AWS Lambda, Google Cloud Run, and Azure Functions that cost nothing when idle.',
                points: ['Serverless microservices', 'Managed message queues (SQS, SNS, Pub/Sub)', 'Edge computing via Cloudflare Workers']
            },
            {
                title: 'High Availability & Scalability',
                description: 'Multi-region active-active setups, elastic load balancing, and Kubernetes auto-scaling (HPA/KEDA).',
                points: ['Horizontal Pod Autoscalers (HPA)', 'Multi-zone global load balancers', 'Global CDN caching & asset distribution']
            },
            {
                title: 'Cloud Security & Governance',
                description: 'IAM least-privilege configurations, automated security posture management (CSPM), and encrypted VPC peering.',
                points: ['Least-privilege IAM policies', 'Automated guardrails & compliance rules', 'VPC flow logging & threat anomaly alerts']
            },
            {
                title: 'Cloud Monitoring & FinOps',
                description: 'Continuous cost anomaly detection, spot instance optimization, and unified Grafana/Prometheus dashboards.',
                points: ['Automated idle resource cleanup', 'Savings Plans and Reserved Instance management', 'Real-time billing dashboards']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Cloud Assessment',
                description: 'Auditing on-prem server dependencies, database sizes, network bandwidth, and compliance constraints.'
            },
            {
                step: '02',
                title: 'Design & Landing Zone Architecture',
                description: 'Configuring secure multi-account landing zones, VPC subnets, transit gateways, and IAM role hierarchies.'
            },
            {
                step: '03',
                title: 'Develop & Automated Migration',
                description: 'Scripting continuous data replication, staging tests in parallel clouds, and performing non-disruptive cutovers.'
            },
            {
                step: '04',
                title: 'Deploy & FinOps Optimization',
                description: 'Fine-tuning autoscaling thresholds, continuous performance audits, and ongoing cost optimization.'
            }
        ],
        technologies: [
            'AWS', 'Microsoft Azure', 'Google Cloud (GCP)', 'Docker',
            'Kubernetes (EKS/AKS)', 'Terraform', 'AWS Lambda', 'Cloudflare', 'PostgreSQL RDS'
        ],
        whyChooseUs: [
            {
                title: 'Certified Cloud Architects',
                description: 'Our team holds premier certifications across AWS, Azure, and GCP architectures.'
            },
            {
                title: 'Measurable FinOps Results',
                description: 'We consistently identify and eliminate 30–50% in wasted cloud expenditures within 30 days.'
            },
            {
                title: 'Proven Zero-Downtime Track Record',
                description: 'Extensive experience conducting large-scale production database and application cutovers without disrupting users.'
            }
        ]
    },

    'cyber-security': {
        id: 'cyber-security',
        slug: 'cyber-security',
        type: 'service',
        category: 'Services',
        title: 'Cyber Security',
        subtitle: 'Comprehensive Threat Monitoring & Vulnerability Defense',
        tagline: 'Defending your digital assets with proactive threat detection, zero-trust design, and regulatory compliance.',
        description: 'Threat monitoring, application security, network penetration testing, data encryption, vulnerability management, comprehensive security audits, and Identity & Access Management (IAM).',
        highlights: [
            '24/7 Threat Monitoring & SIEM',
            'Application Security & DevSecOps',
            'Network Security & Firewalls',
            'Data Protection & Encryption',
            'Vulnerability Assessments',
            'Identity & Access Management'
        ],
        overview: {
            heading: 'Proactive Cyber Defense for the Modern Threat Landscape',
            text: [
                'Cyber threats are growing exponentially in frequency and sophistication. A single vulnerability in your application or misconfigured cloud bucket can lead to catastrophic data breaches, regulatory penalties, and reputational damage.',
                'We protect your business with a comprehensive, defense-in-depth security approach. From static source code audits and penetration testing to real-time intrusion monitoring and automated incident response, we keep your systems resilient.'
            ],
            stats: [
                { value: 'Zero', label: 'Client Breaches' },
                { value: '<10m', label: 'Incident Containment' },
                { value: '100%', label: 'Audit Compliance' },
                { value: '24/7', label: 'SOC Security Guarding' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Threat Monitoring & SIEM',
                description: 'Centralized log aggregation and AI-assisted anomaly detection flagging suspicious lateral movements and brute force attacks.',
                points: ['Real-time SIEM event correlation', 'Automated IP blacklisting & rate-limiting', '24/7 Security Operations alerting']
            },
            {
                title: 'Application Security (AppSec) & DevSecOps',
                description: 'Integrating automated vulnerability scanners (SAST/DAST) directly into CI/CD pipelines to catch bugs before production.',
                points: ['OWASP Top 10 mitigation', 'Automated SAST & dependency vulnerability checks', 'Secret scanning in git repositories']
            },
            {
                title: 'Network Security & Zero Trust',
                description: 'Segmenting networks, deploying Web Application Firewalls (WAF), and enforcing strict Zero-Trust Network Access (ZTNA).',
                points: ['Cloudflare / AWS WAF rule configuration', 'Micro-segmentation & VPC security groups', 'DDoS mitigation pipelines']
            },
            {
                title: 'Data Protection & Encryption',
                description: 'Enforcing AES-256 encryption at rest and TLS 1.3 in transit with Hardware Security Module (HSM) key management.',
                points: ['Hardware Security Module (HSM) key management', 'PII tokenization & data masking', 'Automated database encryption audits']
            },
            {
                title: 'Vulnerability Management & Pen Testing',
                description: 'Ethical hacking and manual penetration testing uncovering deep logic flaws and API authorization bypasses.',
                points: ['Manual white-hat penetration testing', 'Comprehensive vulnerability remediation reports', 'Automated recurring scan schedules']
            },
            {
                title: 'Identity and Access Management (IAM)',
                description: 'Centralized single sign-on (SSO), multi-factor authentication (MFA/FIDO2), and principle-of-least-privilege governance.',
                points: ['Role-Based Access Control (RBAC)', 'Hardware MFA & Passkey enforcement', 'Privileged Access Management (PAM)']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Threat Surface Audit',
                description: 'Mapping open ports, cloud configurations, API endpoints, employee access privileges, and third-party dependencies.'
            },
            {
                step: '02',
                title: 'Design & Zero-Trust Architecture',
                description: 'Designing strict network boundaries, authentication policies, encryption schemes, and incident response playbooks.'
            },
            {
                step: '03',
                title: 'Develop & Penetration Testing',
                description: 'Simulating real-world cyber attacks, patching vulnerabilities, and embedding security gates into CI/CD.'
            },
            {
                step: '04',
                title: 'Deploy & 24/7 Threat Guarding',
                description: 'Continuous monitoring, recurring vulnerability assessments, and employee phishing simulations.'
            }
        ],
        technologies: [
            'Zero Trust', 'WAF', 'Cloudflare', 'AWS GuardDuty',
            'Vault', 'Docker Security', 'SonarQube', 'OpenID Connect', 'Wireshark'
        ],
        whyChooseUs: [
            {
                title: 'Defense-in-Depth Philosophy',
                description: 'We ensure security is embedded at every layer—network, application, database, and human.'
            },
            {
                title: 'Developer-Friendly Remediation',
                description: 'We don’t just deliver 200-page PDF reports; we provide exact code patches and pull requests.'
            },
            {
                title: 'Audit & Compliance Ready',
                description: 'Prepares your organization effortlessly for SOC 2, ISO 27001, HIPAA, and GDPR certifications.'
            }
        ]
    },

    'custom-software': {
        id: 'custom-software',
        slug: 'custom-software',
        type: 'service',
        category: 'Services',
        title: 'Custom Software',
        subtitle: 'Bespoke Software Engineering & Enterprise Solutions',
        tagline: 'Engineered specifically for your unique operational workflows, scaling seamlessly as you grow.',
        description: 'Tailored enterprise software development, API integrations, workflow automations, custom portals, legacy refactoring, and high-performance distributed architectures.',
        highlights: [
            'Custom Business Software',
            'Enterprise Web Applications',
            'High-Performance REST/GraphQL APIs',
            'Legacy System Integration',
            'Intelligent Workflow Automation',
            'Scalable Distributed Architecture'
        ],
        overview: {
            heading: 'Software Built Around Your Business, Not the Other Way Around',
            text: [
                'Off-the-shelf software forces growing businesses into rigid workflows, costly per-seat licensing, and frustrating feature limitations. When your competitive advantage relies on unique processes, you need custom-engineered software.',
                'We design and build bespoke software solutions that fit your business like a glove. By combining modern TypeScript, resilient databases, and intuitive UI, we deliver solutions that streamline operations, delight users, and drive revenue.'
            ],
            stats: [
                { value: '100%', label: 'Tailored to Workflow' },
                { value: '5x', label: 'Operational Speed' },
                { value: 'Zero', label: 'Unnecessary Seat Fees' },
                { value: '100%', label: 'IP Ownership Transfer' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Custom Business Software Development',
                description: 'End-to-end engineered software crafted to solve your exact operational bottlenecks and unique commercial requirements.',
                points: ['Custom business logic workflows', 'Comprehensive automated testing suites', 'Clean, documented maintainable codebase']
            },
            {
                title: 'Enterprise Applications & Portals',
                description: 'High-performance admin consoles, customer self-service portals, and operational management suites.',
                points: ['Multi-tenant organizational controls', 'Dynamic reporting and data visualization', 'Granular role permissions']
            },
            {
                title: 'Robust API Development & Architecture',
                description: 'Designing clean, versioned RESTful and GraphQL APIs engineered for high throughput and straightforward documentation.',
                points: ['Swagger / OpenAPI automated documentation', 'Rate-limiting & API token authentication', 'High-throughput caching with Redis']
            },
            {
                title: 'Seamless System Integration',
                description: 'Connecting your bespoke software with existing CRMs, ERPs, accounting software, and third-party SaaS.',
                points: ['Stripe / PayPal payment gateways', 'Salesforce, HubSpot & QuickBooks integration', 'Bi-directional webhooks and sync']
            },
            {
                title: 'Workflow Automation Engines',
                description: 'Eliminating repetitive administrative tasks by automatically triggering notifications, document generation, and status updates.',
                points: ['Automated PDF / Invoice generation', 'Email & SMS webhook pipelines', 'Event-driven state machines']
            },
            {
                title: 'Scalable Architecture & Refactoring',
                description: 'Modernizing sluggish or unmaintainable legacy code into cleanly structured, testable microservices.',
                points: ['Modular clean architecture', 'Database indexing and query optimization', 'Containerization with Docker']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Requirements Scoping',
                description: 'Deep-dive user journey mapping, edge-case analysis, data flow modeling, and technology trade-off evaluations.'
            },
            {
                step: '02',
                title: 'Design & Interactive Prototype',
                description: 'Designing clickable Figma wireframes and drafting database schema specifications before writing code.'
            },
            {
                step: '03',
                title: 'Develop & Bi-Weekly Sprints',
                description: 'Transparent Agile sprints with test-driven development (TDD), demo builds, and continuous code reviews.'
            },
            {
                step: '04',
                title: 'Deploy & Full IP Handover',
                description: 'Production deployment, team training, CI/CD pipeline handover, and 100% intellectual property ownership transfer.'
            }
        ],
        technologies: [
            'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
            'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'
        ],
        whyChooseUs: [
            {
                title: 'You Own 100% of the Code',
                description: 'No vendor lock-in. Full source code, documentation, and IP belong entirely to your company.'
            },
            {
                title: 'Engineered for Maintainability',
                description: 'We follow clean coding conventions, extensive linting, and automated unit tests so any engineer can maintain it.'
            },
            {
                title: 'Transparent Agile Sprints',
                description: 'Live demo staging links every two weeks ensure you are always in complete control of development direction.'
            }
        ]
    },

    'mobile-application': {
        id: 'mobile-application',
        slug: 'mobile-application',
        type: 'service',
        category: 'Services',
        title: 'Mobile Application',
        subtitle: 'iOS, Android & Cross-Platform Mobile Engineering',
        tagline: 'High-performance native and cross-platform mobile apps that deliver fluid user experiences.',
        description: 'Native iOS & Android development, cross-platform React Native apps, mobile UI/UX design, real-time push notifications, offline storage, and seamless App Store & Google Play publishing.',
        highlights: [
            'iOS & Android Native Apps',
            'Cross-Platform React Native',
            'Smooth Mobile UI/UX Design',
            'API & Real-Time Synchronization',
            'Push Notifications & Messaging',
            'App Store & Play Store Launch'
        ],
        overview: {
            heading: 'Engaging Mobile Experiences That Users Love',
            text: [
                'Over 60% of all digital interactions now happen on mobile devices. A slow, buggy, or poorly designed mobile app leads to instant uninstalls and negative reviews.',
                'We engineer world-class mobile applications for iOS and Android using React Native and modern native tooling. By prioritizing 60 FPS animations, offline-first data synchronization, and intuitive UX, we create mobile experiences that drive retention and high App Store ratings.'
            ],
            stats: [
                { value: '60 FPS', label: 'Smooth Animation Speed' },
                { value: '4.8+', label: 'Average App Store Rating' },
                { value: '2 Platforms', label: 'One Unified Codebase' },
                { value: '100%', label: 'App Store Approval Rate' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Native Android & iOS Applications',
                description: 'Tailored mobile applications taking full advantage of platform-specific features like FaceID, camera hardware, and widgets.',
                points: ['Swift & Kotlin native optimizations', 'Apple HealthKit & Google Fit sync', 'Haptic feedback and platform design idioms']
            },
            {
                title: 'Cross-Platform React Native Apps',
                description: 'High-velocity mobile engineering delivering near-native performance across both iOS and Android from a shared codebase.',
                points: ['Up to 50% faster time-to-market', 'Shared business logic across platforms', 'Native bridge integrations for hardware']
            },
            {
                title: 'Premium Mobile UI/UX Design',
                description: 'Touch-optimized interfaces with fluid gestures, smooth page transitions, and modern thumb-friendly navigation.',
                points: ['Figma interactive prototypes', 'Micro-animations and gesture interactions', 'Dark mode & dynamic typography support']
            },
            {
                title: 'API Integration & Offline Sync',
                description: 'Seamless integration with backend systems, offline caching using WatermelonDB/SQLite, and optimistic UI updates.',
                points: ['Offline-first SQLite / WatermelonDB', 'Background sync when connection restores', 'Optimistic UI state management']
            },
            {
                title: 'Push Notifications & Real-Time Features',
                description: 'Targeted push messaging via Firebase Cloud Messaging (FCM) and OneSignal, alongside real-time chat and alerts.',
                points: ['Segmented rich push notifications', 'In-app real-time messaging & WebSockets', 'Deep-linking to specific app screens']
            },
            {
                title: 'App Store Publishing & Compliance',
                description: 'Complete management of Apple App Store and Google Play reviews, privacy manifest compliance, and beta TestFlight testing.',
                points: ['Fast-track App Store & Play Store reviews', 'TestFlight & internal testing tracks', 'App Store Optimization (ASO)']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & User Journey',
                description: 'Defining core mobile user flows, screen architecture, hardware permissions, and device compatibility matrix.'
            },
            {
                step: '02',
                title: 'Design & Native Prototypes',
                description: 'Interactive high-fidelity prototypes tested on real physical iPhones and Android devices.'
            },
            {
                step: '03',
                title: 'Develop & TestFlight Sprints',
                description: 'Iterative React Native development with continuous builds deployed directly to TestFlight and Google Internal Testing.'
            },
            {
                step: '04',
                title: 'Deploy & Store Optimization',
                description: 'Final submission handling, App Store metadata optimization, and post-launch crash monitoring with Sentry.'
            }
        ],
        technologies: [
            'React Native', 'TypeScript', 'Expo', 'iOS / Swift',
            'Android / Kotlin', 'Firebase', 'Redux Toolkit / Zustand', 'Tailwind / NativeWind'
        ],
        whyChooseUs: [
            {
                title: 'Smooth 60 FPS Performance',
                description: 'We profile memory and UI thread rendering to ensure your app never drops frames or lags.'
            },
            {
                title: '100% Store Approval Guarantee',
                description: 'We follow Apple and Google human interface and privacy guidelines to ensure rapid store approval.'
            },
            {
                title: 'Cost-Effective Shared Codebase',
                description: 'React Native allows you to launch on both platforms simultaneously without doubling your budget.'
            }
        ]
    },

    'web-application': {
        id: 'web-application',
        slug: 'web-application',
        type: 'service',
        category: 'Services',
        title: 'Web Application',
        subtitle: 'Modern, Scalable Web Applications & SaaS Platforms',
        tagline: 'Building lightning-fast, secure, and responsive web platforms for modern businesses.',
        description: 'End-to-end full-stack web development using React, Next.js, TypeScript, Node.js, Express, and MongoDB. Delivering responsive interfaces, robust REST APIs, high Lighthouse scores, and cloud scalability.',
        highlights: [
            'Modern React & Next.js Stacks',
            'Full-Stack TypeScript Architecture',
            'Node.js & Express REST APIs',
            'Flexible MongoDB & SQL Databases',
            'Responsive Across All Devices',
            'Performance & SEO Optimization'
        ],
        overview: {
            heading: 'Transforming Ideas into Resilient, Scalable Web Platforms',
            text: [
                'In the modern digital landscape, a web application is often the primary touchpoint between your business and your customers. Sluggish load times, clunky interfaces, or security vulnerabilities directly impact conversion rates and brand reputation.',
                'We build modern web applications using React, Next.js, and TypeScript on the frontend paired with resilient Node.js and Express services on the backend. Designed for speed, SEO, and flawless responsiveness across mobile, tablet, and desktop screens.'
            ],
            stats: [
                { value: '98+', label: 'Google Lighthouse Score' },
                { value: '<1s', label: 'First Contentful Paint' },
                { value: '100%', label: 'Responsive Design' },
                { value: '99.9%', label: 'Uptime Reliability' }
            ]
        },
        whatWeProvide: [
            {
                title: 'React & Next.js Frontend Development',
                description: 'Component-driven frontends with server-side rendering (SSR), static site generation (SSG), and smooth client transitions.',
                points: ['Next.js App Router architecture', 'Accessible, WCAG-compliant components', 'Optimized bundle splitting and lazy loading']
            },
            {
                title: 'Type-Safe Full-Stack TypeScript',
                description: 'End-to-end type safety eliminating runtime bugs and accelerating development velocity across frontend and backend.',
                points: ['Shared interfaces and contracts', 'Strictest compiler type enforcement', 'Rapid refactoring confidence']
            },
            {
                title: 'Node.js & Express RESTful APIs',
                description: 'High-throughput, asynchronous backend microservices handling authentication, payments, data queries, and webhooks.',
                points: ['JWT and session-based authentication', 'Rate limiting and DDoS mitigation', 'Express routing and middleware architecture']
            },
            {
                title: 'MongoDB & Database Engineering',
                description: 'Schema modeling, index optimization, automated backups, and aggregation pipelines designed for high-concurrency loads.',
                points: ['Mongoose ODM schema validation', 'Aggregation pipelines for fast reporting', 'Automated indexing and query tuning']
            },
            {
                title: 'Responsive & Fluid UI/UX',
                description: 'Pixel-perfect mobile-first designs styled with clean, modular CSS and Tailwind that adapt seamlessly to all viewports.',
                points: ['Mobile-first layout structure', 'Modern micro-animations and interactions', 'Cross-browser testing (Chrome, Safari, Firefox, Edge)']
            },
            {
                title: 'Performance & SEO Optimization',
                description: 'Core Web Vitals tuning, dynamic OpenGraph meta tags, sitemaps, structured schema data, and asset compression.',
                points: ['Top-tier Google Core Web Vitals', 'Structured JSON-LD schema markup', 'Edge caching via CDNs']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Technical Blueprint',
                description: 'Understanding your business workflow, technical specifications, database schema, and user journey.'
            },
            {
                step: '02',
                title: 'Design & Design System',
                description: 'Establishing typography, color variables, reusable UI components, and responsive layout wireframes.'
            },
            {
                step: '03',
                title: 'Develop & Continuous Testing',
                description: 'Developing frontend and backend in tandem with unit tests, CI/CD automated builds, and staging environments.'
            },
            {
                step: '04',
                title: 'Deploy & Lighthouse Audit',
                description: 'Production deployment to cloud infrastructure, domain configuration, SSL setup, and Lighthouse performance verification.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
            'MongoDB', 'Tailwind CSS', 'Docker', 'Vite', 'REST APIs'
        ],
        whyChooseUs: [
            {
                title: 'Clean, Scalable Architecture',
                description: 'Our codebases are modular, well-documented, and built to scale effortlessly from 100 to 1,000,000+ users.'
            },
            {
                title: 'Blazing Fast Page Speeds',
                description: 'We prioritize performance from day one, ensuring sub-second load times and high Google rankings.'
            },
            {
                title: 'End-to-End Ownership',
                description: 'From initial UI design and database modeling to cloud deployment and ongoing maintenance, we handle it all.'
            }
        ]
    },

    'ai-devops': {
        id: 'ai-devops',
        slug: 'ai-devops',
        type: 'service',
        category: 'Services',
        title: 'AI & DevOps',
        subtitle: 'AI Integration, Continuous Delivery & Cloud Automation',
        tagline: 'Accelerating software release velocity and integrating intelligent AI into your workflows.',
        description: 'AI integration, LLM & machine learning APIs, automated CI/CD pipelines, container orchestration with Docker & Kubernetes, Infrastructure as Code, and intelligent automated monitoring.',
        highlights: [
            'AI-Powered Applications & Agents',
            'Machine Learning API Integration',
            'Automated CI/CD Pipelines',
            'Docker & Kubernetes Orchestration',
            'Infrastructure as Code (Terraform)',
            '24/7 Automated Observability'
        ],
        overview: {
            heading: 'Supercharge Your Engineering Pipeline with AI and Automation',
            text: [
                'Building software is only half the battle—delivering it reliably, frequently, and infusing it with intelligent automation is what sets modern industry leaders apart.',
                'Our AI & DevOps practice combines automated continuous integration/continuous delivery (CI/CD) pipelines with cutting-edge AI capabilities. We integrate custom AI models, automate testing and cloud deployments, and ensure your infrastructure heals itself automatically under load.'
            ],
            stats: [
                { value: '10x', label: 'Deployment Frequency' },
                { value: '85%', label: 'Less Manual Effort' },
                { value: '<5min', label: 'Automated CI/CD Build' },
                { value: '99.9%', label: 'Pipeline Reliability' }
            ]
        },
        whatWeProvide: [
            {
                title: 'AI-Powered Applications & Chatbots',
                description: 'Integrating OpenAI, Claude, and open-source LLMs with retrieval-augmented generation (RAG) for internal workflows.',
                points: ['Custom RAG knowledge base engines', 'Intelligent customer service agents', 'Automated document summarization']
            },
            {
                title: 'Machine Learning API Integration',
                description: 'Connecting predictive models, sentiment analysis, computer vision, and recommendation engines to existing apps.',
                points: ['RESTful model serving (FastAPI/Triton)', 'Vector database search (Pinecone/Milvus)', 'Real-time classification pipelines']
            },
            {
                title: 'Automated CI/CD Pipelines',
                description: 'GitHub Actions and GitLab CI workflows that automatically run linting, unit tests, security scans, and cloud deploys.',
                points: ['Multi-stage Docker builds', 'Automated pull request preview environments', 'Zero-downtime rolling releases']
            },
            {
                title: 'Containerization & Kubernetes',
                description: 'Packaging applications into lightweight Docker containers and managing production orchestration with Kubernetes.',
                points: ['Production-grade Helm charts', 'Kubernetes autoscaling & ingress controllers', 'Microservice service mesh setup']
            },
            {
                title: 'Infrastructure as Code (IaC)',
                description: 'Defining entire cloud architectures declaratively using Terraform and Ansible for reproducible environments.',
                points: ['Terraform state locking and modules', 'Multi-cloud disaster recovery templates', 'Automated drift detection']
            },
            {
                title: 'Intelligent Observability & Monitoring',
                description: 'Centralizing logs, distributed APM traces, and metrics with automated AI alerts flagging anomalies.',
                points: ['Prometheus, Grafana, and Datadog', 'Distributed tracing with OpenTelemetry', 'AI-assisted incident root-cause alerts']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Pipeline Assessment',
                description: 'Evaluating current deployment bottlenecks, manual testing steps, AI use cases, and cloud topology.'
            },
            {
                step: '02',
                title: 'Design & Automation Blueprint',
                description: 'Architecting CI/CD workflows, Docker container strategies, and AI agent prompt-orchestration pipelines.'
            },
            {
                step: '03',
                title: 'Develop & Pipeline Implementation',
                description: 'Setting up automated GitHub Actions, container registries, Terraform state, and vector databases.'
            },
            {
                step: '04',
                title: 'Deploy & Autonomous Operations',
                description: 'Live pipeline cutover, team training on GitOps workflows, and 24/7 AI-monitored cluster alerting.'
            }
        ],
        technologies: [
            'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform',
            'Python', 'FastAPI', 'OpenAI API', 'LangChain', 'Prometheus', 'AWS'
        ],
        whyChooseUs: [
            {
                title: 'True GitOps Workflow',
                description: 'Every infrastructure and configuration change is version-controlled in Git for complete auditable safety.'
            },
            {
                title: 'Practical AI, Not Hype',
                description: 'We build real, ROI-driven AI solutions with measured accuracy and strictly controlled token costs.'
            },
            {
                title: 'Zero Downtime Releases',
                description: 'Ship features multiple times a day with canary and blue-green deployments that never interrupt active users.'
            }
        ]
    }
};
