const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

if (!fs.existsSync(buildDir)) {
  console.log('Build directory not found. Skipping static page generation.');
  process.exit(0);
}

const templatePath = path.join(buildDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.log('build/index.html not found. Skipping static page generation.');
  process.exit(0);
}

// Clean up obsolete directories if they exist
const obsoleteDirs = [
  'service-areas',
  'services/sod-installation',
  'services/bark-mulch',
  'services/pavers',
  'services/retaining-walls',
  'services/yard-cleanups',
  'services/sprinklers-drip-systems',
  'services/lawn-maintenance'
];

obsoleteDirs.forEach((dir) => {
  const fullPath = path.join(buildDir, dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
});

const template = fs.readFileSync(templatePath, 'utf8');

// Exactly the 5 services listed on the home page
const pages = [
  {
    path: 'services/lawn-care',
    title: 'Lawn Care & Garden Maintenance | LZM Landscaping LLC | Gig Harbor & Tacoma',
    description: 'Professional lawn mowing, fertilization, weed control, mulching, and garden maintenance in Gig Harbor and Tacoma WA. Call (253) 358-5125.',
    h1: 'Lawn Care & Garden Maintenance',
    bodyText: 'Routine lawn mowing, sharp edging, fertilization, weed control, mulching, patch regrowth, brush trimming, and pruning tailored to Pacific Northwest turf.'
  },
  {
    path: 'services/tree-service',
    title: 'Tree Service & Trimming | LZM Landscaping LLC | Gig Harbor & Tacoma WA',
    description: 'Expert tree trimming, winter fruit tree prep, branch removal, stump removal, and debris hauling in Gig Harbor and Pierce County. Call (253) 358-5125.',
    h1: 'Tree Service & Trimming',
    bodyText: 'Specialized tree maintenance, winter fruit tree prep, stump removal, branch pruning, and complete debris hauling.'
  },
  {
    path: 'services/cleanups',
    title: 'General Yard Cleanups & Debris Hauling | LZM Landscaping LLC | Gig Harbor',
    description: 'Fast, thorough yard cleanups, garden bed weeding, grass removal, bark spreading, and debris hauling in Gig Harbor & Tacoma. Call (253) 358-5125.',
    h1: 'General Cleanups',
    bodyText: 'Garden bed cleanups, debris hauling, grass removal, and new beauty bark or decorative gravel spreading for residential and commercial yards.'
  },
  {
    path: 'services/hardscaping',
    title: 'Hardscaping, Pavers & Retaining Walls | LZM Landscaping LLC | Gig Harbor',
    description: 'Custom retaining walls, paver patios, stone walkways, and hardscape renovations in Gig Harbor, Tacoma & Pierce County. Call (253) 358-5125.',
    h1: 'Hardscaping',
    bodyText: 'Durable, high-quality stonework designed to last a lifetime: retaining walls, paver patios, stone walkways, and hardscape renovations.'
  },
  {
    path: 'services/sprinklers',
    title: 'Sprinkler System Installation & Repair | LZM Landscaping LLC | Gig Harbor',
    description: 'New sprinkler installation, leak repairs, smart Wi-Fi timers, and plant drip systems in Gig Harbor and Tacoma WA. Call (253) 358-5125.',
    h1: 'Sprinkler System Installation',
    bodyText: 'Full-service irrigation solutions and water-saving upgrades: whole new systems, existing system repairs, drip systems, and smart timer replacements.'
  }
];

pages.forEach((page) => {
  const targetDir = path.join(buildDir, page.path);
  fs.mkdirSync(targetDir, { recursive: true });

  let pageHtml = template;
  // Replace title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  // Replace meta name="title"
  pageHtml = pageHtml.replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${page.title}" />`);
  // Replace meta name="description"
  pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${page.description}" />`);
  // Replace canonical
  pageHtml = pageHtml.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="https://lzmlandscapingllc.com/${page.path}" />`);
  // Replace og:title & og:description & og:url
  pageHtml = pageHtml.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${page.title}" />`);
  pageHtml = pageHtml.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${page.description}" />`);
  pageHtml = pageHtml.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="https://lzmlandscapingllc.com/${page.path}" />`);

  // Replace noscript fallback with page-specific semantic content
  const pageNoscript = `
    <noscript>
      <header>
        <h1>${page.h1} | LZM Landscaping LLC</h1>
        <p>Serving Gig Harbor, Tacoma, Port Orchard, Bremerton, and Pierce & Kitsap Counties</p>
        <p><strong>Call Today:</strong> <a href="tel:+12533585125">(253) 358-5125</a> | <strong>Office:</strong> <a href="tel:+13602865237">(360) 286-5237</a> | <strong>Email:</strong> <a href="mailto:lzmlandscapingllc@gmail.com">lzmlandscapingllc@gmail.com</a></p>
      </header>
      <main>
        <section>
          <h2>About ${page.h1}</h2>
          <p>${page.bodyText}</p>
          <p>${page.description}</p>
          <p><a href="https://lzmlandscapingllc.com/">Visit Home Page</a></p>
        </section>
      </main>
    </noscript>`;

  pageHtml = pageHtml.replace(/<noscript>[\s\S]*?<\/noscript>/i, pageNoscript);

  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf8');
  console.log(`Generated static page: build/${page.path}/index.html`);
});

console.log(`Successfully pre-rendered ${pages.length} static SEO pages!`);
