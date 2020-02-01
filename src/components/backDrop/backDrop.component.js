import React from "react";
import "./backdrop.styles.scss";

const backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;

export default backdrop;
