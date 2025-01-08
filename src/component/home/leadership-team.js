import React from "react";
import "./../css/LeadershipTeam.css";

const LeadershipTeam = ({ siteData }) => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/60?text=No+Image"; // Replace with a fallback placeholder image
    e.target.onerror = null; // Prevent infinite error loop
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container">
        <div
          style={{
            textAlign: "left",
            fontSize: "1.5rem",
            fontWeight: "450",
            color: "white",
            // marginTop:"20px"
          }}
        ><br></br>
          People Solutions Leadership Team
        </div>
        <div className="leadership-team-container">
          <div className="leadership-team-row">
            {siteData?.leadershipTeam?.map((data, index) => (
              <div className="leadership-team" key={index}>
                <a href="#" className="leadership-team-item">
                  <img
                    className="leadership-team-icon"
                    src={data?.image}
                    alt={data?.name}
                    onError={handleImageError}
                  />
                  <div className="leadership-team-text">
                    <span className="leadership-team-name">{data?.name}</span>
                    <span className="leadership-team-designation">
                      {data?.desigination}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
