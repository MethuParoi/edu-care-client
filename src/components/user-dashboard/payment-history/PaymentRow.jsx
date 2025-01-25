const PaymentRow = ({ status, transactionId, amount, date }) => {
  return (
    <div className="grid grid-cols-4 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
      <p className="text-md xl:text-md font-medium text-gray-300 ">
        {transactionId}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {amount}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {date}
      </p>
      <p className="text-lg xl:text-xl font-medium text-green-400 line-clamp-1">
        {status}
      </p>
    </div>
  );
};

export default PaymentRow;
