import JobForm from '../patterns/Forms/JobForm';

function AddListing({ onSubmit = () => { } }) {
  return (
    <div id="AddListing">
      <JobForm type="Add" onSubmit={onSubmit} />
    </div>
  );
}

export default AddListing;