/**
 * Chandini Sri Mounika Vissamsetti - Portfolio Main JavaScript
 * Pure Vanilla JavaScript - Interactive UI, Filters, Modals, Forms & Theme Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderSkills('all');
  renderFeaturedProjects('all');
  renderProjectLibrary('');
  renderExperience();
  renderCertifications('all');
  renderAchievements();
  initModals();
  initContactForm();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('csm_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('csm_theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

/* --------------------------------------------------------------------------
   2. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const backToTop = document.getElementById('back-to-top');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
      backToTop?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      backToTop?.classList.remove('visible');
    }
  });

  // Mobile menu toggle
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* --------------------------------------------------------------------------
   3. ScrollSpy (Active Section Highlighting)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-drawer .mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Skills Section Rendering & Filter
   -------------------------------------------------------------------------- */
function renderSkills(filterMode) {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skillsCategories) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.skillsCategories.forEach(cat => {
    let filteredSkills = cat.skills;
    if (filterMode === 'project') {
      filteredSkills = cat.skills.filter(s => s.level === 'Project Implemented');
    } else if (filterMode === 'certified') {
      filteredSkills = cat.skills.filter(s => s.level === 'Core Studied & Certified');
    }

    if (filteredSkills.length === 0) return;

    const card = document.createElement('div');
    card.className = 'skill-category-card';
    card.innerHTML = `
      <div class="skill-cat-header">
        <div class="skill-cat-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 class="skill-cat-title">${escapeHTML(cat.title)}</h3>
      </div>
      <p class="skill-cat-tagline">${escapeHTML(cat.tagline)}</p>
      <div class="skill-items-list">
        ${filteredSkills.map(skill => `
          <div class="skill-item-pill" title="${escapeHTML(skill.description || '')}">
            <span class="skill-name">${escapeHTML(skill.name)}</span>
            <span class="skill-level-badge ${skill.level === 'Project Implemented' ? 'project' : 'studied'}">
              ${skill.level === 'Project Implemented' ? 'Project Proven' : 'Certified'}
            </span>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  // Setup tab buttons
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   5. Projects Section Rendering & Filtering
   -------------------------------------------------------------------------- */
function renderFeaturedProjects(categoryFilter) {
  const container = document.getElementById('featured-projects-grid');
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = '';

  const featuredList = PORTFOLIO_DATA.projects.filter(p => p.isFeatured);
  const filtered = categoryFilter === 'all' 
    ? featuredList 
    : featuredList.filter(p => p.categories.includes(categoryFilter));

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 30px;">No featured projects in this category. Check the expandable library below!</p>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-card-top">
        <span class="project-category-badge">${escapeHTML(p.category)}</span>
        <span class="project-featured-flag">★ Featured</span>
      </div>
      <h3 class="project-title">${escapeHTML(p.title)}</h3>
      <p class="project-tagline">${escapeHTML(p.tagline)}</p>
      
      <div class="project-problem-box">
        <strong>Problem Solved:</strong> ${escapeHTML(p.problem)}
      </div>

      <ul class="project-impl-points">
        ${p.implementation.slice(0, 3).map(pt => `<li>${escapeHTML(pt)}</li>`).join('')}
      </ul>

      <div class="project-tech-tags">
        ${p.techStack.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
      </div>

      <div class="project-actions">
        ${p.liveDemoUrl ? `
          <a href="${escapeHTML(p.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        ` : ''}
        <a href="${escapeHTML(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          Source Code
        </a>
        <button class="btn btn-ghost btn-sm" onclick="openProjectModal('${escapeHTML(p.id)}')">
          Details & Architecture →
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFeaturedProjects(btn.dataset.filter);
    };
  });
}

function renderProjectLibrary(query) {
  const container = document.getElementById('library-grid');
  const searchInput = document.getElementById('library-search-input');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const libraryProjects = PORTFOLIO_DATA.projects.filter(p => !p.isFeatured);
  const q = (query || '').toLowerCase().trim();

  const filtered = q === '' 
    ? libraryProjects 
    : libraryProjects.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
      );

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 24px;">No matching projects found in the repository archive for "${escapeHTML(query)}".</p>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <span class="badge badge-teal">${escapeHTML(p.category)}</span>
      </div>
      <h4 class="library-card-title">${escapeHTML(p.title)}</h4>
      <p class="library-card-desc">${escapeHTML(p.tagline)}</p>
      <div class="library-card-tech">
        ${p.techStack.slice(0, 4).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
      </div>
      <div class="library-card-actions">
        <a href="${escapeHTML(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source on GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          Repo
        </a>
        ${p.liveDemoUrl ? `
          <a href="${escapeHTML(p.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="View Live Demo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Demo
          </a>
        ` : ''}
        <button class="btn btn-ghost btn-sm" onclick="openProjectModal('${escapeHTML(p.id)}')">
          Details
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (searchInput) {
    searchInput.oninput = (e) => {
      renderProjectLibrary(e.target.value);
    };
  }
}

/* --------------------------------------------------------------------------
   6. Experience & Internships Rendering
   -------------------------------------------------------------------------- */
function renderExperience() {
  const expContainer = document.getElementById('experience-timeline');
  const internContainer = document.getElementById('intern-projects-grid');
  if (!expContainer || !PORTFOLIO_DATA.experiences) return;

  expContainer.innerHTML = '';

  PORTFOLIO_DATA.experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <div>
            <h3 class="timeline-role">${escapeHTML(exp.role)}</h3>
            <div class="timeline-org">${escapeHTML(exp.organization)}</div>
            ${exp.collaborators ? `<div class="timeline-collab">${escapeHTML(exp.collaborators)}</div>` : ''}
          </div>
          <span class="badge badge-terracotta">${escapeHTML(exp.period)}</span>
        </div>

        <div class="timeline-focus-box">
          <strong>Key Focus:</strong> ${escapeHTML(exp.focus)}
        </div>

        <ul class="timeline-bullets">
          ${exp.responsibilities.map(r => `<li>${escapeHTML(r)}</li>`).join('')}
        </ul>

        <div class="timeline-footer">
          <div class="project-tech-tags" style="margin: 0;">
            ${exp.technologies.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
          </div>
          ${exp.certificateUrl ? `
            <a href="${escapeHTML(exp.certificateUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              View Certificate
            </a>
          ` : ''}
        </div>
      </div>
    `;
    expContainer.appendChild(item);
  });

  // Render internship projects
  if (internContainer && PORTFOLIO_DATA.internshipProjects) {
    internContainer.innerHTML = '';
    PORTFOLIO_DATA.internshipProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'intern-project-card';
      card.innerHTML = `
        <h4 class="intern-project-title">${escapeHTML(proj.title)}</h4>
        <div class="intern-project-org">${escapeHTML(proj.organization)}</div>
        <p class="intern-project-desc">${escapeHTML(proj.description)}</p>
        <div class="project-tech-tags" style="margin-bottom: 12px;">
          ${proj.technologies.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
        </div>
        ${proj.githubUrl ? `
          <a href="${escapeHTML(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="margin-top: auto; align-self: flex-start;">
            GitHub Repo →
          </a>
        ` : ''}
      `;
      internContainer.appendChild(card);
    });
  }
}

/* --------------------------------------------------------------------------
   7. Certifications Rendering
   -------------------------------------------------------------------------- */
function renderCertifications(catFilter) {
  const container = document.getElementById('certifications-grid');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = '';

  const filtered = catFilter === 'all'
    ? PORTFOLIO_DATA.certifications
    : PORTFOLIO_DATA.certifications.filter(c => c.category === catFilter);

  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <div class="cert-badge-frame">
        <img src="${escapeHTML(cert.badgeImage)}" alt="${escapeHTML(cert.title)} badge" loading="lazy">
      </div>
      <div class="cert-issuer">${escapeHTML(cert.issuer)}</div>
      <h4 class="cert-title">${escapeHTML(cert.title)}</h4>
      <div class="cert-date">Issued: ${escapeHTML(cert.issueDate)}</div>
      
      ${cert.credentialId ? `
        <div class="cert-id-badge" title="Credential ID">ID: ${escapeHTML(cert.credentialId)}</div>
      ` : ''}

      <div class="cert-skills-tags">
        ${cert.skillsCovered.slice(0, 3).map(s => `<span class="tech-tag">${escapeHTML(s)}</span>`).join('')}
      </div>

      <div class="cert-actions">
        ${cert.verificationUrl ? `
          <a href="${escapeHTML(cert.verificationUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width: 100%;">
            Verify Credential ↗
          </a>
        ` : cert.certificatePdf ? `
          <a href="${escapeHTML(cert.certificatePdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width: 100%;">
            View Certificate PDF ↗
          </a>
        ` : `
          <span class="badge badge-teal" style="width: 100%; justify-content: center;">Verified Credential</span>
        `}
      </div>
    `;
    container.appendChild(card);
  });

  // Filter handlers
  const certBtns = document.querySelectorAll('.cert-filter-btn');
  certBtns.forEach(btn => {
    btn.onclick = () => {
      certBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertifications(btn.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   8. Achievements Section Rendering
   -------------------------------------------------------------------------- */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container || !PORTFOLIO_DATA.achievements) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.achievements.forEach(ach => {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.innerHTML = `
      ${ach.image ? `
        <div class="achievement-image-box" onclick="openCertificateModal('${escapeHTML(ach.image)}', '${escapeHTML(ach.title)}')">
          <img src="${escapeHTML(ach.image)}" alt="${escapeHTML(ach.title)}" loading="lazy">
          <div class="achievement-zoom-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Click to View Certificate
          </div>
        </div>
      ` : ''}

      <div class="achievement-body">
        <span class="achievement-type-badge">${escapeHTML(ach.type)}</span>
        <h3 class="achievement-title">${escapeHTML(ach.title)}</h3>
        <div class="achievement-award">${escapeHTML(ach.award)}</div>
        <div class="achievement-org">${escapeHTML(ach.organization)} • ${escapeHTML(ach.date)}</div>
        <p class="achievement-desc">${escapeHTML(ach.description)}</p>

        <ul class="achievement-highlights-list">
          ${ach.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}
        </ul>

        <div style="margin-top: auto; display: flex; gap: 10px; flex-wrap: wrap; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
          ${ach.pdfUrl ? `
            <a href="${escapeHTML(ach.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              View Verified PDF ↗
            </a>
          ` : ''}
          ${ach.link ? `
            <a href="${escapeHTML(ach.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              View GitHub Profile ↗
            </a>
          ` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   9. Modals (Project Details & Certificate Viewer)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById('project-modal');
  const certModalOverlay = document.getElementById('certificate-modal');

  // Close when clicking overlay outside card
  [modalOverlay, certModalOverlay].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModals();
        }
      });
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModals();
    }
  });
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="badge badge-teal" style="margin-bottom: 10px;">${escapeHTML(project.category)}</span>
      <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-primary); line-height: 1.25; margin-bottom: 8px;">
        ${escapeHTML(project.title)}
      </h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.5;">${escapeHTML(project.tagline)}</p>
    </div>

    <div style="background: var(--bg-subtle); border-left: 3px solid var(--terracotta); padding: 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 24px;">
      <h4 style="font-size: 0.875rem; text-transform: uppercase; font-weight: 700; color: var(--terracotta); margin-bottom: 6px;">Problem & Engineering Challenge</h4>
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">${escapeHTML(project.problem)}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Architecture & Implementation Details:</h4>
      <ul style="display: flex; flex-direction: column; gap: 10px;">
        ${project.implementation.map(pt => `
          <li style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; display: flex; gap: 10px;">
            <span style="color: var(--terracotta); font-weight: bold;">▹</span>
            <span>${escapeHTML(pt)}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.875rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 10px;">Verified Technology Stack:</h4>
      <div class="project-tech-tags">
        ${project.techStack.map(t => `<span class="tech-tag" style="font-size: 0.8125rem; padding: 6px 12px;">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
      ${project.liveDemoUrl ? `
        <a href="${escapeHTML(project.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Open Live Application ↗
        </a>
      ` : ''}
      <a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        Inspect GitHub Repository ↗
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCertificateModal(imgSrc, title) {
  const modal = document.getElementById('certificate-modal');
  const body = document.getElementById('certificate-modal-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 16px;">
      ${escapeHTML(title)}
    </h3>
    <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); background: var(--bg-subtle);">
      <img src="${escapeHTML(imgSrc)}" alt="${escapeHTML(title)}" style="width: 100%; height: auto; display: block;">
    </div>
    <div style="margin-top: 18px; text-align: right;">
      <a href="${escapeHTML(imgSrc)}" target="_blank" download class="btn btn-secondary btn-sm">
        Download Full Image ↗
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('open');
  });
  document.body.style.overflow = '';
}

// Attach globally for inline HTML callbacks
window.openProjectModal = openProjectModal;
window.openCertificateModal = openCertificateModal;
window.closeModals = closeModals;

/* --------------------------------------------------------------------------
   10. Contact Form & Clipboard Copy
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const whatsappBtn = document.getElementById('form-whatsapp-btn');

  // Copy email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personalInfo.email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('chandinisrimounika79@gmail.com');
      });
    });
  }

  // Copy phone to clipboard
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personalInfo.phone).then(() => {
        showToast('Phone number copied to clipboard!');
      }).catch(() => {
        showToast('+91 7993975969');
      });
    });
  }

  // Form submit -> mailto generator with pre-filled content
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const subject = document.getElementById('form-subject')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in your name, email, and message.');
        return;
      }

      const emailSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name}`);
      const emailBody = encodeURIComponent(`Hello Chandini,\n\n${message}\n\nBest regards,\n${name}\nContact Email: ${email}`);
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

      showToast('Preparing email draft in your default email application...');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }

  // Quick WhatsApp button from form contents
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('form-name')?.value.trim() || 'Colleague';
      const message = document.getElementById('form-message')?.value.trim() || 'Hi Chandini, I saw your portfolio and would like to connect!';
      const waText = encodeURIComponent(`Hi Chandini, my name is ${name}.\n\n${message}`);
      window.open(`https://wa.me/917993975969?text=${waText}`, '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   11. Toast System
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${escapeHTML(message)}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   12. Safe HTML Escaper
   -------------------------------------------------------------------------- */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
