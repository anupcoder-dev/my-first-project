// src/pages/DeveloperProfile.jsx
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DeveloperProfile = () => {
  const { id } = useParams();
  const developer = useSelector((state) =>
    state.developers.list.find((dev) => dev.id === id)
  );

  if (!developer) return <p>Developer not found</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={developer.avatar} alt={developer.name} className="w-24 h-24 rounded-full" />
      <h1 className="text-2xl font-bold mt-4">{developer.name}</h1>
      <p className="text-gray-700 mt-2">{developer.bio}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {developer.skills.map(skill => (
            <span key={skill} className="bg-blue-100 px-3 py-1 rounded">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Blogs</h2>
        <ul className="mt-2 space-y-2">
          {developer.blogs.map((blog) => (
            <li key={blog.id}>
              <h3 className="font-bold">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.date}</p>
              <p>{blog.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Social Links</h2>
        <ul className="list-disc list-inside">
          {developer.socials.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperProfile;
