export const projectsData = [
  {
    id: 'neuron',
    title: 'Neuron',
    tagline: 'AI-powered personal knowledge management.',
    category: 'AI / Knowledge Systems',
    description: 'Personal knowledge base with semantic vector search, automated document ingestion, and conversational Q&A.',
    extendedOverview: 'Neuron is an intelligent second brain application built to organize notes, technical documents, and reference bookmarks with semantic vector search. Built with a FastAPI backend and ChromaDB vector store, it delivers low-latency contextual retrieval and synthesis over private knowledge bases.',
    keyFeatures: [
      'Semantic document embeddings and vector similarity indexing',
      'Context-grounded conversational retrieval with source citations',
      'FastAPI async microservice architecture with low-latency responses',
      'Local-first vector store integration for private data security'
    ],
    techStack: ['Python', 'FastAPI', 'ChromaDB', 'LangChain'],
    techIcons: ['python', 'fastapi', 'chromadb', 'langchain'],
    links: {
      github: 'https://github.com/basantyadav/neuron',
      live: 'https://github.com/basantyadav/neuron#demo'
    },
    featured: true,
    status: 'Active Development',
    previewTheme: {
      accent: '#8EE2B2',
      glow: 'rgba(142, 226, 178, 0.35)',
      gradient: 'from-[#071F19] via-[#0A2E25] to-[#041712]',
      tag: 'Vector Search · Knowledge Base',
      type: 'brain'
    },
    theme: {
      bg: 'bg-[#EEF7F2]',
      iconBg: 'bg-[#D2EFE0]',
      iconColor: 'text-[#136C49]',
      type: 'brain',
    },
  },
  {
    id: 'stepwise',
    title: 'StepWise',
    tagline: 'AI-driven step-by-step guidance platform.',
    category: 'AI / Workflow Automation',
    description: 'Interactive process execution platform that decomposes complex development and workflow tasks into verified milestones.',
    extendedOverview: 'StepWise simplifies complex engineering tasks and multi-phase technical processes by breaking them into interactive, verifiable step-by-step guides with automated validation checks, terminal commands, and contextual hints.',
    keyFeatures: [
      'Automated milestone decomposition for complex technical procedures',
      'Interactive progress tracking with real-time state persistence',
      'Modern, fluid interface built with Next.js and Tailwind CSS',
      'Modular template library for cloud deployment and full-stack setups'
    ],
    techStack: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    techIcons: ['nextjs', 'react', 'tailwind', 'javascript'],
    links: {
      github: 'https://github.com/basantyadav/stepwise',
      live: 'https://github.com/basantyadav/stepwise#live-demo'
    },
    featured: true,
    status: 'Interactive Prototype',
    previewTheme: {
      accent: '#5EEAD4',
      glow: 'rgba(94, 234, 212, 0.35)',
      gradient: 'from-[#061E24] via-[#0A2F38] to-[#04161A]',
      tag: 'Workflow Automation · Guided Execution',
      type: 'search'
    },
    theme: {
      bg: 'bg-[#EEF7F7]',
      iconBg: 'bg-[#D2F0EE]',
      iconColor: 'text-[#0D7E75]',
      type: 'search',
    },
  },
  {
    id: 'razorpay-clone',
    title: 'Razorpay Clone',
    tagline: 'Full-stack clone of Razorpay payment gateway.',
    category: 'Full-Stack / Fintech',
    description: 'End-to-end payment gateway workflow featuring responsive checkout modal, API signature verification, and transaction ledger.',
    extendedOverview: 'A full-stack clone of the Razorpay merchant payment gateway flow, built with React and Node.js. Demonstrates authentic order creation, client-side checkout popup invocation, webhook ingestion, and cryptographic HMAC signature validation.',
    keyFeatures: [
      'Authentic checkout modal replicating UPI, Card, and Netbanking flows',
      'Cryptographic HMAC SHA-256 server-side signature validation',
      'Node.js REST backend handling order initialization and status webhooks',
      'Real-time transaction history dashboard with filtering capabilities'
    ],
    techStack: ['React', 'Node.js', 'JavaScript', 'Tailwind'],
    techIcons: ['react', 'nodejs', 'javascript', 'tailwind'],
    links: {
      github: 'https://github.com/basantyadav/razorpay-clone',
      live: 'https://github.com/basantyadav/razorpay-clone#demo'
    },
    featured: true,
    status: 'Production Ready',
    previewTheme: {
      accent: '#FBBF24',
      glow: 'rgba(251, 191, 36, 0.35)',
      gradient: 'from-[#1E1706] via-[#332608] to-[#140F04]',
      tag: 'Fintech · HMAC Validation',
      type: 'wallet'
    },
    theme: {
      bg: 'bg-[#FFF6ED]',
      iconBg: 'bg-[#FFE6D0]',
      iconColor: 'text-[#D97706]',
      type: 'wallet',
    },
  }
];
