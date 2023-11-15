import React from 'react';

const Languages = ({ languages }) => {
  return (
    <section>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;