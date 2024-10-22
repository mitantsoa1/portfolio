import React from "react";
import { FileCode2, Database, Container } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "PHP",
      icon: <FileCode2 className="w-6 h-6" />,
      subskills: [
        { name: "Symfony", level: 60 },
        { name: "Laravel", level: 40 },
      ],
    },
    {
      name: "JavaScript",
      icon: <FileCode2 className="w-6 h-6" />,
      subskills: [
        { name: "React.js", level: 40 },
        { name: "Vue.js", level: 30 },
      ],
    },
    {
      name: "Bases de Données",
      icon: <Database className="w-6 h-6" />,
      subskills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 50 },
      ],
    },
    { name: "Docker", icon: <Container className="w-6 h-6" />, level: 45 },
    { name: "Git", icon: <FileCode2 className="w-6 h-6" />, level: 75 },
    { name: "HTML/CSS", icon: <FileCode2 className="w-6 h-6" />, level: 90 },
  ];

  return (
    <section id="compétences" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-text">Compétences</h2>
      <div className="grid grid-cols-2 gap-4 border-l-8 md:grid-cols-3 card">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col p-5 mb-5 border-l-4 rounded-lg shadow-md bg-ternary border-border"
          >
            <div className="flex items-center">
              <span className="text-text">{skill.icon}</span>
              <span className="ml-2">{skill.name}</span>
            </div>
            {skill.subskills ? (
              skill.subskills.map((subskill, subIndex) => (
                <div key={subIndex} className="mt-2">
                  <span className="text-sm font-semibold">{subskill.name}</span>
                  <div className="w-full h-2 mt-1 bg-white rounded">
                    <div
                      className="h-full transition-all duration-300 rounded bg-border"
                      style={{ width: `${subskill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-2 mt-2 rounded bg-text">
                <div
                  className="h-full transition-all duration-300 rounded bg-border"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
