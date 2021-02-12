import EditJobForm from '../patterns/Forms/EditJobForm';
// import { useLocation } from 'react-router-dom';

function EditListing({ onSubmit = () => { }, currentJob = {} }) {

  return (
    <div id="EditListing">
      <EditJobForm type="Edit" currentJob={currentJob} onSubmit={onSubmit} />
    </div>
  );
}

export default EditListing;