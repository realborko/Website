document.addEventListener("DOMContentLoaded", () => {
  const projectsList = document.getElementById("projects-list");

  // GitHub API
  const GITHUB_API = "https://api.github.com/users/realborko/repos";

  // Fetch repositories from GitHub
  async function fetchProjects() {
    try {
      const response = await fetch(GITHUB_API);
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();

      data.forEach((repo) => {
        const project = document.createElement("div");
        project.classList.add("project");

        project.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description available"}</p>
          <a href="${repo.html_url}" target="_blank">View Project</a>
        `;

        projectsList.appendChild(project);
      });

      // Add animations
      gsap.from(".project", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    } catch (error) {
      projectsList.innerHTML = `<p>Failed to load projects. Please try again later.</p>`;
      console.error(error);
    }
  }

  fetchProjects();
});
