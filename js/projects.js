async function loadProjects() {

  const response = await fetch("templates/project-card.html");
  const template = await response.text();

  const container = document.getElementById("project-grid");

  let currentProject = 0;

  const counter = document.getElementById("project-counter");
  const prevBtn = document.getElementById("project-prev");
  const nextBtn = document.getElementById("project-next");

  const tabs=document.getElementById("project-tabs");

  projects.forEach((project,index)=>{
    const button=document.createElement("button");
    button.className="project-tab";
    button.textContent = project.tab || project.title;
    button.addEventListener("click",()=>{
      currentProject=index;
      renderProject(currentProject);
    });
    tabs.appendChild(button);
  });

  function renderProject(index) {

    const project = projects[index];

    let html = template;

    const templateData = {
      title: project.title,
      description: project.description,
      role: project.role,
      environment: project.environment,
      workload: project.workload,
    };

    Object.entries(templateData).forEach(([key, value]) => {
      html = html.replaceAll(`{{${key}}}`, value);
    });

    const highlightsHTML = (project.highlights || [])
      .map(highlight => `
                <div class="highlight">
                    <h4>${highlight.value}</h4>
                    <span>${highlight.label}</span>
                </div>
            `)
      .join("");

    const tagsHTML = (project.tags || [])
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    html = html.replaceAll("{{highlights}}", highlightsHTML);
    html = html.replaceAll("{{tags}}", tagsHTML);

    container.innerHTML = html;

    document
      .querySelectorAll(".project-tab")
      .forEach((tab,i)=>{
        tab.classList.toggle("active",i===index);
      });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === projects.length - 1;
  }

  renderProject(currentProject);

  prevBtn.addEventListener("click", () => {
    if (currentProject > 0) {
      currentProject--;
      renderProject(currentProject);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentProject < projects.length - 1) {
      currentProject++;
      renderProject(currentProject);
    }
  });
}
