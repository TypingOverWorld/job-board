import styles from './JobListings.module.css';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

function JobListings({ jobs }) {
  const categories = ["Job Title", "Posted", "Sponsorship", "Status", ""];
  const history = useHistory();

  function handleSubmit(...args) {
    let job = { ...args };
    history.push('./edit-listing', { params: job })
  };

  return (
    <div id="jobListings" className={styles.jobListings}>
      <div className={styles.listingHeader}>
        {categories.map((category) =>
          <span className={styles.categories}>
            {category}
          </span>
        )}
      </div>
      {jobs.map(({ title, location, posted, sponsorship, status, id }) =>
        <div className={styles.listingContent} >
          <span className={styles.listingText}>
            {title}
            <div className={styles.listingLocation}>
              {location}
            </div>
          </span>
          <span className={styles.listingText}>
            {posted}
          </span>
          <span className={styles.listingText}>
            {sponsorship}
          </span>
          <span className={styles.listingText}>
            {status}
          </span>
          <span className={styles.listingText}>
            <Button
              onClick={handleSubmit({ title, location, posted, sponsorship, status, id })}
              type="secondary">
              Edit
            </Button>
          </span>
        </div>
      )
      }
    </div >
  );
}

export default JobListings;