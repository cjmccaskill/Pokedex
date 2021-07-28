import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5>
        2021 © This site was built by{" "}
        <Link className='devlink' to="cjmccaskill.dev">CJ McCaskill</Link>
      </h5>
    </div>
  );
};
export default Footer;
