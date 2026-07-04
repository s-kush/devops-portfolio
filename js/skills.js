async function loadSkills() {

    const response = await fetch("templates/skill-card.html");
    const template = await response.text();

    const container = document.getElementById("skills-grid");

    container.innerHTML = "";

    skills.forEach(skill => {

        let html = template;

        const templateData = {
            title: skill.title,
            description: skill.description,
            count: `${skill.tags.length} Skills`
        };

        Object.entries(templateData).forEach(([key, value]) => {
            html = html.replaceAll(`{{${key}}}`, value);
        });

        const tagsHTML = skill.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("");

        html = html.replaceAll("{{tags}}", tagsHTML);

        container.insertAdjacentHTML("beforeend", html);
    });

}
