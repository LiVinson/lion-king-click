import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
<div className="wrapper-custom container-fluid">
    {props.children}
</div>
);

export default Wrapper;

