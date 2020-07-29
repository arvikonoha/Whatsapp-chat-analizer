import React, { useContext } from "react";
import FileUpload from "../FileUpload/FileUpload";
import MessagesContext from "../../MessagesState/MessagesContext";
import SearchInput from "../SearchInput/SearchInput";
import useStyles from "./homeStyles";
import { Container, Grid, Paper } from "@material-ui/core";
import SearchResultsMeta from "../SearchResultsMeta/SearchResultsMeta.jsx";
import SearchResults from "../SearchResults/SearchResults";

function Home() {
  let classes = useStyles();
  let { file } = useContext(MessagesContext);
  if (file)
    return (
      <Container>
        <Paper className={classes.root}>
          <SearchInput />
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <SearchResultsMeta />
          </Grid>
        </Paper>
        <SearchResults />
      </Container>
    );
  else return <FileUpload />;
}

export default Home;
