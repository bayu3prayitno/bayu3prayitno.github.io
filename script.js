document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Skills data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Node.js",
    "Python",
    "Data Science",
    "Git",
    "Responsive Design",
    "UI/UX",
    "MongoDB",
  ];

  // Projects data
  const projects = [
    {
      title: "Chat Visualization Dashboard",
      description:
        "Website dashboard includes the interactive online channel on board with IDs",
      link: "#",
    },
    {
      title: "Project Management Tool",
      description: "Web application for managing team projects and tasks",
      link: "#",
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online store with payment integration",
      link: "#",
    },
  ];

  // Render skills
  const skillsContainer = document.querySelector(".skills-container");
  skills.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className = "skill-badge";
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
  });

  // Render projects
  const projectsContainer = document.querySelector(".projects-container");
  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `;

    projectsContainer.appendChild(col);
  });

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the data to a server
    console.log("Form submitted:", { name, email, subject, message });

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    contactForm.reset();
  });
});
