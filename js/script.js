loadProjects();
loadSkills();

document.getElementById("projects-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
