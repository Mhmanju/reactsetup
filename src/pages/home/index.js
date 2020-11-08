import { Box } from "@material-ui/core";
import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import Searchbar from "../../components/home/Searchbar";
import Logo from "../images/logo.png";
const HomePage = lazy(() => import("./HomePage"));

export default () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar logo={Logo} />
    <Searchbar />
    <Box flexGrow="1">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Box>
    <Footer />
  </Box>
);
