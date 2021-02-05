// import logo from './logo.svg';
//  import './App.css';
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩중 . . ." : "we are ready!"}</div>;
    //ComponentDidMount에서 data fetch, API로 부터 data fetch가 다 되면
    // we are ready 대신 movie 정보를 "map" 해서 render
  }
}

export default App;
