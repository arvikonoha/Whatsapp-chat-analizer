import { makeStyles } from "@material-ui/core";

export default makeStyles({
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,
    opacity: 0,
  },
  dropfileContainer: {
    backgroundColor: "#eee",
    cursor: "pointer",
    display: "flex",
    position: "relative",
    textAlign: "center",
    padding: "8px",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    width: "90%",
    height: "250px",
    border: "dashed #a1a1a1 3px",
  },
  fileInputLabel: {
    cursor: "pointer",
    lineHeight: "2rem",
    fontSize: "24px",
    color: "#a1a1a1",
  },
  dropfileContainerActive: {
    border: "dashed #636363 3px",
  },
  fileInputLabelActive: {
    color: "#636363",
  },
  dropfileContainerErrors: {
    border: "dashed #c03b36 3px",
  },
  fileInputLabelErrors: {
    color: "#c03b36",
  },
  fileError: {
    textAlign: "left",
    margin: "8px auto",
    width: "90%",
    fontSize: "14px",
    color: "#c03b36",
  },
});
