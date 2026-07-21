import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  ExternalLink,
  Facebook,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Menu,
  Moon,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const navigation = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Graphics', '#graphics'],
  ['GitHub', '#github'],
]

const socials = [
  ['Facebook', 'https://www.facebook.com/janzier.30/', Facebook],
  ['LinkedIn', 'https://www.linkedin.com/in/janvier-erickson-araque-54744b347/', Linkedin],
  ['GitHub', 'https://github.com/mRPy30', Github],
]

const heroBadges = [
  [GraduationCap, 'Graduated', '2025'],
  [Globe2, 'Deploying', 'Solutions'],
  [Code2, '1 year', 'Exp.'],
]

const expertise = [
  {
    icon: Code2,
    number: '01',
    title: 'Full-Stack Web Development',
    text: 'Responsive interfaces connected to secure, efficient backends and databases—built as one cohesive product.',
    tags: ['React', 'TypeScript', 'PHP', 'JavaScript'],
  },
  {
    icon: Figma,
    number: '02',
    title: 'UI/UX Design',
    text: 'Clear information systems, thoughtful interaction design, and interfaces that feel as good as they perform.',
    tags: ['Figma', 'Prototyping', 'Design systems', 'Photoshop'],
  },
  {
    icon: ServerCog,
    number: '03',
    title: 'Systems Architecture',
    text: 'Practical application structure, dashboard logic, deployment, domains, SSL, and production operations.',
    tags: ['MySQL', 'Supabase', 'REST APIs', 'Deployment'],
  },
]

const projects = [
  {
    title: 'SolarPower Energy Corporation',
    category: 'E-commerce · Admin dashboard',
    description: 'B2B solar marketplace with product discovery, custom quoting, checkout flows, and staff operations.',
    image: '/pictures/solarpower.png',
    live: 'https://solarpower.com.ph',
    repo: 'https://github.com/mRPy30/SolarPower-Energy-Corporation',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    featured: true,
  },
  {
    title: 'ICSM Creatives',
    category: 'Booking portal · CMS',
    description: 'Online booking system with a decision-support flow and dynamic content management tools.',
    image: '/pictures/project1.png',
    live: 'https://icsmcreatives-woad.vercel.app/',
    repo: 'https://github.com/mRPy30/icsm-creatives',
    tags: ['PHP', 'CSS', 'CMS'],
  },
  {
    title: 'TaskQueya',
    category: 'Productivity · Collaboration',
    description: 'A collaborative task-management and scheduling product for focused personal workflows.',
    image: '/pictures/project2.png',
    live: 'https://taskqueya.vercel.app/',
    repo: 'https://github.com/mRPy30/taskqueya',
    tags: ['JavaScript', 'CSS', 'Vercel'],
  },
  {
    title: 'Worldcity Real Estate PH',
    category: 'Property portal · Lead generation',
    description: 'Property directory and conversion-focused agent portal for the Philippine real-estate market.',
    image: '/pictures/worldcityPh.png',
    live: 'https://worldcityrealestate.ph',
    tags: ['CMS', 'SEO', 'Responsive UI'],
  },
  {
    title: 'Mobility Ventures',
    category: 'Corporate portal · Clean mobility',
    description: 'A corporate experience showcasing EV charging infrastructure and sustainable transport networks.',
    image: '/pictures/mobilityventures.png',
    live: 'https://mobilityventures.ph',
    repo: 'https://github.com/mRPy30/mobility-venture',
    tags: ['TypeScript', 'React', 'UI/UX'],
  },
  {
    title: 'Worldcity Architects',
    category: 'Portfolio · Content system',
    description: 'An editorial architecture portfolio built to present structural concepts and project stories.',
    image: '/pictures/worldcityarchitects.png',
    live: 'https://worldcityarchitects.com',
    repo: 'https://github.com/mRPy30/worldcity-architects',
    tags: ['TypeScript', 'CMS', 'Web design'],
  },
]

const graphics = [
  { image: '/pictures/Birthday_celebrant_client.jpg', title: 'Celebration Collateral', type: 'Event design' },
  { image: '/pictures/client3business.jpg', title: 'Business Identity', type: 'Brand material' },
  { image: '/pictures/quote1.png', title: 'Social Editorial', type: 'Content design' },
  { image: '/pictures/bts_price.png', title: 'Product Campaign', type: 'Campaign art' },
  { image: '/pictures/logoPsD - no bg.png', title: 'Identity Exploration', type: 'Logo system' },
]

function ThemeToggle({ dark, toggle }) {
  return (
    <button className="theme-toggle" onClick={toggle} type="button" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
      <motion.span key={dark ? 'sun' : 'moon'} initial={{ opacity: 0, rotate: -60, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}>
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </motion.span>
    </button>
  )
}

function SectionIntro({ index, eyebrow, title, copy }) {
  return (
    <motion.div className="section-intro" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card ${project.featured ? 'featured' : ''}`} variants={reveal}>
      <a href={project.live} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${project.title} live website`}>
        <img src={project.image} alt={`${project.title} interface preview`} loading="lazy" />
        <span className="project-number">0{index + 1}</span>
        <span className="view-project">View live <ArrowUpRight size={16} /></span>
      </a>
      <div className="project-info">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span className="project-description">{project.description}</span>
        <div className="project-footer">
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Github size={19} /></a>}
        </div>
      </div>
    </motion.article>
  )
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('verzel-theme') !== 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [githubStats, setGithubStats] = useState({ repos: 17, followers: 4 })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('verzel-theme', dark ? 'dark' : 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0809' : '#f5f3f3')
  }, [dark])

  useEffect(() => {
    fetch('https://api.github.com/users/mRPy30')
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setGithubStats({ repos: data.public_repos, followers: data.followers }))
      .catch(() => {})
  }, [])

  return (
    <main className="page-shell">
      <section className="hero" id="home">
        <div className="hero-glow" />
        <motion.header className="navbar" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <a className="brand" href="#home">Verzel<span>.</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            <ThemeToggle dark={dark} toggle={() => setDark((value) => !value)} />
          </nav>
          <a className="email-cta" href="mailto:araquejanvier@gmail.com">Send email <ArrowRight size={17} /></a>
          <div className="mobile-controls">
            <ThemeToggle dark={dark} toggle={() => setDark((value) => !value)} />
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>

        <motion.nav className="mobile-nav" initial={false} animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }} aria-hidden={!menuOpen}>
          {navigation.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}<ArrowDownRight size={16} /></a>)}
        </motion.nav>

        <div className="hero-grid">
          <div className="hero-left">
            <motion.div className="socials" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p>Follow my social media</p>
              <div>{socials.map(([label, href, Icon]) => <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon size={17} /></a>)}</div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -75 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.9, ease }}>
              This is<br />Verzel
            </motion.h1>
            <motion.div className="hero-badges" variants={stagger} initial="hidden" animate="visible">
              {heroBadges.map(([Icon, label, value]) => (
                <motion.div className="hero-badge" variants={{ hidden: { opacity: 0, scale: 0.45 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } } }} whileHover={{ y: -7 }} key={value}>
                  <Icon size={22} /><span>{label}</span><strong>{value}</strong>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="portrait" initial={{ opacity: 0, scale: 0.9, y: 32 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.95, ease }}>
            <img src="/pictures/grad-picwbg.png" alt="Janvier Erickson Araque" />
          </motion.div>

          <div className="hero-right">
            <motion.div className="hero-stats" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}>
              <div><strong>11+</strong><span>Projects<br />delivered</span></div>
              <div><strong>2024</strong><span>Est.</span></div>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, x: 75 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22, duration: 0.9, ease }}>
              Your fullstack<br />developer partner
            </motion.h2>
          </div>
        </div>

        <motion.div className="marquee" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
          <div className="marquee-track">
            {[0, 1].map((copy) => <div className="marquee-set" aria-hidden={copy === 1} key={copy}>
              <span><b>Website development</b> — Full-stack websites &amp; systems</span><i>✦</i>
              <span><b>Digital products</b> — Dashboards &amp; business flows</span><i>✦</i>
              <span><b>Brand experiences</b> — UI/UX &amp; visual direction</span><i>✦</i>
            </div>)}
          </div>
        </motion.div>
      </section>

      <section className="content-section about-section" id="about">
        <SectionIntro index="01" eyebrow="About & expertise" title="Design-minded. Systems-driven." copy="I build dependable digital experiences at the meeting point of clear design, clean engineering, and real business needs." />
        <div className="about-layout">
          <motion.div className="about-story" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <span className="about-kicker">Based in the Philippines · Working worldwide</span>
            <h3>From the first sketch to the final deployment.</h3>
            <p>I’m Janvier Erickson Araque, a full-stack developer who enjoys translating complex workflows into focused, usable products. My background spans production websites, business dashboards, e-commerce systems, and visual design.</p>
            <div className="values">
              {['Build with purpose', 'Keep systems practical', 'Make every detail earn its place'].map((value) => <span key={value}><Check size={15} />{value}</span>)}
            </div>
          </motion.div>
          <motion.div className="expertise-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {expertise.map(({ icon: Icon, number, title, text, tags }) => <motion.article className="expertise-card" variants={reveal} key={title}>
              <div className="expertise-top"><Icon size={24} /><span>{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      <section className="content-section work-section" id="work">
        <SectionIntro index="02" eyebrow="Web portals & dashboards" title="Selected digital systems." copy="Production work across commerce, booking, real estate, clean mobility, and business operations." />
        <motion.div className="project-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </motion.div>
        <motion.a className="all-work-link" href="https://github.com/mRPy30?tab=repositories" target="_blank" rel="noreferrer" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Explore all repositories <ArrowUpRight size={20} />
        </motion.a>
      </section>

      <section className="content-section graphics-section" id="graphics">
        <SectionIntro index="03" eyebrow="Creative graphics" title="Visual stories beyond code." copy="Selected brand materials, campaign graphics, and concept work shaped with the same attention to clarity and detail." />
        <motion.div className="graphics-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
          {graphics.map((item, index) => <motion.figure className={`graphic-card graphic-${index + 1}`} variants={reveal} key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <figcaption><span>{item.type}</span><strong>{item.title}</strong></figcaption>
          </motion.figure>)}
        </motion.div>
      </section>

      <section className="content-section github-section" id="github">
        <SectionIntro index="04" eyebrow="GitHub activity" title="Consistent work, in public." copy="A living view of experiments, production builds, and the steady practice behind the finished interfaces." />
        <motion.div className="github-panel" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="github-header">
            <div className="github-identity"><span><Github size={25} /></span><div><strong>mRPy30</strong><small>Janvier Erickson Araque</small></div></div>
            <a href="https://github.com/mRPy30" target="_blank" rel="noreferrer">View profile <ExternalLink size={15} /></a>
          </div>
          <div className="github-summary">
            <div><strong>734+</strong><span>Contributions<br />last year</span></div>
            <div><strong>{githubStats.repos}</strong><span>Public<br />repositories</span></div>
            <div><strong>{githubStats.followers}</strong><span>GitHub<br />followers</span></div>
            <div><strong>2022</strong><span>Building<br />in public</span></div>
          </div>
          <div className="contribution-chart">
            <p>Contribution activity</p>
            <div><img src="https://ghchart.rshah.org/e11d48/mRPy30" alt="mRPy30 GitHub contribution calendar" loading="lazy" /></div>
          </div>
          <div className="featured-repos">
            {[
              ['SolarPower-Energy-Corporation', 'PHP · Full-stack commerce system'],
              ['portfolio', 'CSS · Personal portfolio experience'],
              ['mobility-venture', 'TypeScript · Clean mobility portal'],
            ].map(([name, meta]) => <a href={`https://github.com/mRPy30/${name}`} target="_blank" rel="noreferrer" key={name}>
              <Database size={17} /><span><strong>{name}</strong><small>{meta}</small></span><ArrowUpRight size={17} />
            </a>)}
          </div>
        </motion.div>
      </section>

      <section className="contact-section">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }} viewport={{ once: true, amount: 0.4 }}>
          <Sparkles size={28} />
          <p>Have a project in mind?</p>
          <h2>Let’s build something<br />worth remembering.</h2>
          <a href="mailto:araquejanvier@gmail.com">Start a conversation <ArrowRight size={19} /></a>
        </motion.div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">Verzel<span>.</span></a>
        <p>© {new Date().getFullYear()} Janvier Erickson Araque</p>
        <a href="#home">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  )
}

export default App
