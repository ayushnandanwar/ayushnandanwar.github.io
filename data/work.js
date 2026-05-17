const works = [
    {
      title: "E-Cell MITAOE Website",
      link: "https://ayushnandanwar.github.io/ecell-website/",
      image: "images/work-3.png",
      description: "Built the official website for the college entrepreneurship cell. Handled layout, content structure, and deployment. Served 500+ monthly visitors.",
      role: "Lead Developer",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "GDSC MITAOE Website",
      link: "https://gdscmitaoe.github.io/",
      image: "images/work-1.png",
      description: "Developed the community website for Google Developer Student Club. Managed team of 3, built event listings and member directory.",
      role: "Frontend Lead",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "GDSC MITAOE Admin Panel",
      link: "https://gdscmitaoe.github.io/",
      image: "images/work-2.png",
      description: "Built an internal CMS for the GDSC team to manage events, blog posts, and member data without touching code.",
      role: "Full-stack Developer",
      tech: ["Node.js", "Express", "MongoDB", "EJS"]
    },
  ];

const work = document.getElementById("work_data");
let work_html = "";

works.forEach(w =>{
    const techHtml = w.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    work_html +=`
        <div class="col-lg-4">
        <div class="text-container work-card">
            <h4><strong>${w.title}</strong></h4>
            <p class="work-role">${w.role}</p>
            <p class="work-description">${w.description}</p>
            <div class="image-container border">
                <a href="${w.link}" target="_blank" rel="noopener noreferrer">
                    <img class="img-fluid" src="${w.image}" alt="${w.title}" loading="lazy">
                </a>
            </div>
            <div class="tech-tags">${techHtml}</div>
        </div>
    </div>
    `
})

work.innerHTML = work_html;
  