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
  const [currentJob, setCurrentJob] = useState(null);
  const editJobArray = ({ id, title, location, sponsorship, status }) => {
    // Find the job
    return jobs.map(j => {
      if (j.id === id) {
        return { ...j, id, title, location, sponsorship, status };
      }

      return j;
    });
  };

  return (
    <Router>
      <div className={styles.appContainer}>
        <header className={styles.header}>
          <Navbar userProfile={userProfile} />
        </header>
        <main className={styles.container}>
          <Switch>
            <Route path="/edit-listing">
              <EditListing currentJob={currentJob} onSubmit={(job) => setJobs(editJobArray(job))} />
            </Route>
            <Route path="/add-listing">
              <AddListing onSubmit={(newJob) => setJobs([...jobs, newJob])} />
            </Route>
            <Route path="/">
              <ViewListings onEditClick={setCurrentJob} title="Jobs" jobs={jobs} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
