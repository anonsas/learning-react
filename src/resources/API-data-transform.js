import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const url = './data.json';

  const fetchUsers = (url) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;

        const dataTransform = data?.map((student) => {
          const full_name = `${student.first_name} ${student.last_name}`;
          const classes = `This student takes ${student.classes.join(', ')}`;
          const totalScore = student.scores.reduce((total, curr) => (total += curr), 0);

          return {
            full_name: full_name,
            age: student.age,
            classes: classes,
            totalScore: totalScore,
          };
        });

        setStudents(dataTransform);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    fetchUsers(url);
  }, []);

  console.log(students);

  return <div className="App"></div>;
}

export default App;

const students = [
  {
    first_name: 'Antonel',
    last_name: 'Moreno',
    age: 27,
    classes: ['english', 'science', 'math'],
    scores: [104, 105, 203, 102, 403],
  },
  {
    first_name: 'Pablo',
    last_name: 'Latino',
    age: 30,
    classes: ['english', 'science', 'math'],
    scores: [104, 105, 203, 102, 403],
  },
  {
    first_name: 'Leon',
    last_name: 'Musk',
    age: 45,
    classes: ['english', 'science', 'math'],
    scores: [104, 105, 203, 102, 403],
  },
];
