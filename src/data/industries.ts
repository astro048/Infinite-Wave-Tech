import { DynamicPageData } from '../types/dynamicPage';

export const industriesData: Record<string, DynamicPageData> = {
    'banking': {
        id: 'banking',
        slug: 'banking',
        type: 'industry',
        category: 'Industries',
        title: 'Banking',
        subtitle: 'Digital Banking & Secure Financial Platforms',
        tagline: 'Modernizing financial infrastructure with security, compliance, and real-time agility.',
        description: 'Empowering retail, corporate, and private banks with modern digital banking platforms, omni-channel customer experiences, automated compliance, and resilient financial core systems.',
        highlights: [
            'Digital Banking Platforms',
            'Secure Financial Applications',
            'Customer Experience & Portals',
            'Data Management & Analytics',
            'Intelligent Automation',
            'Bank-Grade Security & Encryption'
        ],
        overview: {
            heading: 'Transforming Financial Ecosystems with Resilient Architecture',
            text: [
                'The banking sector faces an unprecedented demand for instant transactions, hyper-personalized financial services, and flawless security. Our engineering teams build compliant, high-availability digital banking solutions tailored for next-generation institutions.',
                'From omnichannel mobile banking experiences to microservices-based core architectures and real-time fraud mitigation, we turn complex regulatory challenges into operational velocity.'
            ],
            stats: [
                { value: '99.99%', label: 'Platform Availability' },
                { value: '<50ms', label: 'Transaction Latency' },
                { value: '100%', label: 'Regulatory Compliance' },
                { value: '3.5x', label: 'Customer Adoption' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Digital Banking Platforms',
                description: 'End-to-end digital retail and corporate banking suites featuring account aggregation, instant payments, and account management.',
                points: ['Omnichannel mobile & web apps', 'Personal finance management', 'Instant wire and peer-to-peer transfers']
            },
            {
                title: 'Banking Platforms & Core Modernization',
                description: 'Decoupling legacy core banking mainframes into modern API-led and event-driven microservices.',
                points: ['API banking & open banking', 'Event-driven message buses', 'High-throughput ledger engines']
            },
            {
                title: 'Secure Financial Applications',
                description: 'Hardened application architecture featuring zero-trust protocols, multi-factor biometric auth, and role-based access.',
                points: ['Biometric & tokenized security', 'PSD2 & Open Banking standards', 'Automated penetration test pipelines']
            },
            {
                title: 'Customer Experience & Portals',
                description: 'Intuitive, accessible, and fast web and mobile touchpoints designed to boost digital onboarding and retention.',
                points: ['Frictionless e-KYC workflows', 'Self-service customer dashboards', 'Personalized financial insights']
            },
            {
                title: 'Data Management & Governance',
                description: 'Consolidating transaction, credit, and operational logs into unified data lakes for predictive intelligence.',
                points: ['Real-time financial analytics', 'Auditable compliance trails', 'Automated ledger reconciliation']
            },
            {
                title: 'Automation & Security Infrastructure',
                description: 'AI-driven AML (anti-money laundering) monitoring, automated compliance checks, and proactive intrusion detection.',
                points: ['Automated AML/KYC checks', 'Zero-trust network architecture', '24/7 SIEM monitoring']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Compliance Review',
                description: 'We audit your regulatory requirements, security posture, legacy core architectures, and user journeys.'
            },
            {
                step: '02',
                title: 'Design & Architecture',
                description: 'Crafting resilient, zero-trust system blueprints, secure microservices, and user-friendly UX wireframes.'
            },
            {
                step: '03',
                title: 'Develop & Hardened Testing',
                description: 'Agile sprints with automated code analysis, penetration tests, multi-environment validation, and strict encryption.'
            },
            {
                step: '04',
                title: 'Deploy & Continuous Support',
                description: 'Zero-downtime rolling deployments, regulatory filing documentation, and round-the-clock infrastructure monitoring.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Java Spring Boot',
            'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS FinTech', 'Redis'
        ],
        whyChooseUs: [
            {
                title: 'Enterprise-Grade Security',
                description: 'Every solution adheres to ISO 27001, SOC 2, and rigorous financial sector data protection standards.'
            },
            {
                title: 'High-Throughput Engineering',
                description: 'Our distributed systems handle millions of concurrent transactions with sub-second execution speeds.'
            },
            {
                title: 'Seamless Core Integration',
                description: 'Extensive track record connecting with major payment gateways, clearing houses, and banking mainframes.'
            }
        ]
    },

    'capital-markets': {
        id: 'capital-markets',
        slug: 'capital-markets',
        type: 'industry',
        category: 'Industries',
        title: 'Capital Markets',
        subtitle: 'Expert IT Services for the Capital Market Industry',
        tagline: 'We empower capital market institutions with secure, high-performance technology solutions that drive smarter trading, better compliance, and real-time decision-making.',
        description: 'Empowering capital market firms with agile, secure, and scalable technology solutions to drive innovation, broaden market access, and accelerate global growth.',
        highlights: [
            'Equity Trading',
            'Forex & Currency Markets',
            'Commodities Trading',
            'Trading & Operations Digitalization',
            'Risk Management & Compliance',
            'Data Management & Analytics'
        ],
        overview: {
            heading: 'Expert IT services for the Capital Market Industry',
            text: [
                'Empowering capital market firms with agile, secure, and scalable technology solutions to drive innovation, broaden market access, and accelerate global market expansion.',
                'From institutional trading desks to digital brokerages, our engineering platforms ensure high-speed order routing, comprehensive regulatory reporting, and seamless connectivity.'
            ],
            stats: [
                { value: '300+', label: 'Financial Services Firms Worldwide' },
                { value: '7/10', label: 'Top Largest Banks Worldwide' },
                { value: '<10ms', label: 'Order Execution Speed' },
                { value: '99.999%', label: 'Platform Reliability' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Talent & Execution',
                description: 'Specialized software solutions, quantitative research architectures, and modern engineering platforms built to keep trading desks ahead.',
                points: ['High-throughput execution algorithms', 'Quantitative research pipelines', 'Specialized FinTech developer pods']
            },
            {
                title: 'Global Reach',
                description: 'Gain exposure to a vast institutional and retail investor base, facilitating seamless cross-border market access and partnerships.',
                points: ['Cross-border regulatory alignment', 'Multi-exchange connectivity', 'Global liquidity pool routing']
            },
            {
                title: 'Liquidity and Valuation',
                description: 'Provide dynamic market liquidity and transparent valuation mechanisms across multiple asset classes.',
                points: ['Real-time order book valuation', 'High-frequency liquidity matching', 'Transparent pricing telemetry']
            },
            {
                title: 'Strategic Opportunities',
                description: 'Capitalize on strategic mergers, acquisitions, and technology partnerships to foster sustainable industry diversification.',
                points: ['M&A data room modernization', 'Consolidated regulatory filings', 'Synergistic API integrations']
            },
            {
                title: 'Digitalization of Trading and Operations',
                description: 'Boost execution speed and precision in capital markets through modern automated workflows and low-latency engines.',
                points: ['Algorithmic order execution', 'FIX protocol compliance', 'Automated trade reconciliation']
            },
            {
                title: 'Risk Management and Compliance',
                description: 'Comprehensive risk monitoring and regulatory technology to streamline compliance efforts for market participants.',
                points: ['Pre-trade and post-trade risk checks', 'MiFID II & Dodd-Frank compliance', 'Tamper-proof audit logging']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Market Spec',
                description: 'Assessing your asset classes, execution latency benchmarks, feed protocols, and trading workflows.'
            },
            {
                step: '02',
                title: 'Design & Low-Latency Architecture',
                description: 'Architecting zero-garbage collection, memory-mapped data buses, and intuitive real-time UI dashboards.'
            },
            {
                step: '03',
                title: 'Develop & Stress Testing',
                description: 'Implementing high-concurrency codebases tested under extreme peak-load market turbulence simulations.'
            },
            {
                step: '04',
                title: 'Deploy & Live Monitoring',
                description: 'Co-located deployment, real-time APM telemetry, and dedicated critical-incident support channels.'
            }
        ],
        technologies: [
            'TypeScript', 'React', 'Node.js', 'Java', 'WebSockets',
            'Apache Kafka', 'Redis', 'Docker', 'Time-Series DBs', 'Python Quant'
        ],
        whyChooseUs: [
            {
                title: 'Engineered for Low Latency',
                description: 'We optimize every tier from network sockets to DOM rendering for maximum FPS and minimal lag.'
            },
            {
                title: 'Deep Market Expertise',
                description: 'Engineers who understand equities, FX, derivatives, fixed income, and modern quantitative protocols.'
            },
            {
                title: 'Regulatory Ready',
                description: 'Pre-configured compliance modules for instant audit generation and reporting compliance.'
            }
        ]
    },

    'enterprise-technology': {
        id: 'enterprise-technology',
        slug: 'enterprise-technology',
        type: 'industry',
        category: 'Industries',
        title: 'Enterprise Technology',
        subtitle: 'Scalable Enterprise Systems & Digital Transformation',
        tagline: 'Empowering global enterprises with unified digital infrastructure and automated workflows.',
        description: 'Architecting scalable enterprise applications, business process automation, secure cloud infrastructure, and data platforms that eliminate departmental silos and accelerate agility.',
        highlights: [
            'Enterprise Applications',
            'Digital Transformation',
            'Cloud Infrastructure',
            'Business Automation',
            'System Integration',
            'Data Platforms'
        ],
        overview: {
            heading: 'Unifying Fragmented Enterprise Ecosystems',
            text: [
                'Large organizations grapple with disconnected legacy tools, ballooning technical debt, and fragmented customer data. We partner with technology leaders to engineer clean, modular architectures that bring unity across global operations.',
                'Whether re-architecting legacy monoliths into cloud-native microservices or building central enterprise resource platforms, our engineering delivers reliability, governance, and rapid feature velocity.'
            ],
            stats: [
                { value: '60%', label: 'Workflow Acceleration' },
                { value: '45%', label: 'IT Maintenance Reduction' },
                { value: '99.95%', label: 'SLA Guarantee' },
                { value: '30+', label: 'Systems Integrated' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Enterprise Applications',
                description: 'Custom ERP, CRM, and portal systems built to withstand high concurrency and complex operational hierarchies.',
                points: ['Multi-tenant enterprise architectures', 'Role-based access management', 'Centralized administrative controls']
            },
            {
                title: 'Digital Transformation Advisory',
                description: 'Step-by-step technological modernization roadmaps that de-risk migration while maintaining continuous business ops.',
                points: ['Legacy code auditing', 'Monolith-to-microservices plans', 'Change enablement frameworks']
            },
            {
                title: 'Cloud Infrastructure & DevOps',
                description: 'Multi-region, self-healing cloud setups with automated infrastructure as code (Terraform) and CI/CD.',
                points: ['Kubernetes cluster orchestration', 'Auto-scaling infrastructure', 'Disaster recovery runbooks']
            },
            {
                title: 'Business Workflow Automation',
                description: 'Replacing manual handoffs and approvals with automated, event-driven pipelines and notification systems.',
                points: ['BPMN-compliant workflow engines', 'Cross-department automated approvals', 'Audit logging & SLA tracking']
            },
            {
                title: 'System Integration & Enterprise Service Bus',
                description: 'Connecting ERPs (SAP, Oracle, Salesforce), legacy databases, and SaaS tools via clean REST/GraphQL APIs.',
                points: ['Enterprise API gateways', 'Middleware integration adapters', 'Unified identity & SSO (OAuth/SAML)']
            },
            {
                title: 'Enterprise Data Platforms',
                description: 'Centralized data warehouses, master data management, and real-time business intelligence dashboards.',
                points: ['ETL / ELT pipeline orchestration', 'Executive KPI dashboards', 'Master data governance']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Ecosystem Audit',
                description: 'Mapping current tools, enterprise data flow, security governance, and stakeholder requirements.'
            },
            {
                step: '02',
                title: 'Design & Solution Blueprint',
                description: 'Developing target-state microservice diagrams, data models, and phased implementation roadmaps.'
            },
            {
                step: '03',
                title: 'Develop & Staged Migration',
                description: 'Building in modular cycles using the strangler-fig pattern to replace legacy systems with zero disruption.'
            },
            {
                step: '04',
                title: 'Deploy & SLA Governance',
                description: 'Enterprise release orchestration, user training workshops, and comprehensive SLA-backed maintenance.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
            'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'AWS', 'GraphQL'
        ],
        whyChooseUs: [
            {
                title: 'Built for Massive Scale',
                description: 'Our solutions are engineered to support tens of thousands of active concurrent employees and users.'
            },
            {
                title: 'Security & Compliance First',
                description: 'Standardized on SOC 2, HIPAA, GDPR, and enterprise SSO integrations from day one.'
            },
            {
                title: 'Zero Business Disruption',
                description: 'Phased rollout strategies guarantee your active business operations never experience downtime.'
            }
        ]
    },

    'healthcare': {
        id: 'healthcare',
        slug: 'healthcare',
        type: 'industry',
        category: 'Industries',
        title: 'Healthcare',
        subtitle: 'Digital Health Solutions & Patient Care Platforms',
        tagline: 'HIPAA-compliant healthcare technologies that connect providers, patients, and clinical data.',
        description: 'Developing secure telemedicine platforms, electronic medical records integrations, patient portals, clinical workflow automations, and predictive healthcare analytics.',
        highlights: [
            'Healthcare Applications',
            'Patient Platforms & Portals',
            'Healthcare Data Management',
            'Digital Workflows',
            'Secure HIPAA Systems',
            'Appointment Management'
        ],
        overview: {
            heading: 'Empowering Clinicians and Elevating Patient Outcomes',
            text: [
                'Healthcare organizations need software that is intuitive for patients, efficient for clinicians, and uncompromised in data security. We build digital health ecosystems that reduce administrative friction and empower healthcare providers to focus on care.',
                'All our healthcare solutions are built from the ground up to comply with HIPAA, FHIR, and HL7 standards, ensuring seamless interoperability across hospital networks, diagnostic centers, and clinics.'
            ],
            stats: [
                { value: '100%', label: 'HIPAA Compliant' },
                { value: '40%', label: 'Less Admin Time' },
                { value: '4.8/5', label: 'Patient Satisfaction' },
                { value: '256-bit', label: 'End-to-End Encryption' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Healthcare Web & Mobile Applications',
                description: 'Telemedicine apps, remote patient monitoring (RPM) interfaces, and clinician charting suites.',
                points: ['Encrypted HD video consultations', 'In-app prescription handling', 'Vitals tracking and wearable sync']
            },
            {
                title: 'Patient Platforms & Portals',
                description: 'User-friendly patient experiences featuring secure message exchange, lab result access, and billing management.',
                points: ['Lab & diagnostic report access', 'Instant digital check-in', 'Family member care authorization']
            },
            {
                title: 'Healthcare Data Interoperability',
                description: 'Seamless integration with Epic, Cerner, and other EHRs via modern FHIR and HL7 data exchange standards.',
                points: ['FHIR / HL7 API integrations', 'EHR two-way data sync', 'Audit-ready medical record logging']
            },
            {
                title: 'Digital Clinical Workflows',
                description: 'Automation of clinical intake, insurance verification, pre-authorizations, and staff scheduling.',
                points: ['Automated insurance verification', 'Doctor on-call schedule engines', 'Diagnostic routing alerts']
            },
            {
                title: 'Secure Health Systems',
                description: 'Enterprise-grade encryption at rest and in transit, multi-factor biometric authentication, and strict BAA compliance.',
                points: ['Zero-knowledge data vaults', 'BAA-backed cloud hosting', 'Comprehensive HIPAA compliance audits']
            },
            {
                title: 'Appointment Management & Reminders',
                description: 'Intelligent scheduling engines that reduce patient no-shows via automated SMS/WhatsApp reminders.',
                points: ['Dynamic slot booking', 'SMS and email notifications', 'Real-time calendar synchronization']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Clinical Audit',
                description: 'Understanding clinical workflows, patient touchpoints, EHR standards, and data privacy protocols.'
            },
            {
                step: '02',
                title: 'Design & Human-Centered UX',
                description: 'Creating accessible, WCAG-compliant, empathetic interfaces for patients of all demographics and busy doctors.'
            },
            {
                step: '03',
                title: 'Develop & HIPAA Hardening',
                description: 'Implementing encrypted data storage, FHIR endpoints, secure audit trails, and clinical penetration testing.'
            },
            {
                step: '04',
                title: 'Deploy & Clinical Validation',
                description: 'Staged clinic rollout, provider training, and 24/7 continuous health system monitoring.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
            'MongoDB', 'WebRTC', 'Docker', 'AWS HealthLake', 'FHIR/HL7'
        ],
        whyChooseUs: [
            {
                title: 'Rigorous Compliance',
                description: 'Native adherence to HIPAA, HITECH, GDPR, and FHIR interoperability guidelines.'
            },
            {
                title: 'Clinical Workflow Awareness',
                description: 'We design software that clinicians love using, minimizing burnout and documentation drag.'
            },
            {
                title: 'Rock-Solid Security',
                description: 'Military-grade encryption and automated access log monitoring protect sensitive PHI.'
            }
        ]
    },

    'logistics': {
        id: 'logistics',
        slug: 'logistics',
        type: 'industry',
        category: 'Industries',
        title: 'Logistics',
        subtitle: 'Fleet Management & Supply Chain Solutions',
        tagline: 'End-to-end supply chain visibility, route optimization, and automated freight tracking.',
        description: 'Engineering intelligent fleet tracking systems, warehouse management software, supply-chain visibility platforms, and automated dispatch engines that eliminate supply chain bottlenecks.',
        highlights: [
            'Logistics Management',
            'Fleet Management',
            'Real-Time Tracking Systems',
            'Supply-Chain Platforms',
            'Automation & Dispatch',
            'Logistics Analytics'
        ],
        overview: {
            heading: 'Real-Time Precision for Global Supply Chains',
            text: [
                'Modern logistics operations demand complete visibility from factory floor to the final mile. Fragmented communications, delayed tracking feeds, and manual dispatch cost companies millions annually.',
                'We build integrated logistics platforms that track shipments in real time, automate route optimization using geospatial intelligence, and streamline yard and warehouse throughput.'
            ],
            stats: [
                { value: '25%', label: 'Fuel Cost Savings' },
                { value: '99.2%', label: 'On-Time Deliveries' },
                { value: 'Real-Time', label: 'GPS Tracking' },
                { value: '3x', label: 'Dispatch Speed' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Logistics Management Systems',
                description: 'Centralized command center managing carriers, freight brokers, customs documentation, and invoices.',
                points: ['Multi-modal carrier management', 'Digital bill of lading (BOL)', 'Customs documentation automation']
            },
            {
                title: 'Fleet Management & Telematics',
                description: 'Connected vehicle telemetry monitoring fuel consumption, driver behavior, maintenance cycles, and engine diagnostics.',
                points: ['OBD-II / CAN bus telemetry', 'Driver safety scorecards', 'Preventative maintenance reminders']
            },
            {
                title: 'Real-Time Tracking Systems',
                description: 'Live GPS mapping, geofencing triggers, ETA calculation, and dynamic customer tracking portals.',
                points: ['Sub-second GPS location refresh', 'Custom polygon geofences', 'Dynamic ETA calculation algorithms']
            },
            {
                title: 'Supply-Chain Platforms',
                description: 'End-to-end visibility connecting vendors, shipping ports, distribution hubs, and retail outlets.',
                points: ['Multi-tier supplier visibility', 'Inventory replenishment triggers', 'Port & customs delay tracking']
            },
            {
                title: 'Automation & Dispatch Engines',
                description: 'Smart algorithms that assign loads to drivers and optimize multi-stop delivery routes automatically.',
                points: ['AI-powered route optimization', 'Automated load matching', 'Driver mobile application companion']
            },
            {
                title: 'Logistics Analytics & KPIs',
                description: 'Dashboards tracking cost per mile, transit times, fuel efficiency, and carrier performance ratings.',
                points: ['Cost-per-mile dashboards', 'On-time delivery KPI monitoring', 'Carrier scorecarding']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Operational Mapping',
                description: 'Analyzing freight flows, fleet telematics hardware, dispatch processes, and warehouse touchpoints.'
            },
            {
                step: '02',
                title: 'Design & Dispatch Engine',
                description: 'Architecting high-frequency geospatial databases, clean driver mobile UX, and centralized dispatcher consoles.'
            },
            {
                step: '03',
                title: 'Develop & Field Testing',
                description: 'Building real-time WebSockets, mapping integrations, offline-capable mobile apps, and route solvers.'
            },
            {
                step: '04',
                title: 'Deploy & Fleet Onboarding',
                description: 'Driver app rollouts, dispatcher training, telematics device calibration, and live support.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
            'MongoDB', 'PostgreSQL / PostGIS', 'Docker', 'WebSockets', 'Mapbox / Google Maps'
        ],
        whyChooseUs: [
            {
                title: 'Geospatial Engineering',
                description: 'Specialized in handling high-velocity GPS streams, spatial queries, and dynamic geofencing.'
            },
            {
                title: 'Offline-First Mobile Apps',
                description: 'Driver apps that work reliably in remote locations with automatic synchronization upon reconnecting.'
            },
            {
                title: 'Measurable ROI',
                description: 'Direct reductions in fuel expenditure, vehicle downtime, and manual customer service inquiries.'
            }
        ]
    },

    'manufacturing': {
        id: 'manufacturing',
        slug: 'manufacturing',
        type: 'industry',
        category: 'Industries',
        title: 'Manufacturing',
        subtitle: 'Smart Factory & Industrial IoT Solutions',
        tagline: 'Bridging operational technology with digital operations for high-efficiency manufacturing.',
        description: 'Building custom MES (Manufacturing Execution Systems), predictive maintenance platforms, inventory tracking, industrial IoT monitoring, and digital supply operations.',
        highlights: [
            'Manufacturing Software',
            'Production Management',
            'Inventory & Warehousing',
            'Automation & Robotics',
            'Industrial Analytics',
            'IoT Integration'
        ],
        overview: {
            heading: 'Transforming Shop Floors into Intelligent Digital Factories',
            text: [
                'Industrial manufacturers must balance strict quality standards, equipment uptime, and rapidly changing supply dynamics. Disconnected machinery and paper logs prevent managers from identifying bottlenecks in real time.',
                'We develop Industry 4.0 software platforms that ingest sensor data directly from PLCs and CNC machines, calculate overall equipment effectiveness (OEE), and predict machine failures before they cause costly stoppages.'
            ],
            stats: [
                { value: '35%', label: 'Downtime Reduction' },
                { value: '98.5%', label: 'Inventory Accuracy' },
                { value: '+18%', label: 'OEE Improvement' },
                { value: '1000+', label: 'Sensors Ingested' }
            ]
        },
        whatWeProvide: [
            {
                title: 'Manufacturing Execution Software (MES)',
                description: 'Real-time production scheduling, work-order tracking, bill of materials (BOM), and digital work instructions.',
                points: ['Digital work instruction displays', 'Work-in-progress (WIP) tracking', 'Shop-floor dispatch schedules']
            },
            {
                title: 'Production Management & OEE',
                description: 'Real-time calculation of Overall Equipment Effectiveness (Availability, Performance, Quality) per machine.',
                points: ['Automated OEE calculation', 'Line stoppage reason logging', 'Shift output tracking']
            },
            {
                title: 'Inventory Systems & Material Flow',
                description: 'Barcode/RFID-enabled tracking of raw materials, parts, and finished goods across storage locations.',
                points: ['RFID & barcode scanning', 'Just-In-Time (JIT) replenishment alerts', 'Batch and lot traceability']
            },
            {
                title: 'Automation & SCADA Interfaces',
                description: 'Modern human-machine interfaces (HMI) and web SCADA consoles accessible securely from any device.',
                points: ['Modern responsive HMI dashboards', 'Automated recipe management', 'Emergency alarm routing']
            },
            {
                title: 'IoT Integration & Sensor Telemetry',
                description: 'MQTT and OPC-UA gateways connecting sensors for vibration, temperature, and power consumption.',
                points: ['OPC-UA and MQTT gateways', 'Vibration and thermal telemetry', 'Edge computing data filtering']
            },
            {
                title: 'Digital Operations & Predictive Maintenance',
                description: 'Machine learning algorithms that predict component wear to schedule maintenance during planned downtimes.',
                points: ['Predictive wear models', 'Automated maintenance work-orders', 'Digital quality assurance logs']
            }
        ],
        approach: [
            {
                step: '01',
                title: 'Discover & Factory Floor Audit',
                description: 'Surveying machine interfaces, PLC controllers, network infrastructure, and plant production targets.'
            },
            {
                step: '02',
                title: 'Design & Edge-to-Cloud Architecture',
                description: 'Architecting rugged local edge gateways, low-latency data pipelines, and clean supervisor dashboards.'
            },
            {
                step: '03',
                title: 'Develop & Machine Protocol Linking',
                description: 'Integrating industrial protocols (Modbus, OPC-UA, MQTT), building UI components, and testing failovers.'
            },
            {
                step: '04',
                title: 'Deploy & Operator Training',
                description: 'Factory-wide deployment, shift supervisor workshops, calibration, and 24/7 industrial support.'
            }
        ],
        technologies: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
            'MongoDB', 'PostgreSQL', 'MQTT / OPC-UA', 'Docker', 'Time-Series DBs'
        ],
        whyChooseUs: [
            {
                title: 'Shop-Floor Practicality',
                description: 'We design high-contrast, touch-optimized interfaces built for operators wearing protective gear.'
            },
            {
                title: 'Industrial Protocol Mastery',
                description: 'Expertise bridging legacy serial protocols and PLCs with modern web architectures.'
            },
            {
                title: 'Actionable Insights',
                description: 'Clear metrics that operators and plant directors can use immediately to boost throughput.'
            }
        ]
    }
};
