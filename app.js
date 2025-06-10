const mijnLeeftijd = berekenLeeftijd('2005-02-28');

const routes = {
  "/": () => `
   <div class="page">
    <div class="sidePanel">
        <div class="LeftPanel">
            <img src="Content/images/black.png" />
            <hr />
            <h4 class="profile-content__category-title">Get in touch!</h4>
          <div class="links">
                <a href="https://nl.linkedin.com/in/kollin-smits-947830294" target="_blank" rel="noopener noreferrer">
                    <img class="linkimage" src="Content/images/linkedin.png" alt="LinkedIn">
                </a>
                <a href="mailto:kol.smits@hotmail.com">
                    <img class="linkimage" src="Content/images/email.png" alt="Email">
                </a>
                <a href="https://github.com/kgsmits">
                    <img class="linkimage" src="Content/images/github.png" alt="Github">
                </a>
            </div>

            <hr />
            <section class="personalia">
                <div class="profile-content__category">
                    <h3 class="skillsTitle">Skills 
                        <div class="tooltip-container">
                            <span class="tooltip-target" aria-label="Uitleg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 512 512"
                                    fill="#ffffff" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                                    <path fill-rule="nonzero"
                                    d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.49 301.51v-2.03c.16-13.46 1.48-24.12 4.07-32.05 2.54-7.92 6.19-14.37 10.97-19.25 4.77-4.92 10.51-9.39 17.22-13.46 4.31-2.74 8.22-5.78 11.68-9.18 3.45-3.36 6.19-7.27 8.23-11.69 2.02-4.37 3.04-9.24 3.04-14.62 0-6.4-1.52-11.94-4.57-16.66-3-4.68-7.06-8.28-12.04-10.87-5.03-2.54-10.61-3.81-16.76-3.81-5.53 0-10.81 1.11-15.89 3.45-5.03 2.29-9.25 5.89-12.55 10.77-3.3 4.87-5.23 11.12-5.74 18.74h-32.91c.51-12.95 3.81-23.92 9.85-32.91 6.1-8.99 14.13-15.8 24.08-20.42 10.01-4.62 21.08-6.9 33.16-6.9 13.31 0 24.89 2.43 34.84 7.41 9.96 4.93 17.73 11.83 23.27 20.67 5.48 8.84 8.28 19.1 8.28 30.88 0 8.08-1.27 15.34-3.81 21.79-2.54 6.45-6.1 12.24-10.77 17.27-4.68 5.08-10.21 9.54-16.71 13.41-6.15 3.86-11.12 7.82-14.88 11.93-3.81 4.11-6.56 8.99-8.28 14.58-1.73 5.63-2.69 12.59-2.84 20.92v2.03h-30.94zm16.36 65.82c-5.94-.04-11.02-2.13-15.29-6.35-4.26-4.21-6.35-9.34-6.35-15.33 0-5.89 2.09-10.97 6.35-15.19 4.27-4.21 9.35-6.35 15.29-6.35 5.84 0 10.92 2.14 15.18 6.35 4.32 4.22 6.45 9.3 6.45 15.19 0 3.96-1.01 7.62-2.99 10.87-1.98 3.3-4.57 5.94-7.82 7.87-3.25 1.93-6.86 2.9-10.82 2.94zM417.71 94.29C376.33 52.92 319.15 27.32 256 27.32c-63.15 0-120.32 25.6-161.71 66.97C52.92 135.68 27.32 192.85 27.32 256c0 63.15 25.6 120.33 66.97 161.71 41.39 41.37 98.56 66.97 161.71 66.97 63.15 0 120.33-25.6 161.71-66.97 41.37-41.38 66.97-98.56 66.97-161.71 0-63.15-25.6-120.32-66.97-161.71z"/>
                                </svg>
                            </span>
                            <div class="tooltip-box">
                                <h4>Skill Levels Explained</h4>
                                    <ul class="Tooltip-List">
                                        <li><strong>Beginner:</strong> Just starting out, learning the basic principles.</li>
                                            <hr>
                                        <li><strong>Average:</strong> Can work independently on simple tasks, with occasional guidance.</li>
                                            <hr>
                                        <li><strong>Good:</strong> Solid understanding, able to solve moderately complex problems independently.</li>
                                            <hr>
                                        <li><strong>Intermediate:</strong> Experienced and confident, capable of mentoring others and improving processes.</li>
                                            <hr>
                                        <li><strong>Expert:</strong> Deep, refined knowledge and skill. Recognized authority, always evolving and pushing boundaries.</li>                                </ul>
                                </div>
                        </div>
                    </h3>
                </div>
                <div class="custom-line--skinny"></div>

                <div class="profile-content__element">
                    <div class="profile-content__element-header">
                        <h4 class="profile-content__title">Hard skills </h4>
                    </div>

                    
                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">C# </div>
                        <div class="profile-content__period">since 2024</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">Scrum</div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">CSS </div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">HTML </div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">GIT </div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">Javascript </div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Good">
                        <div class="skillbar skillbar_percentage good"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">Java </div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Average">
                        <div class="skillbar skillbar_percentage average"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">Svelte </div>
                        <div class="profile-content__period">since 2025</div>
                    </div>
                    <div class="skillbar_container" skill-level="Beginner">
                        <div class="skillbar skillbar_percentage beginner"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">Typescript </div>
                        <div class="profile-content__period">since 2025</div>
                    </div>
                    <div class="skillbar_container" skill-level="Beginner">
                        <div class="skillbar skillbar_percentage beginner"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">C++</div>
                        <div class="profile-content__period">since 2024</div>
                    </div>
                    <div class="skillbar_container" skill-level="Beginner">
                        <div class="skillbar skillbar_percentage beginner"></div>
                    </div>

                    <div class="profile-content__element-header">
                        <div class="profile-content__skills">PHP</div>
                        <div class="profile-content__period">since 2023</div>
                    </div>
                    <div class="skillbar_container" skill-level="Beginner">
                        <div class="skillbar skillbar_percentage beginner"></div>
                    </div>

                </div>

                <div class="profile-content__element">
                    <div class="profile-content__element-header">
                        <h4 class="profile-content__title">Soft skills </h4>
                    </div>
                    <ul class="profile-content__skills">
                        <li>Communication</li>
                        <li>Agile workstyle</li>
                        <li>Time management</li>
                        <li>Decision making</li>
                    </ul>
                </div>

            </section>
        </div>
    </div>
    <div class="sidePanel">
        <section>
            <div class="divtext">
                Hello! I am <strong>Kollin Smits</strong>, a passionate and ambitious software engineering student at 
                <a href="https://www.windesheim.nl" target="_blank">Windesheim Zwolle</a>,
                currently pursuing a degree in software development. I am driven by curiosity, eager to learn, and always looking for new challenges 
                that help me grow both personally and professionally.
                With a strong interest in development and scrum, I continuously work on projects to improve my skills and explore new technologies.
                <br><br>
                On this website, you'll find an overview of my working experience ranging from academic assignments to personal projects and everything 
                in between. Feel free to take a look around and get in touch if you'd like to connect!        
             
            </div>

        </section>
        <section>
            <div class="divtext">
            <h3 class="text-center">My projects</h3>
                <div class="profile-content__element">
                    <div class="profile-content__element-header">
                    </div>
                    <ul class="profile-content__skills">
                        <li>Web development internship <div class="tooltip-container">
                            <span class="tooltip-target" aria-label="Uitleg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 512 512"
                                    fill="#ffffff" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                                    <path fill-rule="nonzero"
                                    d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.49 301.51v-2.03c.16-13.46 1.48-24.12 4.07-32.05 2.54-7.92 6.19-14.37 10.97-19.25 4.77-4.92 10.51-9.39 17.22-13.46 4.31-2.74 8.22-5.78 11.68-9.18 3.45-3.36 6.19-7.27 8.23-11.69 2.02-4.37 3.04-9.24 3.04-14.62 0-6.4-1.52-11.94-4.57-16.66-3-4.68-7.06-8.28-12.04-10.87-5.03-2.54-10.61-3.81-16.76-3.81-5.53 0-10.81 1.11-15.89 3.45-5.03 2.29-9.25 5.89-12.55 10.77-3.3 4.87-5.23 11.12-5.74 18.74h-32.91c.51-12.95 3.81-23.92 9.85-32.91 6.1-8.99 14.13-15.8 24.08-20.42 10.01-4.62 21.08-6.9 33.16-6.9 13.31 0 24.89 2.43 34.84 7.41 9.96 4.93 17.73 11.83 23.27 20.67 5.48 8.84 8.28 19.1 8.28 30.88 0 8.08-1.27 15.34-3.81 21.79-2.54 6.45-6.1 12.24-10.77 17.27-4.68 5.08-10.21 9.54-16.71 13.41-6.15 3.86-11.12 7.82-14.88 11.93-3.81 4.11-6.56 8.99-8.28 14.58-1.73 5.63-2.69 12.59-2.84 20.92v2.03h-30.94zm16.36 65.82c-5.94-.04-11.02-2.13-15.29-6.35-4.26-4.21-6.35-9.34-6.35-15.33 0-5.89 2.09-10.97 6.35-15.19 4.27-4.21 9.35-6.35 15.29-6.35 5.84 0 10.92 2.14 15.18 6.35 4.32 4.22 6.45 9.3 6.45 15.19 0 3.96-1.01 7.62-2.99 10.87-1.98 3.3-4.57 5.94-7.82 7.87-3.25 1.93-6.86 2.9-10.82 2.94zM417.71 94.29C376.33 52.92 319.15 27.32 256 27.32c-63.15 0-120.32 25.6-161.71 66.97C52.92 135.68 27.32 192.85 27.32 256c0 63.15 25.6 120.33 66.97 161.71 41.39 41.37 98.56 66.97 161.71 66.97 63.15 0 120.33-25.6 161.71-66.97 41.37-41.38 66.97-98.56 66.97-161.71 0-63.15-25.6-120.32-66.97-161.71z"/>
                                </svg>
                            </span>
                            <div class="tooltip-box">
                                <h5>Rich Text Editor</h4>
                                    <ul class="Tooltip-List">
                                        <li><strong>The product:</strong> A customized rich text editor built based on specific requirements.</li>
                                            <hr>
                                        <li><strong>Its purpose:</strong> Packaged as an NPM module so that multiple microservices can reuse the editor efficiently.</li>
                                            <hr>
                                        <li><strong>What i Learned:</strong> How to work with microservices, extend existing NPM packages, implement pipelines, and use Azure DevOps.</li>
                                            <hr>
                                </div>
                        </div>
                        </li>

                    </ul>
                </div>
            </div>

        </section>
    </div>
</div>
  `,
  "/Experience": () => `
   <div class="page experiencepagestyle">
    <div class="sidePanel experiencePanel">
        <div class="LeftPanel">
            <img src="Content/images/black.png" />
            <hr />
            <h4 class="profile-content__category-title">Get in touch!</h4>
            <div class="links">
                <a href="https://nl.linkedin.com/in/kollin-smits-947830294" target="_blank" rel="noopener noreferrer">
                    <img class="linkimage" src="Content/images/linkedin.png" alt="LinkedIn">
                </a>
                <a href="mailto:kol.smits@hotmail.com">
                    <img class="linkimage" src="Content/images/email.png" alt="Email">
                </a>
                <a href="https://github.com/kgsmits">
                    <img class="linkimage" src="Content/images/github.png" alt="Github">
                </a>
            </div>
            <hr />
            
        </div>
    </div>
    
    
    <div class="ExperiencesidePanel text-center">
  <h3>My Experience</h3>
  <div class="Experiencepage text-center">
    <div class="timeline">
        <div class="timeline-item left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2025</h3> <span>april - june</span>
                <p>web development internship</p>
                <span class="companyspan" >Djurve</span>
            </div>
        </div>
        <div class="timeline-item right" >
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2022</h3> <span>- until present</span>
                <p>Restaurant staff </p>
                <span class="companyspan" >Ko Shing</span>
            </div>
        </div>
        <div class="timeline-item left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2022</h3> <span>feb - sept</span>
                <p>bread department</p>
                <span class="companyspan" >Jumbo</span>

            </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timelineheader">2020</h3> <span>- until 2021</span>
                <p>Warehouse employee </p>
                <span class="companyspan" >DA</span>

            </div>
        </div>
    </div>
</div>
    </div>
</div>
 `,
  "/Aboutme": () => `
  <div class="page">
    <div class="sidePanel">
        <div class="LeftPanel">
            <img src="Content/images/black.png" />
            <hr />
            <h4 class="profile-content__category-title">Get in touch!</h4>
          <div class="links">
                <a href="https://nl.linkedin.com/in/kollin-smits-947830294" target="_blank" rel="noopener noreferrer">
                    <img class="linkimage" src="Content/images/linkedin.png" alt="LinkedIn">
                </a>
                <a href="mailto:kol.smits@hotmail.com">
                    <img class="linkimage" src="Content/images/email.png" alt="Email">
                </a>
                <a href="https://github.com/kgsmits">
                    <img class="linkimage" src="Content/images/github.png" alt="Github">
                </a>
            </div>

            <hr />
            <section class="personalia">
                <div class="profile-content__element">
                    <div class="profile-content__element-header">
                        <h4 class="profile-content__title">about me </h4>
                    </div>
                    <ul class="profile-content__skills">
                        <li>Age: ${mijnLeeftijd} </li>
                        <li>Location: Zwolle, Netherlands</li>
                        <li>Education: Software Engineering at <a href="https://www.windesheim.nl" target="_blank">Windesheim</a></li>
                    </ul>
                </div>
                

            </section>
        </div>
    </div>
    <div class="sidePanel">
        <section>
            <div class="divtext">
            <h3 class="text-center">About me</h3>
            Hi! I'm Kollin Smits,
                a passionate and ambitious software engineering student at <a href="https://www.windesheim.nl" target="_blank">Windesheim Zwolle</a>, currently pursuing a degree in software development. I am driven by curiosity, eager to learn, and always looking for new challenges that help me grow both personally and professionally.
                With a strong interest in development, I continuously work on projects to improve my skills and explore new technologies. On this website, you'll find an overview of my journey so far—ranging from academic assignments to personal projects and everything in between.
                Feel free to take a look around and get in touch if you'd like to connect!        
            </div>

        </section>
        <section>
            <div class="divtext">
            <h3 class="text-center">my characteristics</h3>
                 <div class="profile-content__element">
                    <ol class="profile-content__skills">
                            <li><strong>Strong interest in Scrum and Agile practices</strong><br>
                            I actively study Scrum and understand how structure and collaboration contribute to successful software projects.
                        </li>
                        <li><strong>Hands-on mindset</strong><br>
                            I prefer learning by doing — I enjoy working on real projects and getting involved directly.
                        </li>
                        <li><strong>Curious and eager to learn</strong><br>
                            I'm always exploring new technologies and looking for ways to grow as a developer.
                        </li>
                        <li><strong>Team-oriented communicator</strong><br>
                            I value clear communication and enjoy working in teams where collaboration is key.
                        </li>
                        <li><strong>Structured thinker</strong><br>
                            I like logic, clarity, and organization — both in code and in planning.
                        </li>
                        <li><strong>Future-focused</strong><br>
                            I aim to build solutions that are not only functional but also scalable and maintainable.
                        </li>
                        <li><strong>Quality-driven</strong><br>
                            I care about writing clean code, following best practices, and maintaining good documentation.
                        </li>
                        <li><strong>Positive work attitude</strong><br>
                            I am enthusiastic, motivated, and always looking for opportunities to improve.
                        </li>
                        <li><strong>International mindset</strong><br>
                            Studying in the Netherlands and working in English have made me comfortable in international environments.
                        </li>
                        <li><strong>Strong sense of responsibility</strong><br>
                            I take ownership of my work and follow through on commitments in both projects and teamwork.
                        </li>
                    </ol>
                </div>
        </section>
    </div>
</div>
`,
};


function router() {
  const path = location.hash.slice(1) || "/";
  const render = routes[path] || (() => "<h1>404</h1><p>Pagina niet gevonden</p>");
  document.getElementById("body").innerHTML = render();
}

function berekenLeeftijd(geboortedatum) {
  const vandaag = new Date();
  const geboorte = new Date(geboortedatum);
  
  let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
  const maandVerschil = vandaag.getMonth() - geboorte.getMonth();
  
  if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < geboorte.getDate())) {
    leeftijd--;
  }
  
  return leeftijd;
}

function setActiveNav() {
    const currentHash = location.hash || "#/";
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      const route = link.getAttribute("href");
      if (route === currentHash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("hashchange", setActiveNav);
  window.addEventListener("DOMContentLoaded", setActiveNav);

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
