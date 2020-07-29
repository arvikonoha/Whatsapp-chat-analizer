import React, { useContext } from "react";
import MessagesContext from "../../MessagesState/MessagesContext";
import { TextField, MenuItem, Grid } from "@material-ui/core";
import useStyles from "./searchInputStyles";

import { Autocomplete } from "@material-ui/lab";

function SearchInput() {
  let classes = useStyles();
  let {
    query: { group },
  } = useContext(MessagesContext);
  const groups = ["All", "Today", "This week", "This month"];
  const suggestions = [
    "Mandatory",
    "Exam",
    "Assignment",
    "Internship",
    "Announcement",
    "Circular",
    "Dear student",
    "Webinar",
  ];
  let { textQuery, changeGroup, file } = useContext(MessagesContext);

  function handleGroupChange(event) {
    event.preventDefault();
    changeGroup(event.target.value);
  }

  function handleQueryChange(event, value) {
    event.preventDefault();
    textQuery(value);
  }

  return (
    <>
      <h2>{file.name.replace("WhatsApp Chat with ", "")} group summary</h2>
      <p>Filter the the chats to get the info needed</p>
      <form>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              freeSolo
              autoHighlight
              id="search-message"
              onChange={handleQueryChange}
              options={suggestions}
              className={classes.inputFields}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search the chats"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-select-currency"
              select
              fullWidth
              label="Period"
              defaultValue={group}
              value={group}
              onChange={handleGroupChange}
              helperText="Choose a time frame of chats to query"
              className={classes.inputFields}
            >
              {groups.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default SearchInput;
