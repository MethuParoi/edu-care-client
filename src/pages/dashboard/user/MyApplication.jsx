import { useState } from "react";

import Loader from "../../../components/ui/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useFetchMyApplication } from "../../../utils/fetchPayments";

import MyApplicationRow from "../../../components/user-dashboard/my-application/MyApplicationRow";

const MyApplication = () => {
  const { isLoading, myApplication, error, refetch } = useFetchMyApplication();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        My Application
      </h1>

      {/* loading state */}
      {loading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      {!isLoading && myApplication?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32 self-center">
          No Application found!
        </h2>
      )}
      {/* table */}
      {myApplication?.length > 0 && (
        <div className="w-[90%] xl:max-w-[1100px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
          <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1100px] md:w-[90%] xl:w-[1100px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
            <p></p>
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              University Name
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Address
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Subject Category
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Status
            </p>
          </div>

          <div className="">
            {myApplication.map((uni, index) => (
              <MyApplicationRow
                key={index}
                status={uni.application_status}
                uni_id={uni._id}
                uni_img={uni.mealImage}
                uni_name={uni.universityName}
                uni_address={uni.address}
                subject_category={uni.subjectCategory}
                degree={uni.degree}
                application_fee={uni.application_fee}
                service_charge={uni.service_charge}
              />
            ))}

            {/* {allPayment.map((payment) =>
              payment?.payment?.map((singlePayment) => (
                <PaymentRow
                  key={singlePayment._id}
                  email={singlePayment.email}
                  transactionId={singlePayment.transactionId}
                  amount={singlePayment.amount}
                  date={singlePayment.date}
                />
              ))
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplication;
