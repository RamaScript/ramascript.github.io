// script/servicesData.js — Software, AI & Mentorship Services Data

const servicesData = {
  Software: [
    {
      title: "AI Agents & Custom Chatbots",
      icon: "fas fa-robot",
      description:
        "Autonomous multi-step AI agents, intelligent customer support chatbots, and tool-calling LLM workflows built for real business productivity.",
      features: [
        "Autonomous Multi-Step Agents",
        "OpenAI, Claude & Gemini APIs",
        "WhatsApp & Web Chatbots",
        "Function & Tool Calling",
        "Multi-Turn Conversation Memory",
        "Webhook & CRM Integration",
      ],
      deliveryTime: "2-4 weeks",
      startingPrice: "Custom Scope",
      projectType: "AI Workflow",
      highlight: "Next-Gen",
      "show-pricing": false,
      detailedFeatures: [
        "Autonomous task agents capable of executing multi-step business logic via tool calls",
        "Intelligent customer support chatbots with context memory and brand persona tuning",
        "Integration with WhatsApp Business API, Telegram, or custom web chat widgets",
        "Structured output generation (JSON) for seamless pipeline integration",
        "Fallback mechanisms, human handoff, and prompt safety guardrails",
        "API integration with OpenAI GPT-4o, Anthropic Claude 3.5, and Google Gemini",
        "Cost-efficient token usage optimization and prompt caching",
        "Deployment on serverless endpoints or dedicated cloud instances",
      ],
      whyChoose: [
        {
          icon: "fas fa-microchip",
          title: "Practical AI",
          description:
            "Built to solve real business bottlenecks, not just demo gimmicks.",
        },
        {
          icon: "fas fa-comments",
          title: "Natural Tone",
          description:
            "Prompt-engineered for polite, accurate, brand-aligned conversations.",
        },
        {
          icon: "fas fa-coins",
          title: "Token Optimization",
          description:
            "Efficient context management to keep API running costs minimal.",
        },
        {
          icon: "fas fa-plug",
          title: "Seamless Handoff",
          description:
            "Easy integration with existing databases, CRMs, and email systems.",
        },
      ],
    },
    {
      title: "RAG Integration & Knowledge Engines",
      icon: "fas fa-brain",
      description:
        "Grounding LLMs with your private business documents, PDFs, and databases using Retrieval-Augmented Generation (RAG) and high-speed vector search.",
      features: [
        "Retrieval-Augmented Generation (RAG)",
        "Vector Embeddings & Search",
        "Document Parsing (PDFs, Docs, Sheets)",
        "Vector Databases (Pinecone / Chroma / pgvector)",
        "Source Citation Tracking",
        "Zero-Hallucination Guardrails",
      ],
      deliveryTime: "2-4 weeks",
      startingPrice: "Custom Scope",
      projectType: "Enterprise AI",
      highlight: "Enterprise",
      "show-pricing": false,
      detailedFeatures: [
        "End-to-end document ingestion pipelines for company manuals, PDFs, and knowledge bases",
        "Smart text chunking and embedding generation using industry-standard models",
        "Vector similarity search powered by Pinecone, ChromaDB, or pgvector",
        "Context injection and re-ranking for ultra-accurate answers with source citations",
        "Strict prompt boundaries to eliminate hallucinations on out-of-scope queries",
        "Interactive web dashboard or search API for your internal staff or customers",
        "Scheduled re-indexing pipelines when company documents are updated",
        "Complete data privacy — your proprietary data stays securely under your control",
      ],
      whyChoose: [
        {
          icon: "fas fa-file-shield",
          title: "Data Confidentiality",
          description:
            "Proprietary information is securely isolated with zero model retraining.",
        },
        {
          icon: "fas fa-magnifying-glass",
          title: "Verifiable Answers",
          description:
            "Every answer cites exact document page numbers and sources.",
        },
        {
          icon: "fas fa-database",
          title: "Scalable Search",
          description:
            "Handles thousands of documents with sub-second retrieval latency.",
        },
        {
          icon: "fas fa-arrows-rotate",
          title: "Auto Sync",
          description:
            "Automated pipelines to re-index new documents as your library grows.",
        },
      ],
    },
    {
      title: "Mobile App Development",
      icon: "fas fa-mobile-screen-button",
      description:
        "High-performance cross-platform Flutter and native Android applications built with clean architecture, offline-first data, and 60fps responsiveness.",
      features: [
        "Flutter & Dart (iOS & Android)",
        "Native Android (Kotlin / Java)",
        "BLoC & Riverpod State Management",
        "Google Play Console Setup",
        "Firebase & Cloud Integration",
        "Payment Gateways & Push Alerts",
      ],
      deliveryTime: "3-6 weeks",
      startingPrice: "Custom Scope",
      projectType: "Mobile Application",
      highlight: "High Demand",
      "show-pricing": false,
      detailedFeatures: [
        "Single clean codebase for Android & iOS or native Android implementation",
        "Smooth 60fps animations following modern Material 3 and iOS human interface guidelines",
        "Robust state management (BLoC / Cubit / Riverpod) for bug-free scalability",
        "Complete Google Play Console setup, signing, policy compliance, and app release",
        "Firebase authentication, Cloud Firestore, and real-time synchronization",
        "Payment gateway integration (Razorpay, Stripe, Cashfree)",
        "Offline-first local caching with SQLite / Hive",
        "30 days dedicated post-launch maintenance and bug support",
      ],
      whyChoose: [
        {
          icon: "fas fa-bolt",
          title: "Production Speed",
          description:
            "Rapid iteration cycles with weekly test builds and clean milestone tracking.",
        },
        {
          icon: "fas fa-shield-halved",
          title: "Store Approval Ready",
          description:
            "Built to comply with strict Google Play Store policies and requirements.",
        },
        {
          icon: "fas fa-cubes",
          title: "Modular Codebase",
          description:
            "Clean separation of presentation, domain, and data layers for easy future expansion.",
        },
        {
          icon: "fas fa-headset",
          title: "Support Included",
          description:
            "30 days of free bug-fixing and configuration support after store launch.",
        },
      ],
    },
    {
      title: "Full-Stack Web Engineering",
      icon: "fas fa-globe",
      description:
        "Modern web platforms, client dashboards, and custom SaaS products built with React, Node.js, and scalable cloud databases.",
      features: [
        "React JS & TypeScript",
        "Node.js & Express REST APIs",
        "Database Architecture (Supabase / MySQL)",
        "Responsive Mobile-First UI",
        "JWT Auth & Security",
        "Cloud Hosting & Fast Loading",
      ],
      deliveryTime: "2-5 weeks",
      startingPrice: "Custom Scope",
      projectType: "Web Platform",
      highlight: "Popular",
      "show-pricing": false,
      detailedFeatures: [
        "High-performance single-page and server-rendered web applications",
        "Clean, responsive UI that looks beautiful across smartphones, tablets, and desktops",
        "RESTful API design with structured request validation and error handling",
        "Database schema design and queries with PostgreSQL, MySQL, or Supabase",
        "Role-based authentication, user permissions, and session management",
        "Fast page load optimization (< 2s) and modern SEO meta structure",
        "Third-party integrations: payment processing, email notifications, webhooks",
        "Deployment to Vercel, Render, AWS, or custom Linux VPS with SSL",
      ],
      whyChoose: [
        {
          icon: "fas fa-mobile-screen",
          title: "Mobile First",
          description:
            "Pixel-perfect responsiveness across all screen sizes and browsers.",
        },
        {
          icon: "fas fa-lock",
          title: "Secure Architecture",
          description:
            "Sanitized queries, secure headers, encrypted credentials, and token auth.",
        },
        {
          icon: "fas fa-gauge-high",
          title: "Performance First",
          description:
            "Optimized bundle sizes, asset compression, and clean DOM rendering.",
        },
        {
          icon: "fas fa-code",
          title: "Full Documentation",
          description:
            "Comprehensive API documentation and clean handover for your team.",
        },
      ],
    },
    {
      title: "Data Analysis & Python Automation",
      icon: "fas fa-chart-line",
      description:
        "Automated data pipelines, web scrapers, data cleaning workflows, and analytics reporting designed to eliminate manual spreadsheet bottlenecks.",
      features: [
        "Python Data Pipelines (ETL)",
        "Automated Web Scraping",
        "Data Cleaning with Pandas & NumPy",
        "Automated Excel & PDF Reports",
        "Scheduled Cloud Automation",
        "Interactive Analytics Dashboards",
      ],
      deliveryTime: "1-3 weeks",
      startingPrice: "Custom Scope",
      projectType: "Data Automation",
      highlight: "Time Saver",
      "show-pricing": false,
      detailedFeatures: [
        "Custom Python scripts to automate repetitive manual data entry and spreadsheet tasks",
        "Resilient web scrapers with rate limiting, proxy handling, and headless browser automation",
        "Data cleaning, deduplication, and transformation pipelines using Pandas & NumPy",
        "Automated report generation in Excel, CSV, or formatted PDF with charts",
        "Automated email dispatch of daily/weekly reports to stakeholders",
        "Database population scripts and third-party data synchronization",
        "Cloud cron jobs and serverless scheduling for 24/7 background operation",
        "Full documentation and source code handover with simple one-click execution",
      ],
      whyChoose: [
        {
          icon: "fas fa-clock",
          title: "Hours Saved",
          description:
            "Replaces hours of repetitive daily spreadsheet work with 1-click scripts.",
        },
        {
          icon: "fas fa-check-double",
          title: "Zero Human Error",
          description:
            "Clean, consistent data transformation with automated validation checks.",
        },
        {
          icon: "fas fa-code-compare",
          title: "Resilient Scraping",
          description:
            "Error-handled scrapers that gracefully adapt to website layout changes.",
        },
        {
          icon: "fas fa-terminal",
          title: "Easy to Run",
          description:
            "Simple execution via terminal or fully automated cloud cron jobs.",
        },
      ],
    },
  ],

  Mentorship: [
    {
      title: "1-on-1 Full-Stack & Mobile Mentorship",
      icon: "fas fa-chalkboard-user",
      description:
        "Direct personalized 1-on-1 coaching for aspiring developers looking to master Flutter, React, Python, or Modern System Architecture through practical real-world projects.",
      features: [
        "1-on-1 Live Code Reviews",
        "Flutter & Full-Stack Roadmaps",
        "Real Portfolio Project Guidance",
        "DSA & Technical Interview Prep",
        "Clean Architecture & Best Practices",
        "Direct Doubt Resolution",
      ],
      duration: "Flexible Sprints",
      level: "Beginner to Intermediate",
      price: "Inquire for Availability",
      highlight: "Limited Slots",
      "show-pricing": false,
      learningOutcomes: [
        "Build complete production-grade applications from scratch instead of tutorial hell",
        "Master industry-standard clean architecture, Git workflows, and debugging techniques",
        "Learn how to scope, architect, and ship apps to the Google Play Store independently",
        "Develop strong problem-solving habits for technical interview rounds",
      ],
      whyChoose: [
        {
          icon: "fas fa-user-check",
          title: "Direct 1-on-1 Guidance",
          description:
            "Personalized attention tailored to your exact career goals and current skill level.",
        },
        {
          icon: "fas fa-laptop-code",
          title: "Project-Based Learning",
          description:
            "Focus on building real, portfolio-ready products that impress recruiters.",
        },
      ],
    },
  ],
};

if (typeof window !== "undefined") {
  window.servicesData = servicesData;
}
