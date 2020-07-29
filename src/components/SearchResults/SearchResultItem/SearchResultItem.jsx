import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: "1px solid #f8f8f8",
    marginBottom: theme.spacing(1),
  },
  blogBody: {
    whiteSpace: "pre-line",
    lineHeight: "1.8rem",
    color: "#403f3f",
  },
}));

function SearchResultItem({
  result: { author, createdAtDate, body, createdAtTime },
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} square>
      <h3
        color="primary"
        style={{ textAlign: "right", margin: "4px 0", color: "#403f3f" }}
      >
        {author}
      </h3>
      <p style={{ textAlign: "right", margin: "2px 0", color: "#666363" }}>
        {moment(createdAtDate, "MM-DD-YY").format("MMM DD, YYYY")}
      </p>
      <p style={{ textAlign: "right", margin: "2px 0", color: "#666363" }}>
        {createdAtTime}
      </p>

      <p className={classes.blogBody}>{body}</p>
    </Paper>
  );
}

export default SearchResultItem;
