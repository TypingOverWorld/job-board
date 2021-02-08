import PageHeader from '../patterns/PageHeader/PageHeader';
import JobListings from '../patterns/JobListings/JobListings';

function ViewListings(props) {
  const {title, jobs = []} = props;
  return (
    <div id="viewListings">
      <PageHeader title={title} totalJobs={jobs.length}/>
      <JobListings jobs={jobs}/>
    </div>
  );
}

export default ViewListings;