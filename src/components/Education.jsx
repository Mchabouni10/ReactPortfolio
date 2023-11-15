import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}:</strong>  {edu.school}, {edu.year}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;