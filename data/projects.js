const projectData = [
    {
      title: "Hack2Bot - AI Chatbot",
      link: "https://github.com/ayushnandanwar/Hack2Bot-AI-Chatbot",
      image: "images/project-3.png",
      description: "A chatbot using NLP to understand and respond to user queries. Built as a hackathon project to explore conversational AI.",
      impact: "NLP-powered Q&A",
      tech: ["Python", "NLP", "Flask"]
    },
    {
      title: "Banking System",
      link: "https://github.com/ayushnandanwar/Basic-Banking-System-The-Sparks-Foundation",
      image: "images/project-4.png",
      description: "A web app to transfer funds between accounts, view balances, and track transaction history. Built during Sparks Foundation internship.",
      impact: "Fund transfer & history",
      tech: ["Node.js", "Express", "MySQL"]
    },
    {
      title: "Bike Rental System",
      link: "https://github.com/ayushnandanwar/Bike-Rental-Management-System",
      image: "images/project-2.png",
      description: "Full-stack rental platform with user registration, bike booking, availability tracking, and admin dashboard.",
      impact: "End-to-end booking flow",
      tech: ["Java", "JSP", "MySQL"]
    },
  ];

const project = document.getElementById("project_data");
let project_html = "";

projectData.forEach(p =>{
    const techHtml = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    project_html +=`
        <div class="col-lg-4">
        <div class="text-container project-card">
            <h5><strong>${p.title}</strong></h5>
            <p class="project-description">${p.description}</p>
            <div class="image-container border">
                <a href="${p.link}" target="_blank" rel="noopener noreferrer">
                    <img class="img-fluid" src="${p.image}" alt="${p.title}" loading="lazy">
                </a>
            </div>
            <p class="project-impact">${p.impact}</p>
            <div class="tech-tags">${techHtml}</div>
        </div>
    </div>
    `
})

project.innerHTML = project_html;
  