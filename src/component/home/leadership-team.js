import React from "react";
import Headings from "../shared/heading";
import "./../css/LeadershipTeam.css";

const LeadershipTeam = ({ siteData }) => {
  const handleImageError = (e) => {
    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"; // Replace with the path to your avatar icon
    e.target.onerror = "null"; // Prevent infinite loop in case avatar is not found
  };

  return (
    <>
      <Headings text="HR Leadership Team" />
      <div className="leadership-team-container">
        <div className="leadership-team-row">
          {siteData?.leadershipTeam?.map((data, index) => {
            return (
              <div className="leadership-team" key={index}>
                <a href="#" className="leadership-team-item">
                  <img
                    className="leadership-team-icon"
                    // src={data?.image}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"
                    alt={data?.name}
                    onError={handleImageError}
                  />
                  <span className="leadership-team-name">{data?.name}</span>
                  <span className="leadership-team-designation">{data?.desigination}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeadershipTeam;
