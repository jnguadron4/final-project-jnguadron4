import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface Project {
  id: number;
  name: string;
  description: string;
  images: string;
}

export default function Projects() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Projects queried from SQLite</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
