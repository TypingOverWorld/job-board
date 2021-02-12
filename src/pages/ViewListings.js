import PageHeader from '../patterns/PageHeader/PageHeader';
import JobListings from '../patterns/JobListings/JobListings';

function ViewListings(props) {
  const { title, jobs = [], onEditClick = () => { } } = props;
  return (
    <div id="viewListings">
      <PageHeader title={title} totalJobs={jobs.length} />
      <JobListings jobs={jobs} onEditClick={onEditClick} />
    </div>
  );
}

export default ViewListings;