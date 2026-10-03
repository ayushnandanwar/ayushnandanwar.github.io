const projectData = [
  {
    label: "AI product",
    title: "Hack2Bot AI Chatbot",
    summary: "Explored conversational AI workflows and practical chatbot product patterns to build an interactive, user-facing assistant experience.",
    link: "https://github.com/ayushnandanwar/Hack2Bot-AI-Chatbot",
    image: "images/project-3.jpg",
    webp: "images/project-3.webp",
    width: 900,
    height: 492
  },
  {
    label: "Fintech",
    title: "Basic Banking System",
    summary: "Built a core banking workflow with account handling, transfers, and transaction logic using a clean backend structure.",
    link: "https://github.com/ayushnandanwar/Basic-Banking-System-The-Sparks-Foundation",
    image: "images/project-4.jpg",
    webp: "images/project-4.webp",
    width: 1200,
    height: 656
  },
  {
    label: "Frontend",
    title: "MITAOE Mozilla Clone",
    summary: "Recreated a product-style website landing experience with responsive layout and polished front-end execution.",
    link: "https://ayushnandanwar.github.io/mitaoe-mozilla-equilibrium/index.html",
    image: "images/project-5.jpg",
    webp: "images/project-5.webp",
    width: 1200,
    height: 656
  },
  {
    label: "Operations",
    title: "Bike Rental Management System",
    summary: "Designed a rental management workflow covering booking, inventory, and operations logic for a small-scale system.",
    link: "https://github.com/ayushnandanwar/Bike-Rental-Management-System",
    image: "images/project-2.jpg",
    webp: "images/project-2.webp",
    width: 1200,
    height: 655
  },
  {
    label: "Community",
    title: "Club Management System",
    summary: "Delivered a practical club management platform with team workflows, event organization, and operational flow support.",
    link: "https://github.com/ayushnandanwar/clubs-mitaoe",
    image: "images/project-1.jpg",
    webp: "images/project-1.webp",
    width: 1200,
    height: 667
  }
];

const project = document.getElementById("project_data");
if (project) {
  project.innerHTML = projectData.map((p, index) => `
    <article class="project-card reveal">
      <div class="project-card__visual visual-${(index % 4) + 1}">
        <picture>
          <source srcset="${p.webp}" type="image/webp" />
          <img src="${p.image}" alt="${p.title}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async" />
        </picture>
      </div>
      <div class="project-card__body">
        <div class="meta-label">Project</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">View project</a>
      </div>
    </article>
  `).join("");
}
