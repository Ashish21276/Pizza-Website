import React from "react";

function Spinner() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div
          className="spinner-border"
          style={{ height: "200px", width: "200px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;
