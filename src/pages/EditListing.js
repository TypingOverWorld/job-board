import EditJobForm from '../patterns/Forms/EditJobForm';
// import { useLocation } from 'react-router-dom';

function EditListing({ onSubmit = () => { } }) {
  // const locationHistory = useLocation();
  // const jobToEdit = locationHistory.state.params;
  const jobToEdit = {};
  return (
    <div id="EditListing">
      <EditJobForm type="Edit" jobToEdit={jobToEdit} onSubmit={onSubmit} />
    </div>
  );
}

export default EditListing;