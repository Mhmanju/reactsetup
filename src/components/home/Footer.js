import React from "react";
import {
  AppBar,
  Box,
  Divider,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  fix: theme.mixins.toolbar,
  root: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    borderTop: `5px solid ${theme.palette.secondary.main}`
  }
}));
export default () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Footer1 />
      <hr />
      <Footer2 />
    </Box>
  );
};

const Footer1 = () => {
  return <Box>h</Box>;
};

const Footer2 = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <small style={{ width: "100%", textAlign: "center" }}>
          All rights Reserverd
        </small>
      </Toolbar>
    </AppBar>
  );
};
