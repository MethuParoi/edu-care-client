import Button from "../../../components/ui/Button";
import { useState } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import { useFetchApplication } from "../../../utils/fetchReview";
import ManageAppliedApplicationRow from "../../../components/admin-dashboard/manage-application/ManageAppliedApplicationRow";
import Modal from "../../../components/admin-dashboard/manage-application/Modal";
import FeedbackModal from "../../../components/admin-dashboard/manage-application/FeedbackModal";

const ManageAppliedApplications = () => {
  const { isLoading, Application, error, refetch } = useFetchApplication();
  const [applicationDetail, setApplicationDetail] = useState({});
  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        Manage Applied Applications
      </h1>

      {!isLoading && Application?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          Not found!
        </h2>
      )}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      {/* table */}
      {Application?.length > 0 && (
        <div className="w-[90%] xl:max-w-[1150px] mx-auto  overflow-x-scroll max-h-[600px] overflow-y-auto mb-20 relative">
          <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1100px] md:w-[90%] xl:w-[1100px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl top-0 sticky z-10">
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              University
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Scholarship
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Applicant
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Status
            </p>
            {/* <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Rating
            </p> */}
          </div>

          <div className="">
            {Application.map((application) => (
              <ManageAppliedApplicationRow
                key={application._id}
                application_id={application._id}
                university={application.universityName}
                scholarship={application.scholarshipCategory}
                applicant={application.userName}
                status={application.application_status}
                setApplicationDetail={setApplicationDetail}
                refetch={refetch}

                // refetchDetail={refetchDetail}
                // setMeal_id={setMeal_id}
              />
            ))}
          </div>

          {/* modal */}
          <Modal applicationDetail={applicationDetail} />
          <FeedbackModal />
        </div>
      )}

      {/* upcoming meal modal */}
    </div>
  );
};

export default ManageAppliedApplications;
