export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Priyanshi',
  fullName: 'Priyanshi Gupta',
  email: 'priyanshigupta0303@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanshi-gupta-93750b230/',
  github: 'https://github.com/priyanshi226',
  resumeHref: asset('resume.pdf'),
  portrait: asset('image.png'),
  location: 'Bengaluru, India',
}

export const heroCopy = {
  introLead: "It's Priyanshi!",
  introBefore: 'A software engineer and AI builder who likes ',
  introItalicOne: 'figuring things out',
  introMid: ', ',
  introItalicTwo: 'building things',
  introAfter:
    ", and getting involved wherever there's something interesting to learn. I enjoy moving between code, ideas, products and people, basically, I don't really believe in staying inside one box.",
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

// ---------------------------------------------------------------------------
// Journey — chronological, school first
// ---------------------------------------------------------------------------

export const journeyIntro = 'A collection of chapters, learnings, and everything in between.'

export const schoolChapter = {
  years: '2006 – 2021',
  heading: 'SCHOOL YEARS',
  tagline: 'small town, big dreams',
  paragraphs: [
    'I grew up in a small town, where most of my early education happened. It was a quiet, close-knit place that gave me a strong sense of curiosity and independence. I studied at S.D. Public School, where I was constantly surrounded by supportive teachers, a few crazy friends, and countless opportunities to explore, ask questions and discover what I loved.',
    "School was more than just academics, it was where I first learnt discipline, problem-solving, and how to keep showing up, even when things felt challenging. Those years shaped the person I am today, and I'm really grateful for that.",
  ],
  quote: 'A small town, but a very big part of who I am today.',
  stat: '92.8%',
  statLabel: 'final score',
  schoolName: 'S.D. Public School',
  beganAnnotation: ['where', 'it all', 'began'],
  thingsILoved: ['Maths', 'Problem solving', 'Science', 'Competitions', 'Exploring new things'],
  olympiad: {
    heading: 'little wins, bigger motivation',
    points: [
      'Won medals across Mathematics, General Knowledge, and Science Olympiads',
'Finished school with a 92.8% in Class 12, a good reminder that curiosity and consistency go a long way',
     ],
  },
  littleWinsNote: 'little wins, bigger motivation',
  collectingNote: 'she was already collecting achievements 👀',
}

export const collegeChapter = {
  years: '2021 — 2025',
  kicker: 'THE COLLEGE CHAPTER',
  school: 'THAPAR INSTITUTE OF ENGINEERING & TECHNOLOGY',
  degree: 'B.E. COMPUTER ENGINEERING',
  stat: '7.63',
  statLabel: 'CGPA',
  milestones: [
    { year: '2021', label: 'new chapter' },
    { year: '2022', label: 'figuring things out' },
    { year: '2023', label: 'learning to build' },
    { year: '2024', label: 'things started getting serious' },
    { year: '2025', label: "okay, what's next?" },
  ],
}

export const photomathChapter = {
  kicker: 'MY FIRST LITTLE SIDE QUEST',
  title: 'MATH EXPERT @ PHOTOMATH',
  body: "I started solving mathematics questions for a little extra earning. What started as a side thing turned into something I didn't expect — helping students understand problems instead of simply giving them answers.",
  stat: '100+',
  statLabel: 'students',
  note: 'apparently explaining things counts as a skill',
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const pratinidhi = {
  number: '01',
  name: 'PRATINIDHI AI',
  subtitle: 'AI AGENT AND CRM WORKFLOW PLATFORM',
  role: 'SOFTWARE ENGINEER / FULL-STACK ENGINEERING CONTRIBUTOR',
  problem: 'Local and growing businesses were fielding customer conversations across five different channels with no unified way to qualify, route or follow up on a lead.',
  built: 'A web dashboard for managing conversation pipelines and CRM stages in React.js, plus a modular backend (controllers / services / repositories) covering intake, qualification, routing and lifecycle tracking of customer interactions — with automation workflow triggers and structured logging for production observability.',
  channels: ['WhatsApp', 'Telegram', 'Instagram', 'Email', 'Voice'],
  agentSteps: ['Intent', 'State', 'Lead Stage', 'Transitions', 'Follow-up', 'Escalation'],
  ragSteps: ['RAG', 'Knowledge', 'Semantic Search'],
  outcome: 'CRM Actions',
  metric: '317K+',
  metricLabel: 'leads moved through the platform\'s workflows',
  channelCount: '5',
  channelLabel: 'communication channels unified into one pipeline',
  tech: ['Python / Flask', 'React / TypeScript', 'AI Agents', 'LLM APIs', 'RAG', 'Firebase / Firestore', 'Webhooks', 'Function Calling', 'Semantic Search', 'Tailwind CSS', 'REST APIs', 'Embeddings'],
  screenshot: asset('pratinidhi-laptop.png'),
  screenshotAlt: 'Pratinidhi AI CRM dashboard displayed on a laptop',
}

export const educado = {
  number: '02',
  name: 'EDUCADO AI',
  subtitle: 'AI TUTOR × LEARNING × BACKEND',
  role: 'PRIMARY BACKEND ENGINEER, NEAR-SOLE OWNERSHIP',
  problem: 'Students preparing for the SAT and NISM needed a way to predict their score, get tutored through weak spots, and track progress — without a human on the other end.',
  built: 'The full backend on FastAPI, Firebase Auth, Firestore, Redis and OpenAI APIs with async background workers, designed for low-latency reads and eventual-consistency writes at scale.',
  flows: [
    {
      title: 'Score Predictor',
      body: 'Exam-aware question assembly, rule-based scoring with negative marking, pass-probability computation, async persistence of predictor history with profile score sync.',
    },
    {
      title: 'AI Tutor',
      body: 'Subscription-gated sessions, dynamic prompt orchestration, optional RAG retrieval via LangChain + FAISS + OpenAI embeddings, responses on gpt-4o-mini, session summarization with persistence.',
    },
    {
      title: 'Analytics',
      body: 'Async ingestion of quiz and predictor events into hierarchical aggregates, daily activity logs, strength/weakness detection, personalized insights.',
    },
    {
      title: 'Full-Length Test',
      body: 'Blueprint-driven mock generation, randomized question/option ordering, score & topic breakdown, attempt history, entitlement-aware trial gating.',
    },
  ],
  bookFlow: ['Question', 'AI Tutor', 'RAG', 'Exam Knowledge', 'Contextual Answer'],
  metric: '60+',
  metricLabel: 'APIs built and shipped',
  categories: ['AI Tutoring', 'Assessments', 'Learner Progress', 'Analytics', 'Subscriptions'],
  tech: ['Python', 'FastAPI', 'Firebase Auth / Firestore', 'Redis', 'RAG', 'FAISS', 'LangChain', 'OpenAI', 'Embeddings', 'Razorpay', 'REST APIs', 'AWS'],
  screenshot: asset('phone_img.jpeg'),
  screenshotAlt: 'Educado AI mobile app',
}

// ---------------------------------------------------------------------------
// The rest
// ---------------------------------------------------------------------------

export const beyondResume = {
  eyebrow: "the bits that don't quite fit on a resume",
  heading: 'Beyond the Job Description',
  intro:
    "Not everything I've learned or worked on fits neatly under a job title. Some of the most useful experiences came from teaching, working closely with founders, helping teams, and simply saying yes to interesting problems.",
  cards: [
    {
      title: 'Certifications',
      body: "Anthropic Claude 101, Anthropic AI Fluency, and Scaler's ReactJS and JavaScript courses — formal grounding alongside the hands-on work.",
      note: 'always learning',
      icon: 'graduationCap',
      tone: 'yellow',
      rotate: '-rotate-1',
      span: 'lg:col-span-2',
      proofHref: 'https://www.instagram.com/educado_ai_sat?stkn=dXgzdjRicWs3cmZv',
    },
    {
      title: 'Photomath',
      body: 'As a Math Expert on Photomath, I guided 100+ students through problem-solving and concept clarification, one clear step at a time.',
      note: 'explaining > assuming',
      icon: 'calculator',
      tone: 'blush',
      rotate: 'rotate-1',
      span: 'lg:col-span-2',
      proofHref: 'https://drive.google.com/drive/folders/13RfmrnviY2Ae43XrT3h5TzhrS8AhpGwE',
    },
    {
      title: "Founders' Office",
      body: "Alongside engineering at Orchestrix, I've worked closely with the founders' office — contributing to content, sales operations, and coordinating with the sales and customer success teams.",
      note: 'beyond just code',
      icon: 'users',
      tone: 'lavender',
      rotate: '-rotate-1',
      span: 'lg:col-span-2',
    },
    {
      title: 'Pratinidhi AI Cohorts',
      body: 'Conducted AI awareness sessions for Pratinidhi AI cohorts, helping non-technical participants get comfortable with LLMs, AI assistants, and workflow automation.',
      note: 'making AI less intimidating',
      icon: 'presentation',
      tone: 'pink',
      rotate: 'rotate-1',
      span: 'lg:col-span-2',
    },
    {
      title: 'QA Internship',
      body: 'Two months at 360Logica (a SAKSOFT company) testing web and AI-based products — exploratory and API testing, defect triage in JIRA and TestRail, and evaluating chatbot responses across varied prompts.',
      note: 'breaking things to learn how to build them',
      icon: 'bug',
      tone: 'sage',
      rotate: '-rotate-1',
      span: 'lg:col-span-2',
      proofHref: 'https://drive.google.com/file/d/1yAL9KB4smEyCrswQvk_-WzgBIwz6Hb3c/view?usp=sharing',
    },
    {
      title: 'Volunteering',
      body: 'Volunteer Engineer — built a technology solution for a nonprofit, putting engineering skills toward a cause outside work and academics.',
      note: 'small steps matter',
      icon: 'heart',
      tone: 'cream',
      rotate: 'rotate-1',
      span: 'lg:col-span-2',
    },
  ],
}

export const toolbox = {
  ai: ['AI Agents', 'RAG', 'Embeddings', 'Semantic Search', 'FAISS', 'LangChain', 'Prompt Engineering', 'Function Calling', 'OpenAI APIs'],
  backend: ['Python', 'FastAPI', 'REST APIs', 'JWT Auth', 'Microservices', 'Firebase', 'Firestore', 'Redis', 'MongoDB', 'SQL'],
  frontend: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Flutter'],
  testing: ['Postman', 'JIRA', 'TestRail', 'Git', 'Docker', 'CI/CD'],
}

export const certifications = [
  { name: 'ReactJS Course', org: 'Scaler', year: '2024' },
  { name: 'JavaScript Course', org: 'Scaler', year: '2024' },
  { name: 'Google Drive Clone Bootcamp', org: 'DevTown × Google Developer Student Clubs', year: '2023' },
]

export const otherWork = {
  aiSessions: 'AI awareness sessions run for Pratinidhi AI cohorts.',
  volunteer: 'Volunteer engineer — technology solution work for a nonprofit organization.',
}

export const currently = {
  year: '2026',
  heading: 'WHERE I AM NOW',
  role: 'SOFTWARE ENGINEER',
  focus: 'AI × PRODUCT × BUILDING',
  body: 'Building AI-powered products. Learning constantly. Still saying yes to interesting problems. Still figuring out what\'s next.',
}

export const finalSection = {
  heading: "Let's talk.",
  body: "Have an idea, a project, or just want to say hello? I'd love to hear from you.",
}
