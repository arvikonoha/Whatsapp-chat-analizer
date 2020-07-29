import React from "react";
import Home from "./components/Home/Home";
import MessagesState from "./MessagesState/MessagesState";

function App() {
  return (
    <MessagesState>
      <Home />
    </MessagesState>
  );
}

export default App;
