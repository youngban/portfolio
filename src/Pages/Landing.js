import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import Intro from "../Components/Intro";

const Landing = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header />
        <Logo />
        <Intro />
      </Grid>
    </Container>
  );
};

export default Landing;
