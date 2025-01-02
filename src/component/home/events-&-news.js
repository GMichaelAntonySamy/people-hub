import React, { useState } from "react";
import "./../css/TopLinks.css";
import QuickLinks from "./quick-links";
import TopResources from "./top-resources";
import Events from "./events";
import News from "./news";

const EventNews = ({ siteData }) => {
  const [activeTab, setActiveTab] = useState("news");

  const tabs = [
    { id: "news", label: "News", component: <News siteData={siteData} /> },
    { id: "events", label: "Events", component: <Events siteData={siteData} /> },
  ];

  return (
    <div className="top-links-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{ cursor: "pointer" }}
            className={`tab-button ${activeTab === tab.id ? "active" : ""} heading-text`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map(
          (tab) => activeTab === tab.id && <div key={tab.id}>{tab.component}</div>
        )}
      </div>
    </div>
  );
};

export default EventNews;
