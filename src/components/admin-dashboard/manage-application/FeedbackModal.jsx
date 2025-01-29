import { toast } from "react-toastify";

const FeedbackModal = () => {
  return (
    <dialog id="feedback" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="font-bold text-lg">Feedback</h3>
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded-md"
            placeholder="Enter feedback here..."
          ></textarea>
          <button
            onClick={() => {
              toast.success("Feedback submitted successfully");
              document.getElementById("feedback").close();
            }}
            className="btn btn-md btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default FeedbackModal;
