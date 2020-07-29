import React, { useContext, useState } from "react";
import messagesContext from "../../MessagesState/MessagesContext";
import useStyles from "./fileUploadStyles";

function FileUpload() {
  let { fileUpload } = useContext(messagesContext);
  let classes = useStyles();
  let [fileOver, setFileOver] = useState(false);
  let [fileError, setFileError] = useState("");

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function containerStyleResolver() {
    return fileOver
      ? `${classes.dropfileContainer} ${classes.dropfileContainerActive}`
      : fileError.length
      ? `${classes.dropfileContainer} ${classes.dropfileContainerfileError}`
      : classes.dropfileContainer;
  }

  function labelStyleResolver() {
    return fileOver
      ? `${classes.fileInputLabel} ${classes.fileInputLabelActive}`
      : fileError.length
      ? `${classes.fileInputLabel} ${classes.fileInputLabelfileError}`
      : classes.fileInputLabel;
  }

  function resolveFile(file) {
    console.log(file);
    if (!file.name.endsWith(".txt")) fileReject();
    else fileSubmit(file);
  }

  function fileSubmit(file) {
    setFileError("");
    fileUpload(file);
  }

  function fileReject() {
    setFileError("File format is not supported");
    setTimeout(() => setFileError([]), 3000);
  }

  return (
    <>
      <section
        className={containerStyleResolver()}
        onDragOver={(event) => {
          preventDefaults(event);
          if (!fileOver) setFileOver(true);
        }}
        onDragEnter={(event) => {
          preventDefaults(event);
        }}
        onDragLeave={(event) => {
          preventDefaults(event);
          if (fileOver) setFileOver(false);
        }}
        onDrop={(event) => {
          preventDefaults(event);
          let [submittedFile] = event.dataTransfer.files;
          setFileOver(false);
          resolveFile(submittedFile);
        }}
      >
        <input
          type="file"
          name="invoice-file"
          className={classes.fileInput}
          id="chat-file"
          onChange={(event) => {
            let [submittedFile] = event.target.files;

            resolveFile(submittedFile);
          }}
        />
        <label htmlFor="chat-file" className={labelStyleResolver()}>
          Click on this or drop file here to upload the file
        </label>
      </section>
      <p className={classes.fileError}>{fileError}</p>
    </>
  );
}

export default FileUpload;
