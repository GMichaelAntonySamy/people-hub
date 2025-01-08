import React from "react";
import Headings from "../shared/heading";
import "./../css/MostViewed.css";

const MostViewedPages = ({ siteData }) => {
  return (
    <>
      <Headings text="My Favorites" />
      <div className="most-viewed-container">
        <ul className="most-viewed-list">
          {siteData?.mostviewedPages?.map((data, index) => (
            <li className="most-viewed-item" key={index}>
              <a
                href={data?.link}
                target="_blank"
                className="most-viewed-link"
                rel="noreferrer"
              >
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MostViewedPages;
