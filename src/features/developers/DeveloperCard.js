// src/features/developers/DeveloperCard.jsx
import { Link } from 'react-router-dom';

const DeveloperCard = ({ developer }) => (
  <div className="border rounded-lg p-4 shadow">
    <img src={developer.avatar} alt={developer.name} className="w-16 h-16 rounded-full" />
    <h2 className="text-xl font-bold">{developer.name}</h2>
    <p>{developer.bio}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {developer.skills.map(skill => (
        <span key={skill} className="bg-gray-200 text-sm px-2 py-1 rounded">{skill}</span>
      ))}
    </div>
    <Link to={`/developers/${developer.id}`} className="text-blue-500 mt-2 inline-block">View Profile</Link>
  </div>
);

export default DeveloperCard;