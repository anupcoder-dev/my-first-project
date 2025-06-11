// src/pages/DeveloperDirectory.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDevelopers } from '../features/developers/developersSlice';
import DeveloperCard from '../features/developers/DeveloperCard';

const DeveloperDirectory = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.developers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const filtered = list.filter(dev => {
    return (
      dev.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? dev.skills.includes(filter) : true)
    );
  });

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search developer..."
          className="border p-2 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2" onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Skills</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="Vue">Vue</option>
          {/* Add more as needed */}
        </select>
      </div>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(dev => <DeveloperCard key={dev.id} developer={dev} />)}
        </div>
      )}
    </div>
  );
};

export default DeveloperDirectory;