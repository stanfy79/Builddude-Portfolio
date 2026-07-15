import { useEffect, useMemo, useState } from 'react'
import { Menu } from 'lucide-react'
import heroImg from './assets/hero.png'
import './App.css'

type Command = {
  label: string
  detail: string
  target: string
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const companies = ['BlockBot', 'Norelix', 'OneTrip', 'Open Source', 'GitHub']

const stats = [
  { value: '4+', label: 'Years building' },
  { value: '5+', label: 'Projects shipped' },
  { value: '10+', label: 'Core technologies' },
  { value: '500+', label: 'Users impacted' },
]

const stacks = [
  {
    title: 'Frontend',
    tone: 'indigo',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'CSS', 'Figma'],
  },
  {
    title: 'Backend',
    tone: 'emerald',
    tools: ['NodeJS', 'TypeScript', 'Express', 'Firebase', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Blockchain',
    tone: 'amber',
    tools: ['Ethereum', 'Solidity', 'Ethers.js', 'Web3.js', 'Privy'],
  },
  {
    title: 'AI Systems',
    tone: 'cyan',
    tools: ['OpenAI', 'LangChain', 'RAG', 'Automation'],
  },
]

const projects = [
  {
    title: 'BlockBot',
    label: 'WhatsApp Built-in Crypto Wallet',
    description:
      'A conversational wallet flow for onboarding users into crypto payments, balances, and blockchain actions without forcing them through complex dashboards.',
    tech: ['React', 'TypeScript', 'NodeJS', 'Firebase', 'Privy'],
    metric: 'Wallet flows',
    accent: 'project-indigo',
    liveDemo: 'https://useblockbot.com',
    github: '#',
  },
  {
    title: 'Norelix',
    label: 'AI Product Studio',
    description:
      'Norelix is a crypto payment platform that enables businesses to accept and manage digital payments through a secure, modern web application. It provides an intuitive dashboard for tracking transactions, managing customers, and monitoring payment activity in real time.',
    tech: ['React', 'TypeScript', 'MongoDB', 'Privy', 'NodeJS'],
    metric: 'Crypto Payments',
    accent: 'project-cyan',
    liveDemo: 'https://norelix.vercel.app',
    github: '#',
  },
  {
    title: 'OneTrip',
    label: 'Travel Experience Engine',
    description:
      'A polished travel product concept focused on smooth planning, reliable data, and delightful booking moments across mobile-first customer journeys.',
    tech: ['React', 'Maps', 'MongoDB', 'NodeJS'],
    metric: 'Trip planning',
    accent: 'project-rose',
    liveDemo: 'https://onetrip-one.vercel.app',
    github: 'https://github.com/stanfy79/OneTrip',
  },
  {
    title: 'TeamFlow',
    label: 'Teams and Collaboration Platform',
    description:
      'A collaboration platform that helps teams manage projects, communicate effectively, and streamline workflows with a focus on user experience and productivity.',
    tech: ['React', 'MongoDB', 'NodeJS'],
    metric: 'Collaboration tools',
    accent: 'project-indigo',
    liveDemo: 'https://teamflow-iota.vercel.app',
    github: '#',
  },
  {
    title: 'Creeptar',
    label: 'Solana Analytics Dashboard',
    description:
      'A Solana analytics dashboard that provides real-time insights into blockchain transactions, wallet activity, and market trends, helping users make informed decisions in the crypto space.',
    tech: ['React', 'CSS', 'NodeJS', 'APIs'],
    metric: 'Analytics tools',
    accent: 'project-cyan',
    liveDemo: 'https://creeptar.vercel.app',
    github: '#',
  },
]

const timeline = [
  {
    year: '2026',
    role: 'Founder',
    company: 'Norelix',
    detail: 'Norelix is a crypto payment platform that enables businesses to accept and manage digital payments through a secure, modern web application.',
  },
  {
    year: '2024',
    role: 'Co-Founder',
    company: 'BGC LABS',
    detail: 'Building AI-assisted crypto wallet experiences and reliable product infrastructure.',
  },
  {
    year: '2024',
    role: 'Freelance Engineer (Contractor)',
    company: 'Independent',
    detail: 'Shipped full-stack apps, integrations, dashboards, and backend services for clients.',
  },
  {
    year: '2023',
    role: 'Open Source Builder/Contributor',
    company: 'Community',
    detail: 'Experimented in public, learned fast, and built a habit of reusable engineering craft.',
  },
]

const process = [
  ['Research', 'Clarify users, constraints, risks, and product edge cases before a line of code lands.'],
  ['Design', 'Map flows, interaction states, and the technical plan so the build has momentum.'],
  ['Develop', 'Ship clean interfaces, dependable APIs, and thoughtful details that make products feel sharp.'],
  ['Deploy', 'Package, monitor, and iterate with a product owner mindset after launch.'],
]

const testimonials = [
  {
    quote:
      'BuildDude brings product thinking into engineering decisions. The work feels intentional, fast, and polished.',
    name: 'Startup Founder',
  },
  {
    quote:
      'He is comfortable with ambiguous ideas and turns them into usable systems clients can understand.',
    name: 'Product Lead',
  },
  {
    quote:
      'The rare mix of frontend taste, backend discipline, and enough AI curiosity to make ambitious ideas real.',
    name: 'Technical Partner',
  },
]

const commands: Command[] = [
  { label: 'View projects', detail: 'Jump to featured work', target: '#projects' },
  { label: 'Read about BuildDude', detail: 'Open the product story', target: '#about' },
  { label: 'See experience', detail: 'Open the timeline', target: '#experience' },
  { label: 'Start a conversation', detail: 'Jump to contact', target: '#contact' },
]

function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [progress, setProgress] = useState(0)

  const marqueeItems = useMemo(() => [...companies, ...companies], [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsCommandOpen((open) => !open)
      }

      if (event.key === 'Escape') {
        setIsCommandOpen(false)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(pageHeight > 0 ? window.scrollY / pageHeight : 0)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    setIsCommandOpen(false)
  }

  return (
    <main>
      <div
        className="cursor"
        style={{ transform: `translate3d(${mouse.x - 10}px, ${mouse.y - 10}px, 0)` }}
      />

      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="BuildDude home">
          BD
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <button className="command-trigger" type="button" onClick={() => setIsCommandOpen(true)}>
          <Menu size={20} />
        </button>
        <span className="progress" style={{ transform: `scaleX(${progress})` }} />
      </nav>

      <section className="hero-section section-band" id="top">
        <div className="mesh" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I am</p>
            <h1>Standfirm (BuildDude)</h1>
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-text">
              Building blockchain-powered & Innovative applications with the polish of a premium product team.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="btn secondary" href="/assets/Standfirm_(Builddude)_Developer_Resume_2026-07-06.pdf" download>
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Animated developer workspace preview">
            <img src={heroImg} alt="" className="hero-mark" />
            <div className="code-window">
              <div className="window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{`npm run dev

> BuildDude@2026 build
✓ connected to AI pipeline
✓ wallet engine ready
✓ deploying product onchain
✓ success`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Trusted by and product work">
        <div className="marquee">
          {marqueeItems.map((company, index) => (
            <span key={`${company}-${index}`}>{company}</span>
          ))}
        </div>
      </section>

      <section className="about-section section-band" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>I build products where AI, Web3, automation, and backend systems meet clean user experience.</h2>
        </div>
        <div className="about-layout">
          <div className="portrait-panel">
            <div className="portrait-glass">
              <span>BD</span>
              <p>Product-minded engineering for ambitious launches.</p>
            </div>
          </div>
          <div className="story">
            <p>
              I enjoy solving complex engineering problems while creating experiences users love. My strongest work sits
              between polished frontend execution, dependable backend design, and emerging technology that makes a
              product feel meaningfully more useful.
            </p>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stack-section section-band" id="stack">
        <div className="section-heading compact">
          <p className="eyebrow">Tech Stack</p>
          <h2>Tools chosen for speed, scale, and product feel.</h2>
        </div>
        <div className="stack-grid">
          {stacks.map((stack) => (
            <article className={`stack-card ${stack.tone}`} key={stack.title}>
              <div className="stack-icon" aria-hidden="true">
                {stack.title.slice(0, 2)}
              </div>
              <h3>{stack.title}</h3>
              <div className="chip-list">
                {stack.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-band" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Product stories designed to make the work easy to understand and hard to forget.</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-preview">
                <div className="preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-screen">
                  <strong>{project.metric}</strong>
                  <div className="preview-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="project-copy">
                <p className="project-index">0{index + 1}</p>
                <h3>{project.title}</h3>
                <p className="project-label">{project.label}</p>
                <p>{project.description}</p>
                <div className="chip-list">
                  {project.tech.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={`${project.liveDemo}`} target="_blank" rel="noreferrer">
                    Live Here <span className="dot"></span>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-band" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>A timeline of building, founding, freelancing, and learning in public.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.role}`}>
              <time>{item.year}</time>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section-band" id="process">
        <div className="section-heading compact">
          <p className="eyebrow">Process</p>
          <h2>From sharp discovery to a product that survives real users.</h2>
        </div>
        <div className="process-track">
          {process.map(([title, detail], index) => (
            <article className="process-step" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section section-band" id="testimonials">
        <div className="section-heading compact">
          <p className="eyebrow">Testimonials</p>
          <h2>What it feels like to work with BuildDude.</h2>
        </div>
        <div className="testimonial-row">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section section-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something amazing.</h2>
          <p>
            Bring the idea, the rough spec, or the half-built prototype. I will help turn it into a product people can
            use, trust, and remember.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:standfirmbiokoro@gmail.com">
            Email
          </a>
          <a className="btn secondary" href="https://github.com/stanfy79" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn secondary" href="https://www.linkedin.com/in/standfirm-biokoro-9ba992294" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn secondary" href="https://x.com/0buildcook" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </section>

      <footer>
        <span>Built with TypeScript</span>
        <span>Designed by BuildDude</span>
        <span>2026</span>
      </footer>

      {isCommandOpen && (
        <div className="command-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
          <button className="overlay-backdrop" type="button" onClick={() => setIsCommandOpen(false)} aria-label="Close" />
          <div className="command-panel">
            <div className="command-header">
              <span>Quick Navigation</span>
              <kbd>Esc</kbd>
            </div>
            {commands.map((command) => (
              <button className="command-item" type="button" key={command.label} onClick={() => goTo(command.target)}>
                <strong>{command.label}</strong>
                <span>{command.detail}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default App
