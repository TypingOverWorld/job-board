import PageHeader from '../patterns/PageHeader/PageHeader';
import JobListings from '../patterns/JobListings/JobListings';

function ViewListings(props) {
  const {title, jobs = [], setJobs } = props;
  return (
    <div id="viewListings">
      <PageHeader title={title} totalJobs={jobs.length} setJobs={setJobs} />
      <JobListings jobs={jobs} setJobs={setJobs}/>
    </div>
  );
}

export default ViewListings;