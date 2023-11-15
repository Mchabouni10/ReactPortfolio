import React from 'react';

function MyJobs(props) {
  return (
    <div>
      <h2>Job Experience</h2>
      <ul>
        {props.jobExp.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> at {job.company}, {job.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyJobs;