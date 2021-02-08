import styles from './PageHeader.module.css'
import Button from '../../components/Button';

function PageHeader(props) {
  const { title, totalJobs = 0 } = props;

  return (
    <div id="PageHeader" className={styles.header}>
      <div className={styles.left}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{`${totalJobs} listings`}</span>
      </div>
      <div className={styles.right}>
        <Button>Add Job</Button>
      </div>
    </div>
  );
}

export default PageHeader;