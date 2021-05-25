import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    workerMessage: null
  };

  componentDidMount() {
    this.worker = new Worker("/test.worker.js");

    this.worker.addEventListener("message", ({ data }) => {
      this.setState({ workerMessage: data });
    });
  }

  componentWillUnmount() {
    this.worker.terminate();
  }

  render() {
    return (
      <div style={styles}>
        <Hello name="Web Worker" />
        <h2>Received from worker: {this.state.workerMessage}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
