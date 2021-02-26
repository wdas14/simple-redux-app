import { useState } from 'react';
import { connect } from "react-redux";
import './App.css';

function App({text2, setText2}) {
  const [text, setText] = useState('initial state text');

  const handleTextChange = () => {
    setText('new state text')
    setText2('new state text 2')
  }

  console.log('APP', setText2)

  return (
    <div className="App">
      <div className="textContainer">
        {text}<br />
        {text2}
      </div>
      <button onClick={handleTextChange}>Click</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text2: state.text2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setText2: () => dispatch({ type: "UPDATE_TEXT" }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
