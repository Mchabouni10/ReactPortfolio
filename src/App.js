
import './App.css';
import Info from './models/Info';
import MyJobs from './components/MyJobs';
import Languages from './components/Languages';
import Education from './components/Education';
import MyImage from './models/MyImage'; 
import { useState } from 'react';

function App() {
  const [data, setData] = useState(Info)
  return (
    <div className="App">
      <h1>{data.name}</h1>
      <h2>{data.phone}</h2>
      <h2>{data.location}</h2>
      <h3>{data.email}</h3>
      <MyImage />
      <MyJobs jobExp={data.jobExp} />
      <Education education={data.education} />
      <Languages languages={data.languages} />
    </div>
  );
}

export default App;
