import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ReviewCard = ({ review, userMail, scholarshipId, id }) => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className={`card w-[350px] card-side bg-base-100 shadow-xl ${
        scholarshipId != id ? "hidden" : ""
      }`}
    >
      <figure>
        <img
          className="w-12 h-12 rounded-full border-2 border-accent object-cover"
          src={user?.photoURL}
          alt="user"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{review}</h2>
        <p>{userMail}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
