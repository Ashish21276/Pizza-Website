import React, { useState } from "react";
import { useDispatch } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Switch() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(
    JSON.parse(localStorage.getItem("mode")) ? false : true
  );

  const handleOnClick = () => {
    dispatch({
      type: "setMode",
    });
    setFlag(!flag);
  };

  return (
    <>
      <button className="btn btn-light" onClick={handleOnClick}>
        <WbSunnyIcon fontSize="large" />
      </button>
    </>
  );
}

export default Switch;
