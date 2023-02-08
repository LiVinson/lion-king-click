import React from "react";
import "./Wrapper.css";

interface Props {
    children: any;
}
const Wrapper = (props: Props) => (
<div className="wrapper-custom container-fluid">
    {props.children}
</div>
);

export default Wrapper;

