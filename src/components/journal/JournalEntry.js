import React from "react";

export const JournalEntry = () => {
  return (
    <div className="jornal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(https://static.dw.com/image/50460720_303.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          lorem asfa safafa asfasfasf aSFAFFA afaf
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>25</h4>
      </div>
    </div>
  );
};
