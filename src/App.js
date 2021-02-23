import { useState } from 'react';
import { connect } from "react-redux";
import './App.css';

function App({text2}) {
  const [text, setText] = useState('initial state text');

  const handleTextChange = () => {
    setText('new state text')
  }

  console.log('APP', text2)

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

export default connect(
  mapStateToProps
)(App);
