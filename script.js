const projectsData = {
  0: {
    title: "Website Redesign Proposal",
    role: "Product Designer",
    timeline: "8 Weeks",
    tools: "Figma, Sketch, Miro, VSCode",
    outcome: "Improved Usability",
    category: "uxui",
    featured: true,
    shortSummary: "A complete UX/UI project with wireframes and responsive screens.",
    tags: ["UX", "UI", "Responsive"],
    heroImage: "media/webDesignScreens/mockup images.png",
    overview: "Designed an end-to-end UX/UI solution including wireframes, screens, and final mockups for a responsive e‑commerce experience.",
    research: "User interviews and heuristic evaluation informed information architecture improvements.",
    explorationImages: [
      "media/webDesignSampleWireframes/Homepage.png",
      "media/webDesignSampleWireframes/Content Page.png",
      "media/webDesignSampleWireframes/Product Gallery.png"
    ],
    finalPrototype: "media/web demo.mp4",
    results: "Delivered a cohesive visual system and improved task completion in prototype testing."
  },
  
  5: {
      title: "3D Transformer Infographic",
      role: "3D Designer & Illustrator",
      timeline: "2 Weeks",
      tools: "Blender, Illustrator",
      outcome: "Explainer visuals for product marketing",
      category: "3d",
      featured: false,
      shortSummary: "A 3D infographic series explaining the Transformer product and its components, rendered for use in marketing materials.",
      tags: ["3D", "Infographic", "Product"],
      heroImage: "media/3D/3DTransformerInfographic/transformer.png",
      overview: "Created a set of 3D illustrations that explain the Transformer product architecture and features. Assets were rendered as high resolution PNGs for marketing collateral.",
      research: "Worked from product specs and interviews with the engineering team to surface key parts and user-facing features to highlight.",
      explorationImages: [
        "media/3D/3DTransformerInfographic/transformerSide.png"
      ],
      hideProcess: true,
      finalImages: [
        "media/3D/3DTransformerInfographic/transformerProductExplanation.png"
      ],
      finalPrototype: "media/3D/3DTransformerInfographic/transformerProductExplanation.png",
      results: "Delivered a concise visual explanation that reduced product onboarding time and was reused across the website and pitch materials."
    },
    8: {
      id: 8,
      title: "Warby Parker Kiosk Proposal",
      subtitle: "Interactive kiosk concept and physical mockup for in-store discovery",
      category: "uxui",
      tags: ["kiosk","interactive","retail","ux","prototype"],
      role: "Interaction Designer",
      timeline: "3 months",
      featured: false,
      // Use the project thumbnail located directly in the Interactive III folder as the header/cover image
      heroImage: "media/Interactive III/thumbnail.png",
      heroImageAlt: "Warby Parker header cover",
      overview: `A concept project proposing an interactive in store kiosk experience for Warby Parker to help customers discover products and learn about fit and materials. The proposal includes a clickable prototype, a physical mockup direction, and a compact styleguide for production handoff.`,
      research: `Research focused on in store behavior, accessibility for kiosk screens, and quick task flows for rapid decision making. Competitive analysis covered existing retail kiosks and Wayfinding UX for eyewear retailers. Insights emphasized minimal text, prominent imagery, and clear call to actions to reduce hesitation at the point of purchase.`,
      processText: `Exploration included low fidelity flows and iterative mockups. Wireframes and user flows informed the touch targets and hierarchy. A physical mockup was created to validate proportions and the kiosk's footprint in retail environments.`,
      finalImages: [
        "media/Interactive III/PhysicalMockupProposal/Mockup.png"
      ],
      finalPrototype: "media/Interactive III/ConceptProposal.pdf",
      // Attach supporting assets so they are available as downloadable/viewable assets
      attachments: [
        { label: "Wireframes (PDF)", src: "media/Interactive III/Wireframes.pdf" },
        { label: "Style Guide (PDF)", src: "media/Interactive III/Styleguide.pdf" },
        { label: "User Flow (video)", src: "media/Interactive III/userFlow.mov" }
      ],
      deliverables: [
        "Concept Proposal (PDF)",
        "Physical mockup imagery",
        "Style guide (PDF)",
        "Clickable prototype & user flow video"
      ],
      results: `Delivered a concise concept package including a production-ready mockup and style guide. Recommendations included prioritizing touch target sizes, simplifying onboarding for kiosk interactions, and providing a quick 'Try On' flow to encourage conversions.`,
      notes: `Assets: ConceptProposal.pdf, Styleguide.pdf, Wireframes.pdf, userFlow.mov located in the project's media folder.`
    },
  3: {
    title: "Nomad Direct Launch Email",
    role: "Email Designer & Developer",
    timeline: "Emergency turnaround",
    tools: "Figma, HTML, Email",
    outcome: "Successful launch under intense time constraints",
    category: "marketing",
    featured: true,
    shortSummary: "Primary launch email for the Nomad Direct campaign. An emergency last-minute build that shipped successfully.",
    tags: ["Email", "Marketing", "Campaign"],
    heroImage: "media/email_marketing/nomadLaunch2.png",
    overview: "Designed and coded the primary launch email for the Nomad Direct campaign. This project was completed as an emergency, last minute effort to meet a tight deadline.",
    research: "Rapid audience and brand alignment checks plus quick QA across major email clients.",
    // Short process text used in the Exploration & Process section.
    processText: "This was an emergency, last minute project with an extremely tight deadline. The team needed a working launch email within hours. I aligned quickly with brand, drafted a responsive layout, coded the email using table based markup and inline CSS, and ran rapid QA across major clients.",
    // Final images that represent the shipped email (used as gallery/thumbnail in the final section)
    finalImages: [
      "media/email_marketing/nomadLaunch1.png",
      "media/email_marketing/nomadLaunch2.png",
      "media/email_marketing/nomadLaunch3.png"
    ],
    finalPrototype: "media/email_marketing/nomadLaunch2.png",
    results: "Shipped on time and supported the campaign launch; key takeaway: learned the practical limitations of CSS across different email clients and adapted designs to rely on robust, widely supported patterns (inline styles, table layouts, and cautious use of media queries)."
  }
  ,
  4: {
    title: "Discobolus Study (Myron)",
    role: "3D Sculptor",
    timeline: "Self study",
    tools: "ZBrush",
    outcome: "Study completed",
    category: "3d",
    featured: false,
    shortSummary: "ZBrush study of Myron's Discobolus focusing on gesture and classical proportions.",
    tags: ["3D", "Sculpt", "ZBrush", "Study"],
    heroImage: "media/3D/disco/close.jpg",
    overview: "A personal ZBrush study recreating The Discobolus by Myron. The work focuses on anatomy, rhythm, and proportion, rendered as a high-detail sculpt.",
    research: "Reference photos of the original sculpture and classical anatomy resources guided proportion and gesture decisions.",
    explorationImages: [
      "media/3D/disco/2_Robosculpt.png"
    ],
    finalImages: [
      "media/3D/disco/close.jpg"
    ],
    finalPrototype: "media/3D/disco/reminderDiscobolusFinal.pdf",
    results: "Completed a high-detail ZBrush sculpt and documented the process; deliverables include final renders and a PDF case study documenting workflow and decisions."
  }
  ,
  6: {
    title: "The Butter Maker, a Creative Engine Study",
    role: "3D Artist",
    timeline: "Exploratory",
    tools: "ZBrush, Blender",
    outcome: "Motion study / creative engine form",
    category: "3d",
    featured: false,
    shortSummary: "A 3D motion study rendered as a short video of a woman churning butter, exploring mechanical rhythm and form as a creative engine.",
    tags: ["3D", "Motion", "Video"],
    heroImage: "media/3D/misc/butterChurnThumbnail.png",
    overview: "This project explores rhythmic motion translated into 3D form. The deliverable is a short animation showcasing the churning action and its sculptural qualities.",
    research: "Iterative forms and motion tests informed decisions; emphasis on silhouette and readable motion at small scale.",
    hideProcess: true,
    finalImages: [],
    finalPrototype: "media/3D/misc/Butter_1 (1) copy.mp4",
    videoPoster: "media/3D/misc/butterChurnThumbnail.png",
    results: "Produced a concise animation used as a proof-of-concept for generative/motion-driven sculptural work."
  }
  ,
  7: {
    title: "Nike of Samothrace — 3D Study",
    role: "3D Sculptor",
    timeline: "Self study",
    tools: "ZBrush",
    outcome: "Classical sculpture study",
    category: "3d",
    featured: false,
    shortSummary: "A 3D study recreating the Nike of Samothrace focusing on dynamic drapery and form.",
    tags: ["3D", "Sculpt", "Classical"],
    heroImage: "media/3D/misc/project2final copy.png",
    overview: "Recreated the Nike of Samothrace in ZBrush with attention to cloth dynamics and gesture.",
    research: "Studied Hellenistic sculpture references and museum photography to inform drapery and pose.",
    finalImages: ["media/3D/misc/project2final copy.png"],
    finalPrototype: "media/3D/misc/project2final copy.png",
    results: "Completed a detailed sculpt highlighting drapery flow and dynamic pose suitable for renders and study materials."
  }
  // Add entries 4 through 9 following this same structure
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (document.getElementById("project-content")) {
    renderProjectPage(projectId);
  }

  if (document.getElementById("gallery-container")) {
    renderGallery();
  }

  if (document.getElementById("featured-projects")) {
    renderFeaturedProjects();
  }
  // Page-level breadcrumb defaults (index/about)
  const path = window.location.pathname.split('/').pop();
  if (path === '' || path === 'index.html') {
    updateBreadcrumb([{ label: 'Home' }]);
  } else if (document.querySelector('.about-layout') || path === 'about.html') {
    updateBreadcrumb([{ label: 'Home', href: 'index.html' }, { label: 'About' }]);
  }
});

// Helper: update breadcrumb in header
function updateBreadcrumb(items) {
  // items: array of { label, href? }
  const bc = document.querySelector('.breadcrumb-inner');
  if (!bc) return;
  bc.innerHTML = items.map((it, idx) => {
    const isLast = idx === items.length - 1;
    const sep = !isLast ? `<span class="crumb-sep" aria-hidden="true">/</span>` : '';
    if (it.href && !isLast) {
      return `<a href="${it.href}">${it.label}</a>${sep}`;
    }
    // last item: plain text (current) with aria-current
    return `<span class="crumb-current" aria-current="page">${it.label}</span>${sep}`;
  }).join('');
}

function renderProjectPage(id) {
  const container = document.getElementById("project-content");
  const data = projectsData[id] || projectsData[0]; // Fallback to project 0

  // Update breadcrumb for the project page
  try {
    updateBreadcrumb([
      { label: 'Home', href: 'index.html' },
      { label: 'Work', href: 'gallery.html' },
      { label: data.title }
    ]);
  } catch (e) {
    // fail silently if breadcrumb not present
  }

  // Update social / page thumbnail meta tags so the project's thumbnail is used
  (function setPageThumbnailMeta() {
    const image = data.heroImage || (data.finalImages && data.finalImages[0]) || data.videoPoster || data.finalPrototype || '';
    const title = data.title || document.title;
    const desc = data.shortSummary || data.overview || document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    function upsertMeta(attrName, attrValue, content) {
      if (!content) return;
      let selector = `meta[${attrName}="${attrValue}"]`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:image', image);

    // Twitter
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image', image);

    // link rel=image_src
    let link = document.head.querySelector('link[rel="image_src"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'image_src');
      document.head.appendChild(link);
    }
    if (image) link.setAttribute('href', image);
    // Update canonical link to the current page URL
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    try {
      canonical.setAttribute('href', window.location.href);
    } catch (e) {}

    // Add JSON-LD structured data for the Project (helps rich results when server-side rendered; client-side is a best-effort)
    const ld = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": title,
      "description": desc,
      "url": window.location.href,
      "image": image || undefined
    };
    // remove previous script if present
    const prevLd = document.getElementById('project-json-ld');
    if (prevLd) prevLd.remove();
    const scriptLd = document.createElement('script');
    scriptLd.type = 'application/ld+json';
    scriptLd.id = 'project-json-ld';
    scriptLd.textContent = JSON.stringify(ld);
    document.head.appendChild(scriptLd);
  })();

  // Build the final solution HTML (images, video, or iframe) ahead of the template
  let finalSectionHtml = "";
  if (Array.isArray(data.finalImages) && data.finalImages.length > 0) {
    finalSectionHtml = `
      <div class="final-images-grid">
        ${data.finalImages.map(img => `
          <figure class="final-figure">
            <img src="${img}" alt="Final screenshot" class="responsive-img" loading="lazy" decoding="async">
          </figure>
        `).join("")}
      </div>
    `;
  } else if (data.finalPrototype && /\.mp4$/i.test(data.finalPrototype)) {
    // Video prototype with optional poster
    const posterAttr = data.videoPoster ? ` poster="${data.videoPoster}"` : "";
    finalSectionHtml = `
      <div class="project-final">
        <video controls${posterAttr} class="responsive-video">
          <source src="${data.finalPrototype}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  } else {
    finalSectionHtml = `
      <div class="prototype-container">
        <iframe src="${data.finalPrototype}" allowfullscreen></iframe>
      </div>
    `;
  }

  // Determine whether to show the Exploration/Process section
  const hasProcess = !data.hideProcess;
  const overviewNum = 1;
  const researchNum = 2;
  const processNum = 3;
  const finalNum = hasProcess ? 4 : 3;
  const resultsNum = finalNum + 1;

  // Only show Tools/Outcome when present to avoid rendering 'undefined'
  const toolsHtml = data.tools ? `<li><strong>Tools:</strong> ${data.tools}</li>` : "";
  const outcomeHtml = data.outcome ? `<li><strong>Outcome:</strong> ${data.outcome}</li>` : "";
  const attachmentsHtml = (Array.isArray(data.attachments) && data.attachments.length) ? `
    <section class="project-section">
      <h2>Attachments</h2>
      <ul class="attachments-list">
        ${data.attachments.map(a => `<li><a href="${a.src}" target="_blank" rel="noopener noreferrer">${a.label}</a></li>`).join("")}
      </ul>
      <div class="attachment-previews">
        ${data.attachments.map(a => (
          /\.pdf$/i.test(a.src) ? `
            <div class="attachment-preview">
              <h4>${a.label}</h4>
              <iframe src="${a.src}" frameborder="0" loading="lazy" style="width:100%;min-height:480px;"></iframe>
            </div>
          ` : ( /\.(mp4|mov)$/i.test(a.src) ? `
            <div class="attachment-preview">
              <h4>${a.label}</h4>
              <video controls class="responsive-video">
                <source src="${a.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          ` : ``)
        )).join("")}
      </div>
    </section>
  ` : "";

  container.innerHTML = `
    <section class="case-study-header">
      <h1>${data.title}</h1>
      <img src="${data.heroImage}" alt="${data.title} Hero Visual" class="hero-image" />
    </section>

    <section class="metadata-metrics">
      <ul>
        <li><strong>Role:</strong> ${data.role}</li>
        <li><strong>Timeline:</strong> ${data.timeline}</li>
        ${toolsHtml}
        ${outcomeHtml}
      </ul>
    </section>

    <section class="project-section">
      <h2>${overviewNum}. The Overview & Problem</h2>
      <p>${data.overview}</p>
    </section>

    <section class="project-section">
      <h2>${researchNum}. Research & Insights</h2>
      <p>${data.research}</p>
    </section>

    ${!data.hideProcess ? `
    <section class="project-section">
      <h2>${processNum}. Exploration & Process</h2>
      ${data.processText ? `
        <p class="process-text">${data.processText}</p>
      ` : `
      <div class="small-carousel" aria-roledescription="carousel" data-carousel>
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <button class="small-btn prev" aria-label="Previous">‹</button>
          <div class="small-viewport" style="overflow:hidden;flex:1;">
            <div class="small-track">
              ${ (data.explorationImages || []).map(img => `
                <div class="small-slide">
                  <img src="${img}" alt="Exploration Process" loading="lazy" decoding="async" class="responsive-img">
                </div>
              `).join("")}
            </div>
          </div>
          <button class="small-btn next" aria-label="Next">›</button>
        </div>
      </div>
      <script>
        (function(){
          const carousel = document.currentScript.previousElementSibling; // .small-carousel
          if(!carousel) return;
          const track = carousel.querySelector('.small-track');
          const slides = Array.from(track.children);
          const prev = carousel.querySelector('.small-btn.prev');
          const next = carousel.querySelector('.small-btn.next');
          let index = 0;
          const visible = Math.max(1, Math.floor((carousel.querySelector('.small-viewport').offsetWidth) / 160));

          function update() {
            const slideW = slides[0].getBoundingClientRect().width + parseInt(getComputedStyle(track).gap || 12);
            const offset = -index * slideW;
            track.style.transform = 'translateX(' + offset + 'px)';
            prev.disabled = index === 0;
            next.disabled = index >= slides.length - visible;
          }

          function go(n){
            index = Math.max(0, Math.min(n, slides.length - visible));
            update();
          }

          prev.addEventListener('click', ()=> { go(index-1); });
          next.addEventListener('click', ()=> { go(index+1); });

          // touch swipe
          let sx=0, dx=0;
          track.addEventListener('touchstart', e=> sx = e.touches[0].clientX, {passive:true});
          track.addEventListener('touchmove', e=> dx = e.touches[0].clientX - sx, {passive:true});
          track.addEventListener('touchend', ()=> { if(Math.abs(dx)>30){ if(dx<0) go(index+1); else go(index-1); } sx=0; dx=0; });

          const ro = new ResizeObserver(()=> {
            const vw = carousel.querySelector('.small-viewport').offsetWidth;
            const slideW = slides[0] ? slides[0].getBoundingClientRect().width + parseInt(getComputedStyle(track).gap || 12) : 160;
            const newVisible = Math.max(1, Math.floor(vw / slideW));
            if(index > slides.length - newVisible) index = Math.max(0, slides.length - newVisible);
            update();
          });
          ro.observe(carousel.querySelector('.small-viewport'));

          // init
          update();
        })();
      </script>
      `}
    </section>
    ` : ``}

    ${attachmentsHtml}

    <section class="project-section">
      <h2>${finalNum}. Final Solution & Prototype</h2>
      ${finalSectionHtml}
    </section>

    <section class="project-section">
      <h2>${resultsNum}. Results & Lessons Learned</h2>
      <p>${data.results}</p>
    </section>
  `;
}

function renderGallery() {
  const container = document.getElementById("gallery-container");
  const categories = {
    web: "Web Design",
    uxui: "UX/UI Work",
    marketing: "Digital Marketing",
    "3d": "3D Design"
  };

  // Featured projects (explicit flag)
  const featuredProjects = Object.entries(projectsData).filter(([,proj]) => proj.featured);

  let html = "";

  if (featuredProjects.length > 0) {
    html += `<section class="featured-section"><h2>Featured</h2><div class="gallery-grid">`;
    featuredProjects.forEach(([id, proj]) => {
      const fTitle = proj.title || '';
      const fSummary = proj.shortSummary || proj.subtitle || '';
      const fImg = proj.heroImage ? `<img src="${proj.heroImage}" alt="${fTitle}" />` : '';
      html += `
        <a href="projectPage.html?id=${id}" class="card featured-card">
          ${fImg}
          <h3>${fTitle}</h3>
          <p>${fSummary}</p>
        </a>
      `;
    });
    html += `</div></section>`;
  }
  for (const [catKey, catName] of Object.entries(categories)) {
    const categoryProjects = Object.entries(projectsData).filter(
      ([_, proj]) => proj.category === catKey
    );

    if (categoryProjects.length > 0) {
      html += `<div class="gallery-category"><h2>${catName}</h2><div class="gallery-grid">`;
      categoryProjects.forEach(([id, proj]) => {
        const cTitle = proj.title || '';
        const cSummary = proj.shortSummary || proj.subtitle || '';
        const cImg = proj.heroImage ? `<img src="${proj.heroImage}" alt="${cTitle}" />` : '';
        html += `
          <a href="projectPage.html?id=${id}" class="card">
            ${cImg}
            <h3>${cTitle}</h3>
            <p>${cSummary}</p>
          </a>
        `;
      });
      html += `</div></div>`;
    }
  }

  container.innerHTML = html;
  // update breadcrumb for gallery view
  try { updateBreadcrumb([{ label: 'Home', href: 'index.html' }, { label: 'Work' }]); } catch (e) {}
}

function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects");
  const featured = Object.entries(projectsData)
    .filter(([, proj]) => proj.featured)
    .slice(0, 2);

  container.innerHTML = featured
    .map(([id, proj]) => `
    <a href="projectPage.html?id=${id}" class="card">
      <img src="${proj.heroImage}" alt="${proj.title}" />
      <h3>${proj.title}</h3>
      <p><strong>Role:</strong> ${proj.role}</p>
      <p>${proj.shortSummary}</p>
      ${ (proj.tags && proj.tags.length) ? `<p class="tags">[ Tags: ${proj.tags.join(", ")} ]</p>` : "" }
    </a>
  `)
    .join("");
}