import React from "react";
import { Typography, Divider } from "@material-ui/core";
import "../css/main.css";

const Logo = () => {
  return (
    <div>
      <Typography color="secondary" className="logoTitle">
        v.y
      </Typography>
      <Divider className="divider" light="true"></Divider>
      <Typography
        color="secondary"
        variant="h4"
        paragraph="true"
        align="center"
      >
        dev.young
      </Typography>
    </div>
  );
};

export default Logo;
