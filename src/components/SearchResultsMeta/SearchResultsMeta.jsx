import React, { useContext } from "react";
import MessagesContext from "../../MessagesState/MessagesContext";
import { Chip, Grid } from "@material-ui/core";

function SearchResultsMeta() {
  let {
    query: { has, group },
    results,
    textQuery,
  } = useContext(MessagesContext);
  function handleDelete() {
    textQuery("");
  }
  return (
    <>
      <Grid item xs={12}>
        <Chip
          style={{ marginRight: "8px" }}
          label={`${has || "select * from results"}`}
          onDelete={has && handleDelete}
          color="primary"
        />
        <Chip label={`${group}`} color="secondary" />

        <p
          style={{ fontSize: 18, textAlign: "right" }}
        >{`${results.length} results`}</p>
      </Grid>
    </>
  );
}

export default SearchResultsMeta;
