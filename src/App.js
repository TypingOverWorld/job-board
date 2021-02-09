import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import ViewListings from './pages/ViewListings';
import EditListing from './pages/EditListing';
import AddListing from './pages/AddListing';

const userProfile = {
  name: "Alysha Buselt",
  role: "UX Developer",
  image: "https://avatars.githubusercontent.com/u/77640800"
}

const jobListings = [
  { id: 1, title: "Product Manager", location: "Austin, TX", posted: "10/04/2020", sponsorship: "Free", status: "Open" },
  { id: 2, title: "CEO", location: "Austin, TX", posted: "12/30/2020", sponsorship: "Sponsored", status: "Paused" },
  { id: 3, title: "Software Engineer", location: "Seattle, WA", posted: "11/18/2020", sponsorship: "Free", status: "Closed" }
];


function App() {
  const [jobs, setJobs] = useState(jobListings);
  const editJobArray = (jobs, id, title, location, sponsorship, status) => {
    // Find the job
    const jobIndex = jobs.findIndex(job => job.id === id);
    let newArray = [...jobs];
    newArray[jobIndex] = { ...newArray[jobIndex], id, title, location, sponsorship, status }
    return newArray;
  };

  return (
    <Router>
      <div className={styles.appContainer}>
        <header className={styles.header}>
          <Navbar userProfile={userProfile} />
        </header>
        <main className={styles.container}>
          <Switch>
            <Route path="/add-listing">
              <AddListing onSubmit={(newJob) => setJobs([...jobs, newJob])} />
            </Route>
            <Route path="/edit-listing">
              <EditListing onSubmit={(args) => setJobs(editJobArray(jobs, ...args))} />
            </Route>
            <Route path="/">
              <ViewListings title="Jobs" jobs={jobs} setJobs={setJobs} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
