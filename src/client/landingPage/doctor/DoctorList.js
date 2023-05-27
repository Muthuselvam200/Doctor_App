import React, { useState } from "react";
import doctors from "./doctors";
import "./doctorDetails.css";

// DoctorCard component
const DoctorCard = ({ doctor, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="card">
        <h3>
          {index}. {doctor.name}
        </h3>
        <p>Specialization: {doctor.specialization}</p>
        <p>Contact: {doctor.contact.email}</p>

        {showDetails && (
          <>
            <p>Date of Birth: {doctor.dob}</p>
            <p>Gender: {doctor.gender}</p>
            <p>Address: {doctor.address}</p>
            <p>Undergraduate: {doctor.education.undergraduate}</p>
            <p>Postgraduate: {doctor.education.postgraduate}</p>
          </>
        )}

        <button onClick={toggleDetails}>{showDetails ? "Hide" : "View"}</button>
      </div>
    </>
  );
};

const DoctorList = () => {
  return (
    <>
      <div className="grid-doctor">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} index={index + 1} />
        ))}
      </div>
    </>
  );
};

export default DoctorList;
