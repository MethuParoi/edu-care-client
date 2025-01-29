const Modal = ({ applicationDetail }) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">University Details</h3>
        <p className="py-4">
          Applied university: {applicationDetail?.universityName}
        </p>
        <p className="py-4">Applied Degree: {applicationDetail?.degree}</p>
        <p className="py-4">
          Applied Scholarship: {applicationDetail?.scholarshipCategory}
        </p>
      </div>
    </dialog>
  );
};

export default Modal;
