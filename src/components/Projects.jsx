import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Cash Point",
      description: "Une application de gestion de Cash point (mobile money) ",
      technologies: ["Symfony", "React", "MySQL", "Docker", "Git"],
      link: "https://github.com/mitantsoa1/cash-symfony-react",
    },
    {
      title: "Gestion file d'attente",
      description: "Un projet Symfony pour gérer une file d'attente",
      technologies: ["Symfony", "MySQL", "Git"],
      link: "https://github.com/mitantsoa1/mi-lah/",
    },
    {
      title: "forums & comment",
      description: "Projet de forum avec système de commentaire",
      technologies: ["Laravel", "MySQL", "Git"],
      link: "https://github.com/mitantsoa1/forums",
    },
  ];

  return (
    <section id="projets" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-dark">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            title="Repo dans github"
            href={project.link}
            target="_blank"
            key={index}
            className="p-6 bg-white border-t-4 rounded-lg shadow-md border-secondary"
          >
            <h3 className="mb-2 text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 mb-2 mr-2 text-sm text-white rounded-full bg-secondary/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
