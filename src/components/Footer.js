import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5>
        2021 © This site was built by{" "}
        <a href="https://www.cjmccaskill.dev" className="devlink">
          CJ McCaskill
        </a>
      </h5>
    </div>
  );
};
export default Footer;
