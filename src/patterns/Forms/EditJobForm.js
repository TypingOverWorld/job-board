import { useState } from 'react';
import styles from './JobForm.module.css'
import cx from 'classnames';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

function EditJobForm(props) {
  const { currentJob = {}, type, className: customClassName, onSubmit = () => { } } = props;
  const className = cx(styles.form, styles[type], {
    [customClassName]: !!customClassName
  });
  const history = useHistory();
  // couldn't deconstruct all props without have duplicated title, location, sponsorship, and status
  const { id, posted } = currentJob;
  const [title, setTitle] = useState(currentJob.title);
  const [location, setLocation] = useState(currentJob.location);
  const [sponsorship, setSponsorship] = useState(currentJob.sponsorship);
  const [status, setStatus] = useState(currentJob.status);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ id, title, location, sponsorship, status, posted });
    history.push('/');
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <section className={styles.header}>
        <h1 className={styles.title}>
          Edit job
        </h1>
        <p className={styles.text}>
          Edit the information for your job listing.
        </p>
      </section>
      <section className={styles.selections}>
        <label className={styles.label} for="jobTitle">
          <div>Job Title</div>
          <div className={styles.description}>What is the name of the role?</div>
        </label>
        <input className={styles.input} type="text" name="title" id="jobTitle" value={title} placeholder={title} onChange={(e) => setTitle(e.target.value)} />

        <label className={styles.label} for="jobLocation">
          <div>Location</div>
          <div className={styles.description}>Where is this job?</div>
        </label>
        <input className={styles.input} type="text" name="location" id="jobLocation" value={location} placeholder={location} onChange={(e) => setLocation(e.target.value)} />

        <label className={styles.label} for="sponsorship">
          <div>Sponsorship</div>
          <div className={styles.description}>Do you want to promote this job?</div>
        </label>
        <select className={styles.select} name="sponsorship" id="sponsorship" value={sponsorship} onChange={(e) => setSponsorship(e.target.value)} >
          <option value="Free">Free</option>
          <option value="Sponsored">Sponsored</option>
        </select>

        <label className={styles.label} for="status">
          <div>Status</div>
          <div className={styles.description}>Are you ready to make this job listing public?</div>
        </label>
        <select className={styles.select} name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} >
          <option value="Open">Open</option>
          <option value="Paused">Paused</option>
          <option value="Closed">Closed</option>
        </select>

      </section >
      <section className={styles.submit}>
        <Button type="secondary"
          onClick={() => history.push('/')}>
          Cancel
        </Button>
        <Button>Save</Button>
      </section>
    </form >
  );
}

export default EditJobForm;