import { useState } from "react";

import Loader from "../../../components/ui/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useFetchAllPayment } from "../../../utils/fetchPayments";
import PaymentRow from "../../../components/user-dashboard/payment-history/PaymentRow";

const PaymentHistory = () => {
  const { isLoading, allPayment, error, refetch } = useFetchAllPayment();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        Payment History
      </h1>

      {/* loading state */}
      {loading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      {!isLoading && allPayment?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32 self-center">
          No Payments found!
        </h2>
      )}
      {/* table */}
      {allPayment?.length > 0 && (
        <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
          <div className="grid grid-cols-4 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              TransactionId
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Amount
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Date
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Status
            </p>
          </div>

          <div className="">
            {allPayment.map((payment, index) => (
              <PaymentRow
                key={index}
                status={payment.payment.status}
                transactionId={payment.payment.transactionId}
                amount={payment.payment.amount}
                date={payment.payment.date}
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

export default PaymentHistory;
