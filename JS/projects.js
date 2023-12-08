let html_icon = {
    title: "HTML",
    img_link: './Assets/Icons/html.svg'
}

let css_icon = {
    title: "CSS",
    img_link: './Assets/Icons/css.svg'
}

let js_icon = {
    title: "JS",
    img_link: './Assets/Icons/js.svg'
}

let firebase_icon = {
    title: "Firebase",
    img_link: './Assets/Icons/firebase.svg'
}

let tmdbAPI_icon = {
    title: "TMDB API",
    img_link: null
}

let chessAPI_icon = {
    title: "Chess.com API",
    img_link: null
}

let canvasAPI_icon = {
    title: "CanvasAPI",
    img_link: null
}

let webAudioAPI_icon = {
    title: "WebAudioAPI",
    img_link: null
}

let python_icon = {
    title: "Python",
    img_link: './Assets/Icons/python.svg'
}

let numpy_icon = {
    title: "Numpy",
    img_link: './Assets/Icons/numpy.svg'
}

let pandas_icon = {
    title: "Pandas",
    img_link: './Assets/Icons/pandas.svg'
}

let matplotlib_icon = {
    title: "Matplotlib",
    img_link: './Assets/Icons/matplotlib.svg'
}

let mysql_icon = {
    title: "MySQL",
    img_link: './Assets/Icons/mysql.svg'
}

let github_icon = {
    title: "Github",
    img_link: './Assets/Icons/github.svg'
}

let website_icon = {
    title: "Website",
    img_link: './Assets/Icons/website.svg'
}

let blog_icon = {
    title: "Blog",
    img_link: './Assets/Icons/blog.svg'
}

let markdown_icon = {
    title: "Markdown",
    img_link: './Assets/Icons/markdown.svg'
}



const projects = {

    project9: {
        title: "Reel Sleuth",
        description:  "A website where you can search for movies, add them to your wishlist, keep track of what you've watched, and mark your favorites.",
        technologies: [html_icon, css_icon, js_icon, firebase_icon, tmdbAPI_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/ReelSleuth",
        website_link: "https://reelsleuth.netlify.app/",
        blog_link: 'reelSleuth',
        image_gif: "./Assets/Projects/reelSleuth.png"
    },

    project8: {
        title: "Chess Stats - Updated",
        description:  "This is the updated version of the Chess Player Stats Repo I made earlier. Displays, the current rating, best rating and number of games played in each category, namely - Bullet, Blitz and Rapid",
        technologies: [html_icon, css_icon, js_icon, chessAPI_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/ChessPlayerStatsUpdated",
        website_link: "https://vignesh-venkatesh.github.io/ChessPlayerStatsUpdated/",
        blog_link: 'chessStats',
        image_gif: "./Assets/Projects/chessstats.png"
    },

    project7: {
        title: "Etch A Sketch",
        description:  "As part of \"The Odin Project\" bootcamp, we were supposed to create an Etch-A-Sketch application as part of one of our projects. It helped me understand how event listeners in Javascript worked.",
        technologies: [html_icon, css_icon, js_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/etch-a-sketch",
        website_link: "https://vignesh-venkatesh.github.io/etch-a-sketch/",
        blog_link: null,
        image_gif: "./Assets/Projects/etchasketch.gif"
    },

    project6: {
        title: "Music Visualizer",
        description:  "Using the built-in Canvas API and WebAudio API from Javascript to display music visualizations. Future updates might include a 3D visualizer using Three.js",
        technologies: [html_icon, css_icon, js_icon, canvasAPI_icon, webAudioAPI_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/MusicVisualizer",
        website_link: "https://vignesh-venkatesh.github.io/MusicVisualizer/",
        blog_link: null,
        image_gif: "./Assets/Projects/musicvisualizer.gif"
    },

    project5: {
        title: "Rock Paper Scissors",
        description:  "As part of \"The Odin Project\" bootcamp, we were supposed to create a Rock, Paper, Scissors game as part of one of our projects. It helped me understand how Flexbox and DOM Manipulation worked",
        technologies: [html_icon, css_icon, js_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/odin-rock-paper-scissors",
        website_link: "https://vignesh-venkatesh.github.io/odin-rock-paper-scissors/",
        blog_link: null,
        image_gif: "./Assets/Projects/rockpaperscissors.gif"
    },

    project4: {
        title: "Interactive Piano",
        description:  "A small project to test my HTML, CSS, JS skills. Used the in built-in audio API to load in the tones for the keys.",
        technologies: [html_icon, css_icon, js_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/interactive-piano",
        website_link: "https://vignesh-venkatesh.github.io/interactive-piano/",
        blog_link: null,
        image_gif: "./Assets/Projects/interactivepiano.gif"
    },

    project3: {
        title: "Photo Watermarker",
        description:  "Made a python program to help me with watermarking the photographs that I took, in bulk.",
        technologies: [python_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/photo-watermarker",
        website_link: null,
        blog_link: 'photoWatermarker',
        image_gif: "./Assets/Projects/photowatermarker.png"
    },

    project2: {
        title: "Spotify EDA",
        description:  "Conducted an Exploratory Data Analysis on the Spotify Dataset and understood trends and insights.",
        technologies: [python_icon, numpy_icon, pandas_icon, matplotlib_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/SpotifyEDA",
        website_link: null,
        blog_link: null,
        image_gif: "./Assets/Projects/spotifyEDA.gif"
    },

    project1: {
        title: "School Library Management System",
        description:  "Created a School Library Management System which includes both, admin and student UI on the command line",
        technologies: [python_icon, mysql_icon],
        github_link: "https://github.com/Vignesh-Venkatesh/SchoolLibraryManagementSystem",
        website_link: null,
        blog_link: null,
        image_gif: "./Assets/Projects/SchoolLibManagementSys.png"
    },
}

const select = document.getElementById("project-tech-select")

displayProjects("All")
select.addEventListener("change", () => {

    displayProjects(select.value)
    
})


function getProjects(value) {

    if (value == "All"){
        return projects
    }

    return_project = {}

    for (const project in projects) {

        const technologyTitles = projects[project].technologies.map(tech => tech.title);

        if (technologyTitles.includes(value)){
            return_project[project] = projects[project];
        }

    }

    return return_project
    
}



function displayProjects(value){
    const project_section_panel = document.getElementById("project-section-panels")
    project_section_panel.innerHTML = ''

    
    required_projects = getProjects(value)
    

    for (const project in required_projects) {

        

        const content = document.createElement('div');
        const tech_div = document.createElement('div');
        const link_div = document.createElement('div')

        tech_div.className = "technologies-div"
        link_div.className = "links-div"

        content.innerHTML = `
                            <div class = "project-panel">
                                <div class = "project-panel-side-1">
                                    <!-- image/gif -->
                                    <img src="${projects[project].image_gif}" alt="">
                                    <!-- links -->
                                    ${generateLinks(projects[project].github_link, projects[project].website_link, projects[project].blog_link, link_div)}
                                </div>

                                <div class = "project-panel-side-2">
                                    <!-- Project Title -->
                                    <h1>${projects[project].title}</h1> <!-- Use projects[project] here as well -->
                                    <!-- Project Description -->
                                    <p>${projects[project].description}</p>
                                    <!-- Technologies Used -->
                                    ${generateTechnologiesDiv(projects[project].technologies, tech_div)}
                                    
                                </div>
                            </div>

                            
        `;
        project_section_panel.appendChild(content);
    }
}


function generateLinks(github, website, blog, link_div){
    if (github) {

        const img = document.createElement("img");
        const link = document.createElement("a")

        img.src = github_icon.img_link;
        img.alt = github_icon.title;
        img.className = "github"

        link.appendChild(img)

        link.href = github
        link.target = "_blank"

        link_div.appendChild(link);

    }

    if (website) {

        const img = document.createElement("img");
        const link = document.createElement("a")

        img.src = website_icon.img_link;
        img.alt = website_icon.title;
        img.className = "website"

        link.appendChild(img)

        link.href = website
        link.target = "_blank"

        link_div.appendChild(link);

    }

    if (blog) {

        const img = document.createElement("img");
        const link = document.createElement("a")

        img.src = markdown_icon.img_link;
        img.alt = markdown_icon.title;
        img.className = "blog"

        link.appendChild(img)

        link.href = `./blog.html?id=${blog}`
        // link.target = "_blank"

        link_div.appendChild(link);

    }


    return link_div.outerHTML; 
}


function generateTechnologiesDiv(tech, tech_div){

    tech.forEach((tech) => {
        // Check if img_link is not null before creating the <img> element


        if (tech.img_link) {
          const img = document.createElement("img");
          img.src = tech.img_link;
          img.alt = tech.title;
          tech_div.appendChild(img);

        }

        else{
            const p = document.createElement("p")
            p.innerHTML = tech.title
            tech_div.appendChild(p);
        }
      });
    
      return tech_div.outerHTML; 
   
}