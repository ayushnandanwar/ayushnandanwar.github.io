const works = [
  {
    label: "Campaign systems",
    title: "Campaign Management Platform",
    category: "Osmos.ai",
    summary: "Re-architected the legacy campaign system to support a 3-tier hierarchy while preserving backward compatibility and zero-disruption rollout.",
    image: "images/work-1.jpg",
    webp: "images/work-1.webp",
    width: 1100,
    height: 603
  },
  {
    label: "Platform UX",
    title: "OAuth Connector Framework",
    category: "Integration platform",
    summary: "Built a reusable auth foundation to onboard services like Google, Meta, LinkedIn, Spotify, Razorpay, and PayU across the ecosystem.",
    image: "images/work-2.jpg",
    webp: "images/work-2.webp",
    width: 900,
    height: 493
  },
  {
    label: "Monetization",
    title: "Ad Packages & Auction Flows",
    category: "AdTech",
    summary: "Led design and delivery of Pre-Auction and Flexi Ad Packages for marketplaces to unlock new monetization and advertiser purchase models.",
    image: "images/work-3.jpg",
    webp: "images/work-3.webp",
    width: 900,
    height: 491
  }
];

const workRoot = document.getElementById("work_data");
if (workRoot) {
  workRoot.innerHTML = works.map((w, index) => `
    <article class="portfolio-card reveal">
      <div class="portfolio-card__visual visual-${(index % 3) + 1}">
        <picture>
          <source srcset="${w.webp}" type="image/webp" />
          <img src="${w.image}" alt="${w.title}" width="${w.width}" height="${w.height}" loading="lazy" decoding="async" />
        </picture>
      </div>
      <div class="portfolio-card__body">
        <div class="meta-label">${w.category}</div>
        <h3>${w.title}</h3>
        <p>${w.summary}</p>
      </div>
    </article>
  `).join("");
}
