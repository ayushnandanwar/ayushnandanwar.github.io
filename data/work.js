const works = [
    {
        title: "E-Cell MITAOE Official website",
        link: "https://ayushnandanwar.github.io/ecell-website/",
        image: "images/work-3.png"
      },
    {
      title: "GDSC MITAOE Official website",
      link: "https://gdscmitaoe.github.io/",
      image: "images/work-1.png"
    },
    {
      title: "GDSC MITAOE Admin Panel",
      link: "https://gdsc.mitaoeadmin.repl.co/",
      image: "images/work-2.png"
    },
    
  ];



const work = document.getElementById("work_data");
let work_html = "";

works.forEach(w =>{
    work_html +=`
        <div class="col-lg-6">
        <div class="text-container">
            <h4> <strong> ${w.title}</strong> </h4>

            <div class="image-container border">
                <a href="${w.link}" target="_blank">
                    <img class="img-fluid" src="${w.image}" alt="alternative">
                </a>
            </div> <!-- end of image-container -->
        </div> <!-- end of text-container -->
    </div> 
    `
})

work.innerHTML = work_html;
  