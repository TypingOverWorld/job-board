import styles from './JobListings.module.css';
import Button from '../../components/Button';
function JobListings(props) {
  const categories = ["Job Title", "Posted", "Sponsorship", "Status", ""];
  return (
    <div id="jobListings" className={styles.jobListings}>
      <div className={styles.listingHeader}>
        {categories.map((category) =>
          <span className={styles.categories}>
            {category}
          </span>
        )}
      </div>
      {props.jobs.map(({ title, location, posted, sponsorship, status, edit }) =>
        <div className={styles.listingContent}>
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
            <Button type="secondary">{edit.text}</Button>
          </span>
        </div>
      )}
    </div>
  );
}

export default JobListings;