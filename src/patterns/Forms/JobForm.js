import { useState } from 'react';
import styles from './JobForm.module.css'
import cx from 'classnames';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

function JobForm(props) {
  const { type, className: customClassName, onSubmit = () => { } } = props;
  const className = cx(styles.form, styles[type], {
    [customClassName]: !!customClassName
  });
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [sponsorship, setSponsorship] = useState('Free');
  const [status, setStatus] = useState('Open');

  function handleSubmit(event) {
    event.preventDefault();
    // ToDo -- break date into separate function
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) { dd = `0${dd}` };
    if (mm < 10) { mm = `0${mm}` };
    const formattedDate = mm + '/' + dd + '/' + yyyy;
    onSubmit({ id: uuid(), title, location, sponsorship, status, posted: formattedDate });
    history.push('/');
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <section className={styles.header}>
        <h1 className={styles.title}>
          Add a new job
        </h1>
        <p className={styles.text}>
          Fill out the information for your new job listing.
        </p>
      </section>
      <section className={styles.selections}>
        <label className={styles.label} for="jobTitle">
          <div>Job Title</div>
          <div className={styles.description}>What is the name of the role?</div>
        </label>
        <input className={styles.input} type="text" name="title" id="jobTitle" value={title} placeholder="e.g. Software Engineer" onChange={(e) => setTitle(e.target.value)} />

        <label className={styles.label} for="jobLocation">
          <div>Location</div>
          <div className={styles.description}>Where is this job?</div>
        </label>
        <input className={styles.input} type="text" name="location" id="jobLocation" value={location} placeholder="e.g. Chicago, IL" onChange={(e) => setLocation(e.target.value)} />

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
        <Button type="secondary" onClick={() => history.push('/')}>Cancel</Button>
        <Button>{type} Job</Button>
      </section>
    </form >
  );
}

export default JobForm;