const projectData = [

    {
        title: "Hack2Bot An AI Chatbot",
        link: "https://github.com/ayushnandanwar/Hack2Bot-AI-Chatbot",
        image: "images/project-3.png"
      },
      {
        title: "Basic Banking System",
        link: "https://github.com/ayushnandanwar/Basic-Banking-System-The-Sparks-Foundation",
        image: "images/project-4.png"
      },{
        title: "MITAOE Mozilla Website Clone",
        link: "https://ayushnandanwar.github.io/mitaoe-mozilla-equilibrium/index.html",
        image: "images/project-5.png"
      },
      {
        title: "Bike Rental System",
        link: "https://github.com/ayushnandanwar/Bike-Rental-Management-System",
        image: "images/project-2.png"
      },
    {
      title: "Club Management System",
      link: "https://github.com/ayushnandanwar/clubs-mitaoe",
      image: "images/project-1.png"
    },
    
    
  ];

  

const project = document.getElementById("project_data");
let project_html = "";

projectData.forEach(p =>{
    project_html +=`
        <div class="col-lg-4">
        <div class="text-container">
            <h5> <strong> ${p.title}</strong> </h5>

            <div class="image-container border">
                <a href="${p.link}" target="_blank">
                    <img class="img-fluid" src="${p.image}" alt="alternative">
                </a>
            </div> <!-- end of image-container -->
        </div> <!-- end of text-container -->
    </div> <!-- end of col -->
    `
})

project.innerHTML = project_html;
  