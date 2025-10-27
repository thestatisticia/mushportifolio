import './style.css'

const portfolioData = {
  name: "Nuwamanya Mushabe",
  handle: "@statistician",
  bio: "Experienced Content Creator, Ambassador & Developer | Hackathon Winner | Building the Future of Web3",
  profileImage: "/polo.jpg",
  social: {
    twitter: "https://x.com/moneyhunter443",
    github: "https://github.com/thestatisticia",
    medium: "https://medium.com/@statistician12"
  },
  skills: {
    programming: ["React", "Solidity", "JavaScript", "Web3", "Smart Contracts"],
    content: ["Long-form Articles", "Twitter Threads", "Educational Content", "Memes", "Videos"],
    community: ["Community Building", "Event Hosting", "X Spaces Hosting", "Discord Management", "Telegram Management", "IRL Events"]
  },
  projects: [
    {
      name: "Wesave",
      description: "A blockchain-based savings dapp deployed on CELO network with NFT rewards for completing goals",
      tech: ["React", "Solidity", "Celo", "Web3", "NFTs"],
      link: "https://github.com/thestatisticia/Wesave",
      featured: true
    },
    {
      name: "FarmTrust",
      description: "Your Farm Assistant - Helping farmers with agricultural solutions",
      tech: ["JavaScript", "React"],
      link: "https://github.com/thestatisticia/FarmTrust",
      featured: true
    },
    {
      name: "FarmTrust USSD",
      description: "Farmers with feature phones accessing the Farm Trust assistant",
      tech: ["JavaScript", "USSD"],
      link: "https://github.com/thestatisticia/FarmTrustUSSD",
      featured: false
    },
    {
      name: "Finance",
      description: "Financial management application",
      tech: ["JavaScript"],
      link: "https://github.com/thestatisticia/finance",
      featured: true
    },
    {
      name: "Base Community Fund",
      description: "Community funding platform",
      tech: ["JavaScript"],
      link: "https://github.com/thestatisticia/Base-community-fund",
      featured: true
    }
  ],
  achievements: [
    "Multiple Hackathon Winner",
    "Active Ambassador in Web3 Ecosystem",
    "Experienced Community Builder",
    "Published Writer on Medium"
  ],
  content: [
    {
      title: "Exploring Fundly - A Deep Dive into Web3 Crowdfunding DApp",
      type: "Article",
      platform: "Medium",
      link: "https://medium.com/@statistician12/exploring-fundly-a-deep-dive-into-the-web3-crowdfunding-dapp-199800f49a17"
    }
  ]
}

const app = document.querySelector('#app')

app.innerHTML = `
  <header id="header" class="header">
    <nav class="nav">
      <div class="nav-brand">
        <span class="nav-brand-text">NM</span>
      </div>
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <svg class="theme-icon-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg class="theme-icon-light" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
    </nav>
  </header>

  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-avatar">
            <div class="avatar-circle">
              <div class="avatar-glow"></div>
              <img src="${portfolioData.profileImage}" alt="Nuwamanya Mushabe" class="avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="avatar-fallback">NM</div>
            </div>
          </div>
          <h1 class="hero-title">
            <span class="hero-name">${portfolioData.name}</span>
            <span class="hero-handle">${portfolioData.handle}</span>
          </h1>
          <p class="hero-subtitle">${portfolioData.bio}</p>
          <div class="hero-social">
            <a href="${portfolioData.social.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="${portfolioData.social.github}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="${portfolioData.social.medium}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12l-5.41-5.62L5.5 3l7.04 7.54L13.54 12zm-4.8 1.02L4.66 14l2.23-6.11 5.98 5.98zm6.26 0l1.64-2.34L19.5 16c-.5-.38-1.23-.24-1.5.26-.27.5-.04 1.14.5 1.5.54.37 1.23.24 1.5-.26.27-.5.04-1.14-.5-1.5-.54-.37-.45-1.6-.5-1.5l-2.9-3.23 0 0zM2 18h20v2H2v-2z"/>
              </svg>
            </a>
          </div>
          <div class="hero-badge">
            <span class="badge">Hackathon Winner</span>
            <span class="badge">Content Creator</span>
            <span class="badge">Web3 Builder</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-grid">
          <div class="about-card">
            <h3>Developer</h3>
            <p>Building innovative Web3 solutions with React and Solidity, bringing ideas to life through code and smart contracts.</p>
          </div>
          <div class="about-card">
            <h3>Content Creator</h3>
            <p>Creating educational content through articles, threads, videos, and memes to help others understand Web3 and blockchain technology.</p>
          </div>
          <div class="about-card">
            <h3>Community Builder</h3>
            <p>Hosting events, managing communities, and fostering connections in the Web3 ecosystem through IRL and virtual gatherings.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Programming</h3>
            <div class="skill-tags">
              ${portfolioData.skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Content Creation</h3>
            <div class="skill-tags">
              ${portfolioData.skills.content.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Community</h3>
            <div class="skill-tags">
              ${portfolioData.skills.community.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          ${portfolioData.projects.filter(p => p.featured).map(project => `
            <div class="project-card">
              <div class="project-card-header">
                <h3 class="project-card-title">${project.name}</h3>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 4c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H14.5V5c0-.28-.22-.5-.5-.5z"/>
                  </svg>
                </a>
              </div>
              <p class="project-card-description">${project.description}</p>
              <div class="project-card-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="more-projects">
          <h3 class="subsection-title">Other Projects</h3>
          <div class="projects-grid-small">
            ${portfolioData.projects.filter(p => !p.featured).map(project => `
              <div class="project-card-small">
                <h4 class="project-card-small-title">${project.name}</h4>
                <p class="project-card-small-description">${project.description}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card-small-link">View Project →</a>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="achievements">
      <div class="container">
        <h2 class="section-title">Achievements</h2>
        <div class="achievements-list">
          ${portfolioData.achievements.map((achievement, index) => `
            <div class="achievement-item" style="animation-delay: ${index * 0.1}s">
              <p class="achievement-text">${achievement}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Let's Connect</h2>
        <p class="contact-subtitle">Interested in collaboration or have a project in mind? Let's make it happen!</p>
        <div class="contact-links">
          <a href="${portfolioData.social.twitter}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Follow on X</span>
          </a>
          <a href="${portfolioData.social.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="${portfolioData.social.medium}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12l-5.41-5.62L5.5 3l7.04 7.54L13.54 12zm-4.8 1.02L4.66 14l2.23-6.11 5.98 5.98zm6.26 0l1.64-2.34L19.5 16c-.5-.38-1.23-.24-1.5.26-.27.5-.04 1.14.5 1.5.54.37 1.23.24 1.5-.26.27-.5.04-1.14-.5-1.5-.54-.37-.45-1.6-.5-1.5l-2.9-3.23 0 0zM2 18h20v2H2v-2z"/>
            </svg>
            <span>Read Articles</span>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Nuwamanya Mushabe. Built with passion for Web3 innovation.</p>
    </footer>
  </main>
`

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle')
const darkIcon = themeToggle.querySelector('.theme-icon-dark')
const lightIcon = themeToggle.querySelector('.theme-icon-light')

// Set initial state
if (darkIcon) darkIcon.style.display = 'block'
if (lightIcon) lightIcon.style.display = 'none'

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme')
  
  if (darkIcon && lightIcon) {
    if (isDark) {
      darkIcon.style.display = 'none'
      lightIcon.style.display = 'block'
    } else {
      darkIcon.style.display = 'block'
      lightIcon.style.display = 'none'
    }
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.about-card, .project-card, .achievement-item, .skill-category').forEach(el => {
  observer.observe(el)
})
