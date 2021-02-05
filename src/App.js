// import logo from './logo.svg';
//  import './App.css';
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMoivies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // axios.get이 항상 빠른 것은 아니기 때문에 CDM함수가 끝날 때 까지
    // JS에게 기다리라는 요청을 해야한다. >> async , await
  };

  componentDidMount() {
    this.getMoivies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩중 . . ." : "we are ready!"}</div>;
    //ComponentDidMount에서 data fetch, API로 부터 data fetch가 다 되면
    // we are ready 대신 movie 정보를 "map" 해서 render
  }
}

export default App;
