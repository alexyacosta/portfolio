import React from "react";

export default props => (
  <>
    Main view{" "}
    <button value={1} onClick={props.clickBtn}>
      View 1
    </button>{" "}
    <button value={2} onClick={props.clickBtn}>
      View 2
    </button>{" "}
  </>
);