import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Container,
  Grid,
  GridList,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";

import { PhotoAlbum } from "@material-ui/icons";

import ResourceList from "./ResourceList.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: "20px",
  },
  button: {
    marginRight: "20px",
  },
  icon: {
    marginRight: "15px",
  },
}));

const App = () => {
  const classes = useStyles();
  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <PhotoAlbum className={classes.icon} />
          <Typography variant="h6"> Most OG random content creator</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => setResourceName("todos")}
            >
              Todos
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setResourceName("posts")}
            >
              Posts
            </Button>
            <ResourceList resourceName={resourceName} />
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
