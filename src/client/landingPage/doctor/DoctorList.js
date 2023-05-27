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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSort = (event) => {
    const option = event.target.value;
    setSortOption(option);
  };

  const sortedDoctors = [...doctors];

  if (sortOption === "Name") {
    sortedDoctors.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "Specialization") {
    sortedDoctors.sort((a, b) =>
      a.specialization.localeCompare(b.specialization)
    );
  }
  return (
    <>
      <div className="doctors-list">
        <input
          type="text"
          placeholder="Search doctors..."
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          className="search-input"
        />
        <select
          value={sortOption}
          onChange={handleSort}
          className="sort-select"
        >
          <option value="">Sort By</option>
          <option value="Name">Name</option>
          <option value="Specialization">Specialization</option>
        </select>
      </div>
      <div className="grid-doctor">
        {sortedDoctors
          .filter((doctor) => {
            if (searchQuery === "") {
              return doctor;
            } else if (
              doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              doctor.specialization
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              return doctor;
            }
          })
          .map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index + 1} />
          ))}
      </div>
    </>
  );
};

export default DoctorList;
