import { useState } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import ViewListings from './pages/ViewListings';

const userProfile = {
  name: "Alysha Buselt",
  role: "UX Developer",
  image: "https://avatars.githubusercontent.com/u/77640800"
}

const jobListings = [
  { title: "Product Manager", location: "Austin, TX", posted: "10/04/2020", sponsorship: "Free", status: "Open" },
  { title: "CEO", location: "Austin, TX", posted: "12/30/2020", sponsorship: "Sponsored", status: "Paused" },
  { title: "Software Engineer", location: "Seattle, WA", posted: "11/18/2020", sponsorship: "Free", status: "Closed" }
];


function App() {
  const [jobs, setJobs] = useState(jobListings);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Navbar userProfile={userProfile} />
      </header>
      <main className={styles.container}>
        <ViewListings title="Jobs" jobs={jobs} />
      </main>
    </div>
  );
}

export default App;
