import { useState } from "react";
import Hero from "./components/Hero";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function App() {
  const [persona, setPersona] = useState("web");

  const filteredSkills = skills[persona];
  const filteredProjects = projects[persona];
  const [mode, setMode] = useState("web");

  return (
    // <div className="min-h-screen bg-gray-900 text-white p-6">
    //   <header className="flex justify-between items-center mb-10">
    //     <h1 className="text-3xl font-bold">Alups</h1>
    //     <ToggleSwitch persona={persona} setPersona={setPersona} />
    //   </header>
    <div className="min-h-screen bg-[#1e1e1e] text-white px-60 ">
      <Hero mode={mode} setMode={setMode} />
      {/* <main>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main> */}
    </div>
  );
}
