export default function SkillCard({ skill }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
      <p className="text-center font-medium text-lg">{skill}</p>
    </div>
  );
}
