import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness, Check,
  CheckCircle2, ChevronDown, CloudCog, Code2, Database, ExternalLink, Facebook,
  Globe2, Layers3, Linkedin, Mail, MapPin, Menu,
  Network, Phone, Send, ShieldCheck, Sparkles, Twitter, UsersRound,
  Workflow, X, Zap, LineChart, Boxes, Crosshair,
} from 'lucide-react';
import rexoraLogo from '@assets/rexora-logo.png';

type IconType = typeof Code2;

const services: { number: string; title: string; copy: string; icon: IconType }[] = [
  { number: '01', title: 'Software Development', copy: 'Custom web, enterprise, application, and software development shaped around your operating reality.', icon: Code2 },
  { number: '02', title: 'Cloud & DevOps', copy: 'Cloud architecture, migration, automation, CI/CD, infrastructure, and platform engineering.', icon: CloudCog },
  { number: '03', title: 'Data & AI', copy: 'Data engineering, analytics, AI, machine learning, automation, and intelligent business solutions.', icon: BrainCircuit },
  { number: '04', title: 'IT Consulting', copy: 'Technology strategy, architecture, modernization, and transformation guidance for complex decisions.', icon: Crosshair },
  { number: '05', title: 'Product & Project Delivery', copy: 'Product management, project management, PMO, and delivery expertise that keeps work moving.', icon: Workflow },
  { number: '06', title: 'Technology Staffing', copy: 'Highly skilled technology professionals and specialized teams to extend internal capabilities.', icon: UsersRound },
];

const solutions = [
  ['Digital Transformation', 'Modernize systems, processes, and customer experiences.', Zap],
  ['Cloud Transformation', 'Build scalable and secure cloud environments.', CloudCog],
  ['AI & Automation', 'Use AI to improve productivity and decision-making.', BrainCircuit],
  ['Data & Analytics', 'Turn business data into actionable intelligence.', LineChart],
  ['Application Modernization', 'Move legacy applications toward what comes next.', Boxes],
  ['Enterprise Technology', 'Build scalable solutions for complex requirements.', Network],
] as const;

const industries = [
  ['Healthcare', 'Technology that supports better connected care.', ShieldCheck],
  ['Financial Services', 'Modern platforms for high-trust environments.', BarChart3],
  ['Retail & E-commerce', 'Digital experiences built for changing demand.', Globe2],
  ['Manufacturing', 'Connected systems for stronger operations.', Layers3],
  ['Logistics & Supply Chain', 'Visibility and intelligence across the journey.', Network],
  ['Professional Services', 'Technology that helps expertise travel further.', BriefcaseBusiness],
  ['Education', 'Tools that make learning more accessible and useful.', Sparkles],
  ['Technology', 'Specialist support for ambitious technical teams.', Code2],
] as const;

const capabilities = ['Software Engineering', 'Web Development', 'Mobile Development', 'Cloud Engineering', 'DevOps', 'Cybersecurity', 'AI / Machine Learning', 'Data Engineering', 'Business Intelligence', 'QA & Testing', 'Product Management', 'Project Management', 'Business Analysis', 'Technology Consulting'];
const faqs = [
  ['What services does Rexora Technologies provide?', 'Rexora brings together software, cloud, data and AI, consulting, delivery, and specialized technology staffing. We shape the right combination around your goals.'],
  ['Can Rexora work with our existing technology team?', 'Yes. Our engagement models are designed to complement internal teams, add specialist capability, or own a defined delivery stream.'],
  ['Do you provide dedicated technology professionals?', 'Yes. Dedicated teams and staff augmentation are available for organizations that need focused skills, capacity, or delivery leadership.'],
  ['Can projects be delivered remotely?', 'Delivery location and working model can be aligned to your requirements. We can discuss the collaboration rhythm that suits your team.'],
  ['What engagement models are available?', 'Project-based delivery, dedicated teams, staff augmentation, managed services, technology consulting, and long-term support.'],
  ['How do we start a project with Rexora?', 'Start with a conversation. Share the business challenge, current context, and desired outcome; we will help clarify the next practical step.'],
  ['How do I contact Rexora Technologies?', 'Use the inquiry form below. Email, phone, and office details are intentionally editable placeholders until confirmed by the Rexora team.'],
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: .08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>{children}</div>;
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`max-w-3xl ${light ? 'text-white' : ''}`}>
    <div className={`eyebrow mb-5 ${light ? 'text-blue-300' : 'text-blue-600'}`}>{eyebrow}</div>
    <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-.045em] md:text-5xl">{title}</h2>
    {copy && <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? 'text-blue-100/75' : 'text-slate-500'}`}>{copy}</p>}
  </div>;
}

function Logo({ className = '' }: { className?: string }) {
  return <img src={rexoraLogo} alt="Rexora Technologies" className={`logo-img ${className}`} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    document.title = 'Rexora Technologies | Technology That Moves Business Forward';
    const description = 'Rexora Technologies helps businesses build, scale, and transform through software, cloud, data, AI, consulting, delivery, and specialized technology staffing.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <div className="min-h-[100dvh] overflow-x-hidden bg-[#f7faff] text-[#07142f]">
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(7,20,47,.06)] backdrop-blur-md' : 'bg-[#07142f]/85 backdrop-blur-md'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8 xl:px-12">
        <a href="#home" onClick={closeMenu} className="focus-ring shrink-0 rounded bg-white p-1" aria-label="Rexora Technologies home" data-testid="link-logo">
          <Logo className="h-12 w-[132px] sm:h-14 sm:w-[150px]" />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {['about', 'services', 'solutions', 'industries', 'careers', 'insights'].map((item) => <a key={item} href={`#${item}`} className={`focus-ring rounded px-1 py-2 text-[11px] font-bold uppercase tracking-[.12em] transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-700' : 'text-blue-50/85 hover:text-white'}`} data-testid={`link-nav-${item}`}>{item}</a>)}
        </nav>
        <a href="#contact" className="focus-ring hidden items-center gap-2 rounded-full bg-[#1688ff] px-5 py-3 text-xs font-extrabold text-white shadow-[0_8px_22px_rgba(22,136,255,.24)] transition-transform hover:-translate-y-0.5 md:flex" data-testid="link-header-cta">Let's Talk <ArrowUpRight size={15} /></a>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={`focus-ring rounded p-2 lg:hidden ${scrolled || menuOpen ? 'text-[#07142f]' : 'text-white'}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} data-testid="button-mobile-menu">{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
      {menuOpen && <nav className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="grid gap-1">
          {['about', 'services', 'solutions', 'industries', 'careers', 'insights', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu} className="focus-ring rounded px-3 py-3 text-sm font-bold capitalize text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-testid={`link-mobile-${item}`}>{item}</a>)}
        </div>
      </nav>}
    </header>

    <main>
      <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-[#07142f] pt-32 text-white md:min-h-[780px] md:pt-40">
        <div className="nav-grid absolute inset-0 -z-10 opacity-50" />
        <div className="absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-[#1268d6]/20 blur-3xl" />
        <div className="absolute left-[-15%] top-1/2 -z-10 h-[360px] w-[360px] rounded-full bg-[#1688ff]/10 blur-3xl" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 pb-24 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 xl:px-12">
          <div className="max-w-2xl">
            <div className="hero-enter eyebrow mb-7 flex items-center gap-3 text-blue-300"><span className="h-px w-8 bg-[#1688ff]" /> Global technology & professional services</div>
            <h1 className="hero-enter-delay text-[3.25rem] font-extrabold leading-[.98] tracking-[-.065em] sm:text-6xl md:text-7xl xl:text-[5.8rem]">Technology that <span className="text-[#4ba4ff]">moves</span> your business forward.</h1>
            <p className="hero-enter-delay-2 mt-7 max-w-xl text-base leading-8 text-blue-100/75 md:text-lg">Rexora Technologies delivers the software, cloud, data, AI, and specialist expertise that help businesses build, scale, and transform.</p>
            <div className="hero-enter-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-[#1688ff] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(22,136,255,.26)] transition-transform hover:-translate-y-1" data-testid="link-hero-start">Start a Conversation <ArrowRight size={17} /></a>
              <a href="#services" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/5" data-testid="link-hero-services">Explore Our Services <ArrowDownIcon /></a>
            </div>
            <div className="hero-enter-delay-2 mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-[.18em] text-blue-200/60"><span>Technology</span><i className="h-1 w-1 rounded-full bg-[#1688ff]" /><span>Innovation</span><i className="h-1 w-1 rounded-full bg-[#1688ff]" /><span>Expertise</span><i className="h-1 w-1 rounded-full bg-[#1688ff]" /><span>Results</span></div>
          </div>
          <div className="relative mx-auto h-[390px] w-full max-w-[590px] lg:h-[510px]" aria-label="Abstract technology network illustration" role="img">
            <div className="absolute inset-[9%] rounded-[2rem] border border-blue-300/15 bg-[#0b1f44]/50 shadow-[0_24px_90px_rgba(0,0,0,.2)]" />
            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 600 510" fill="none" aria-hidden="true">
              <path d="M80 384 C168 290 176 175 290 122 C383 79 463 95 526 36" stroke="#1688ff" strokeWidth="2" strokeDasharray="8 10" className="dash-flow" opacity=".7" />
              <path d="M85 418 C180 318 212 221 301 180 C384 142 444 157 537 102" stroke="#4ba4ff" strokeWidth="1" strokeDasharray="3 12" className="dash-flow" opacity=".5" />
              <path d="M110 128 L188 195 L304 180 L384 265 L514 220" stroke="#8bc7ff" strokeWidth="1" opacity=".25" />
              <path d="M188 195 L164 337 M304 180 L291 414 M384 265 L465 383" stroke="#8bc7ff" strokeWidth="1" opacity=".2" />
              <circle cx="188" cy="195" r="5" fill="#1688ff" className="pulse-point" /><circle cx="304" cy="180" r="5" fill="#4ba4ff" className="pulse-point" /><circle cx="384" cy="265" r="5" fill="#1688ff" className="pulse-point" /><circle cx="514" cy="220" r="5" fill="#8bc7ff" className="pulse-point" />
              <path d="M294 78 L475 78 L415 150 L234 150 Z" fill="url(#rgrad)" opacity=".12" /><path d="M294 78 L475 78 L415 150 L234 150 Z" stroke="#1688ff" opacity=".45" />
              <defs><linearGradient id="rgrad" x1="234" y1="78" x2="475" y2="150" gradientUnits="userSpaceOnUse"><stop stopColor="#1688ff" /><stop offset="1" stopColor="#07142f" /></linearGradient></defs>
            </svg>
            <div className="float-soft absolute left-[4%] top-[25%] rounded-xl border border-white/10 bg-[#0b1f44]/90 px-4 py-3 shadow-xl"><div className="flex items-center gap-2 text-xs font-bold"><BrainCircuit size={15} className="text-[#4ba4ff]" /> AI & Data</div><div className="mt-1 font-mono text-[9px] text-blue-100/50">intelligence / 02</div></div>
            <div className="float-soft absolute bottom-[15%] right-[3%] rounded-xl border border-white/10 bg-[#0b1f44]/90 px-4 py-3 shadow-xl [animation-delay:1.5s]"><div className="flex items-center gap-2 text-xs font-bold"><CloudCog size={15} className="text-[#4ba4ff]" /> Cloud systems</div><div className="mt-1 font-mono text-[9px] text-blue-100/50">scale / ready</div></div>
            <div className="absolute right-[24%] top-[31%] flex h-28 w-28 items-center justify-center rounded-full border border-[#1688ff]/35 bg-[#07142f]/90 shadow-[0_0_60px_rgba(22,136,255,.14)]"><div className="absolute inset-3 rounded-full border border-dashed border-blue-300/25" /><span className="font-mono text-4xl font-medium tracking-[-.15em] text-[#4ba4ff]">R<span className="text-white">/</span></span></div>
            <div className="absolute bottom-[3%] left-[25%] rounded-lg border border-white/10 bg-[#102a55]/80 px-3 py-2 font-mono text-[10px] text-blue-100/70">BUILD / SCALE / TRANSFORM</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7faff] to-transparent" />
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="Rexora capabilities">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-5 px-5 py-8 md:grid-cols-5 md:px-8 md:py-7 xl:px-12">
          {['Technology solutions', 'Digital transformation', 'Specialized expertise', 'Scalable delivery', 'Business growth'].map((item, i) => <div key={item} className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.08em] text-slate-500"><span className="font-mono text-[10px] text-blue-600">0{i + 1}</span>{item}</div>)}
        </div>
      </section>

      <section id="about" className="site-grid relative overflow-hidden px-5 py-24 md:px-8 md:py-36 xl:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[.92fr_1.08fr]">
          <Reveal><SectionIntro eyebrow="About Rexora" title="Technology expertise. Business impact." copy="Rexora Technologies is a technology and professional services company focused on helping organizations solve complex business challenges through technology, expertise, and reliable execution." />
            <a href="#contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-extrabold text-blue-700 shadow-sm transition hover:border-blue-500" data-testid="link-about-contact">Talk to our team <ArrowUpRight size={16} /></a>
          </Reveal>
          <Reveal delay={1}><div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#07142f] p-7 text-white shadow-[0_24px_70px_rgba(7,20,47,.14)] md:min-h-[410px] md:p-10">
            <div className="absolute right-[-12%] top-[-18%] h-72 w-72 rounded-full border border-[#1688ff]/30" /><div className="absolute right-[-4%] top-[-9%] h-60 w-60 rounded-full border border-[#1688ff]/20" /><div className="absolute bottom-[-20%] left-[-5%] h-64 w-64 rounded-full bg-[#1268d6]/20 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col justify-between"><div><span className="eyebrow text-blue-300">The Rexora lens</span><p className="mt-5 max-w-md text-2xl font-bold leading-snug tracking-[-.035em]">The right technology decision is the one that makes the next business decision easier.</p></div><div className="mt-12 grid max-w-md grid-cols-3 gap-3"><div className="border-l border-[#1688ff] pl-3"><div className="font-mono text-xs text-blue-300">01</div><div className="mt-2 text-xs font-bold">Modern</div></div><div className="border-l border-[#1688ff] pl-3"><div className="font-mono text-xs text-blue-300">02</div><div className="mt-2 text-xs font-bold">Human</div></div><div className="border-l border-[#1688ff] pl-3"><div className="font-mono text-xs text-blue-300">03</div><div className="mt-2 text-xs font-bold">Dependable</div></div></div></div>
          </div></Reveal>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1440px] gap-4 md:grid-cols-3">{[['01', 'Innovation', 'Practical technology solutions designed for today’s rapidly changing business environment.'], ['02', 'Expertise', 'Specialized professionals with the skills needed to solve technical and business challenges.'], ['03', 'Execution', 'Focused delivery, clear communication, and measurable outcomes.']].map(([number, title, copy], i) => <Reveal key={title} delay={i + 1}><div className="border-t-2 border-blue-600 pt-5"><span className="font-mono text-xs text-blue-600">{number}</span><h3 className="mt-5 text-xl font-extrabold tracking-[-.03em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">{copy}</p></div></Reveal>)}</div>
      </section>

      <section id="services" className="bg-white px-5 py-24 md:px-8 md:py-36 xl:px-12">
        <div className="mx-auto max-w-[1440px]"><Reveal><SectionIntro eyebrow="What we do" title="Solutions built around your business." copy="Bring us a defined challenge, a growth ambition, or a team that needs more reach. We connect strategy to the people and platforms that make progress real." /></Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, copy, icon: Icon }, i) => <Reveal key={title} delay={(i % 3) + 1}><article className="service-card group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-[#f9fbfe] p-6 md:p-7" data-testid={`card-service-${number}`}><div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-blue-50 transition-all duration-500 group-hover:h-36 group-hover:w-36" /><div className="relative flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07142f] text-[#4ba4ff]"><Icon size={20} /></div><span className="font-mono text-xs text-blue-600">{number}</span></div><div className="relative"><h3 className="text-lg font-extrabold tracking-[-.025em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">{copy}</p><a href="#contact" className="focus-ring mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.1em] text-blue-700" data-testid={`link-service-${number}`}>Learn more <ArrowUpRight size={14} className="arrow-shift" /></a></div></article></Reveal>)}</div>
        </div>
      </section>

      <section id="solutions" className="bg-[#edf5ff] px-5 py-24 md:px-8 md:py-36 xl:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><Reveal><SectionIntro eyebrow="Where we create value" title="Technology solutions designed for real business outcomes." copy="A strong solution is more than a technology choice. It is a clear line between today’s constraint and tomorrow’s capability." /><div className="mt-10 flex flex-wrap gap-2">{solutions.map(([title], i) => <button type="button" key={title} onClick={() => setActiveSolution(i)} className={`focus-ring rounded-full border px-4 py-2 text-xs font-bold transition ${activeSolution === i ? 'border-[#1268d6] bg-[#1268d6] text-white' : 'border-blue-200 bg-white text-slate-600 hover:border-blue-400'}`} data-testid={`button-solution-${i}`}>{title}</button>)}</div></Reveal>
          <Reveal delay={1}><div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#07142f] p-7 text-white md:p-10"><div className="nav-grid absolute inset-0 opacity-30" /><div className="relative z-10 flex h-full flex-col justify-between"><div className="flex items-center justify-between"><span className="eyebrow text-blue-300">Solution focus / {String(activeSolution + 1).padStart(2, '0')}</span><div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#4ba4ff]">{(() => { const ActiveIcon = solutions[activeSolution][2]; return <ActiveIcon size={18} />; })()}</div></div><div><h3 className="max-w-lg text-3xl font-extrabold leading-tight tracking-[-.045em] md:text-4xl">{solutions[activeSolution][0]}</h3><p className="mt-4 max-w-md leading-7 text-blue-100/70">{solutions[activeSolution][1]}</p><a href="#contact" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#4ba4ff]" data-testid="link-solution-contact">Discuss this with us <ArrowRight size={16} /></a></div></div></div></Reveal>
        </div>
      </section>

      <section id="industries" className="bg-white px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto max-w-[1440px]"><Reveal><SectionIntro eyebrow="Built for context" title="Technology across industries." copy="Every industry has a different definition of progress. We bring a technology-first view without losing sight of the people and processes around it." /></Reveal><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{industries.map(([title, copy, Icon], i) => <Reveal key={title} delay={(i % 4) + 1}><article className="industry-card group flex min-h-[180px] flex-col justify-between rounded-2xl border border-slate-200 p-5" data-testid={`card-industry-${i}`}><div className="flex items-center justify-between"><Icon size={20} className="text-blue-600" /><ArrowUpRight size={17} className="arrow-shift text-slate-300 group-hover:text-blue-600" /></div><div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p></div></article></Reveal>)}</div></div></section>

      <section id="process" className="site-grid bg-[#f3f7fc] px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto max-w-[1440px]"><Reveal><SectionIntro eyebrow="How we work" title="From vision to execution." copy="A clear, collaborative path from the first question to a solution that keeps getting better." /></Reveal><div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-5"><div className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-blue-200 md:block" />{[['01', 'Discover', 'Understand goals, challenges, technology environment, and requirements.'], ['02', 'Strategize', 'Create the right technology, staffing, delivery, and implementation strategy.'], ['03', 'Build & Deliver', 'Deploy skilled professionals and solutions to execute the agreed roadmap.'], ['04', 'Optimize', 'Measure results, improve performance, and continuously evolve the solution.']].map(([number, title, copy], i) => <Reveal key={title} delay={i + 1}><div className="relative"><div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f3f7fc] bg-[#1688ff] font-mono text-xs font-bold text-white shadow-[0_0_0_1px_#9ccaff]">{number}</div><h3 className="mt-7 text-lg font-extrabold">{title}</h3><p className="mt-3 max-w-[240px] text-sm leading-6 text-slate-500">{copy}</p></div></Reveal>)}</div></div></section>

      <section id="why" className="dark-panel relative overflow-hidden px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#1688ff]/20 shadow-[0_0_0_60px_rgba(22,136,255,.035),0_0_0_120px_rgba(22,136,255,.025)]" /><div className="mx-auto max-w-[1440px]"><Reveal><SectionIntro light eyebrow="Why Rexora" title="Capability you can build a business on." copy="We pair specialist depth with practical collaboration, so your technology roadmap is not only ambitious — it is usable." /></Reveal><div className="relative mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{[['01', 'Specialized Expertise', 'Focused capability for complex technology challenges.'], ['02', 'Flexible Engagement Models', 'The right shape for the work in front of you.'], ['03', 'Technology-First Approach', 'Modern choices grounded in business context.'], ['04', 'Reliable Delivery', 'Clear communication from first brief to handover.'], ['05', 'Business-Focused Solutions', 'Outcomes first, with technology in service of them.'], ['06', 'Long-Term Partnership', 'A capable partner for the next stage, too.']].map(([n, title, copy], i) => <Reveal key={title} delay={(i % 3) + 1}><div className="border-t border-white/15 pt-5"><div className="flex gap-4"><span className="font-mono text-xs text-[#4ba4ff]">{n}</span><div><h3 className="text-base font-extrabold">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-blue-100/65">{copy}</p></div></div></div></Reveal>)}</div></div></section>

      <section id="engagement" className="bg-white px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><SectionIntro eyebrow="Ways to work together" title="The right engagement for the moment." copy="Whether you need a focused team, a strategic perspective, or ongoing delivery support, start with the shape of work that fits." /><a href="#contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#1268d6] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0b55b5]" data-testid="link-engagement-cta">Discuss your requirements <ArrowRight size={16} /></a></Reveal><Reveal delay={1}><div className="grid gap-3 sm:grid-cols-2">{['Project-Based Delivery', 'Dedicated Teams', 'Staff Augmentation', 'Managed Services', 'Technology Consulting', 'Long-Term Support'].map((item, i) => <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f9fbfe] px-5 py-5 transition hover:border-blue-400 hover:bg-blue-50"><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-blue-600">0{i + 1}</span><span className="text-sm font-extrabold">{item}</span></div><ArrowUpRight size={16} className="text-slate-400" /></div>)}</div></Reveal></div></section>

      <section id="capabilities" className="bg-[#edf5ff] px-5 py-24 md:px-8 md:py-32 xl:px-12"><div className="mx-auto max-w-[1440px]"><Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionIntro eyebrow="Featured capabilities" title="Depth where it counts." copy="A flexible bench of skills to help your team make the next release, migration, or transformation real." /><div className="hidden rounded-full border border-blue-200 bg-white px-4 py-2 font-mono text-[10px] text-blue-700 md:block">14 disciplines / one partner</div></div></Reveal><div className="mt-12 flex flex-wrap gap-2">{capabilities.map((item, i) => <Reveal key={item} delay={(i % 3) + 1}><div className="capability-chip flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-3 text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-700"><Check size={14} className="text-blue-600" />{item}</div></Reveal>)}</div></div></section>

      <section id="careers" className="bg-white px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><Reveal><div className="rounded-[1.75rem] bg-[#07142f] p-7 text-white md:p-12"><span className="eyebrow text-blue-300">Careers at Rexora</span><h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] md:text-5xl">Build your future with Rexora.</h2><p className="mt-6 max-w-lg leading-8 text-blue-100/70">We believe great technology starts with great people. Join a team where skills, ideas, and ambition can create meaningful impact.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="focus-ring rounded-full bg-[#1688ff] px-5 py-3 text-sm font-extrabold text-white" data-testid="link-careers-explore">Explore careers</a><a href="#contact" className="focus-ring rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold text-white" data-testid="link-careers-resume">Submit your resume</a></div></div></Reveal><Reveal delay={1}><div><div className="eyebrow text-blue-600">Areas of interest</div><div className="mt-5 grid gap-2">{['Software Engineering', 'Cloud & DevOps', 'Data & AI', 'Project Management', 'Business Analysis', 'Sales & Operations'].map((item, i) => <div key={item} className="flex items-center justify-between border-b border-slate-200 py-4 text-sm font-bold"><span>{item}</span><ArrowUpRight size={16} className="text-blue-600" /></div>)}</div><p className="mt-6 text-xs leading-6 text-slate-400">Open positions and role details will be published here as they become available.</p></div></Reveal></div></section>

      <section id="insights" className="bg-[#f3f7fc] px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto max-w-[1440px]"><Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionIntro eyebrow="Perspective" title="Technology in action." copy="Editable case study and partner stories will live here as Rexora engagements take shape." /><a href="#contact" className="focus-ring inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-blue-700" data-testid="link-case-studies">View case studies <ArrowRight size={16} /></a></div></Reveal><div className="mt-14 grid gap-4 lg:grid-cols-3">{[['Case Study 01', 'Digital Transformation', 'A transformation story can be added here.', 'Challenge / Solution / Outcome — editable content'], ['Case Study 02', 'Cloud Modernization', 'A cloud modernization story can be added here.', 'Challenge / Solution / Outcome — editable content'], ['Case Study 03', 'Data & AI', 'A data and AI story can be added here.', 'Challenge / Solution / Outcome — editable content']].map(([label, title, summary, detail], i) => <Reveal key={label} delay={i + 1}><article className="case-card group overflow-hidden rounded-2xl border border-slate-200 bg-white" data-testid={`card-case-${i}`}><div className="relative h-36 overflow-hidden bg-[#07142f]"><div className="nav-grid absolute inset-0 opacity-50" /><div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-blue-300"><span className="h-1.5 w-1.5 rounded-full bg-[#1688ff]" />{label}</div><span className="absolute right-5 top-5 font-mono text-3xl text-white/15">0{i + 1}</span></div><div className="p-6"><div className="eyebrow text-blue-600">{title}</div><h3 className="mt-4 text-lg font-extrabold">{summary}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{detail}</p><a href="#contact" className="focus-ring mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.1em] text-blue-700" data-testid={`link-case-${i}`}>View case study <ArrowUpRight size={14} className="arrow-shift" /></a></div></article></Reveal>)}</div></div></section>

      <section className="dark-panel relative overflow-hidden px-5 py-24 md:px-8 md:py-32 xl:px-12"><div className="nav-grid absolute inset-0 opacity-30" /><div className="relative mx-auto max-w-[1050px] text-center"><Reveal><div className="eyebrow text-blue-300">Your next move</div><h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-.055em] md:text-6xl">Ready to build what comes next?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/70">Whether you are modernizing technology, building a new product, expanding your team, or exploring new opportunities, Rexora Technologies can help you move forward.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#1688ff] px-6 py-4 text-sm font-extrabold text-white" data-testid="link-bottom-start">Start a Conversation <ArrowRight size={17} /></a><a href="#services" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-extrabold text-white" data-testid="link-bottom-services">Explore Services <ArrowRight size={17} /></a></div></Reveal></div></section>

      <section id="contact" className="bg-white px-5 py-24 md:px-8 md:py-36 xl:px-12"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.72fr_1.28fr]"><Reveal><SectionIntro eyebrow="Start a conversation" title="Let's build something better." copy="Tell us what you are working toward. The more context you share, the more useful the first conversation can be." /><div className="mt-10 space-y-5 text-sm"><div className="flex items-start gap-3"><Mail size={17} className="mt-0.5 text-blue-600" /><div><div className="font-bold">Email</div><div className="mt-1 text-slate-500">[Editable email address]</div></div></div><div className="flex items-start gap-3"><Phone size={17} className="mt-0.5 text-blue-600" /><div><div className="font-bold">Phone</div><div className="mt-1 text-slate-500">[Editable phone number]</div></div></div><div className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 text-blue-600" /><div><div className="font-bold">Office</div><div className="mt-1 text-slate-500">[Editable office address]</div></div></div></div></Reveal><Reveal delay={1}><div className="rounded-[1.5rem] bg-[#f3f7fc] p-6 md:p-9">{submitted ? <div className="flex min-h-[480px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700"><CheckCircle2 size={31} /></div><h3 className="mt-7 text-2xl font-extrabold">Thank you for reaching out.</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">Your inquiry is ready for the Rexora team. This demo does not send to a real inbox, but the experience is ready to connect.</p><button type="button" onClick={() => setSubmitted(false)} className="focus-ring mt-7 text-sm font-extrabold text-blue-700" data-testid="button-contact-reset">Send another inquiry</button></div> : <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Contact inquiry form"><Field label="First name" name="first-name" placeholder="First name" required /><Field label="Last name" name="last-name" placeholder="Last name" required /><Field label="Work email" name="email" placeholder="you@company.com" type="email" required /><Field label="Company" name="company" placeholder="Company name" /><Field label="Phone number" name="phone" placeholder="Optional" /><label className="grid gap-2 text-xs font-bold text-slate-700"><span>Service / area of interest</span><select className="form-input" defaultValue="" data-testid="select-interest"><option value="" disabled>Select an area</option><option>Software Development</option><option>Cloud & DevOps</option><option>AI & Data</option><option>IT Consulting</option><option>Staff Augmentation</option><option>Managed Services</option><option>Other</option></select></label><label className="grid gap-2 text-xs font-bold text-slate-700 sm:col-span-2"><span>Message</span><textarea className="form-input min-h-[125px] resize-y" placeholder="What are you looking to build, solve, or change?" required data-testid="textarea-message" /></label><div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><p className="text-[11px] leading-5 text-slate-400">We’ll get back to you shortly.<br />Your information is used only to respond to this inquiry.</p><button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#1268d6] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0b55b5]" data-testid="button-send-inquiry">Send Inquiry <Send size={15} /></button></div></form>}</div></Reveal></div></section>

      <section id="faq" className="bg-[#f3f7fc] px-5 py-24 md:px-8 md:py-32 xl:px-12"><div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.65fr_1.35fr]"><Reveal><SectionIntro eyebrow="Questions, answered" title="A clearer way forward." copy="If your question is not here, send it our way and we will help you find the right next step." /></Reveal><Reveal delay={1}><div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer], i) => <div key={question}><button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-extrabold" aria-expanded={openFaq === i} data-testid={`button-faq-${i}`}><span>{question}</span><ChevronDown size={18} className={`shrink-0 text-blue-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <div className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-slate-500">{answer}</div>}</div>)}</div></Reveal></div></section>
    </main>

    <footer className="bg-[#07142f] px-5 pb-8 pt-16 text-white md:px-8 md:pt-20 xl:px-12"><div className="mx-auto max-w-[1440px]"><div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr_1fr]"><div><a href="#home" className="focus-ring inline-block rounded bg-white p-1" data-testid="link-footer-logo"><Logo className="h-14 w-[158px]" /></a><p className="mt-6 max-w-xs text-sm leading-7 text-blue-100/60">Technology and professional services for businesses ready to build, scale, and transform.</p><div className="mt-7 flex gap-3"><a href="#contact" className="focus-ring rounded-full border border-white/15 p-2.5 text-blue-200 transition hover:border-blue-400 hover:text-white" aria-label="LinkedIn" data-testid="link-social-linkedin"><Linkedin size={16} /></a><a href="#contact" className="focus-ring rounded-full border border-white/15 p-2.5 text-blue-200 transition hover:border-blue-400 hover:text-white" aria-label="X" data-testid="link-social-x"><Twitter size={16} /></a><a href="#contact" className="focus-ring rounded-full border border-white/15 p-2.5 text-blue-200 transition hover:border-blue-400 hover:text-white" aria-label="Facebook" data-testid="link-social-facebook"><Facebook size={16} /></a></div></div><FooterColumn title="Company" links={['About', 'Careers', 'Insights', 'Contact']} /><FooterColumn title="Services" links={['Software Development', 'Cloud & DevOps', 'Data & AI', 'Consulting', 'Staff Augmentation']} /><FooterColumn title="Resources" links={['Case Studies', 'Blog', 'FAQ', 'Privacy Policy']} /></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-blue-100/45 sm:flex-row"><span>© 2026 Rexora Technologies. All rights reserved.</span><span>Technology • Innovation • Expertise • Results</span></div></div></footer>
  </div>;
}

function ArrowDownIcon() { return <span className="inline-flex rotate-90"><ArrowRight size={16} /></span>; }
function Field({ label, name, placeholder, type = 'text', required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-xs font-bold text-slate-700"><span>{label}</span><input className="form-input" name={name} placeholder={placeholder} type={type} required={required} data-testid={`input-${name}`} /></label>;
}
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div><h3 className="eyebrow text-blue-300">{title}</h3><div className="mt-5 grid gap-3">{links.map((link) => <a key={link} href={link === 'FAQ' ? '#faq' : link === 'Contact' ? '#contact' : link === 'About' ? '#about' : link === 'Careers' ? '#careers' : link === 'Services' ? '#services' : '#insights'} className="focus-ring w-fit rounded text-sm text-blue-100/65 transition hover:text-white" data-testid={`link-footer-${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>)}</div></div>;
}

export default App;