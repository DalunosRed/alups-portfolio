export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
