import React, { Component } from 'react';
import style from "./style.scss";
import Nav from "./Nav";

const params = new URLSearchParams(window.location.search);
// const baseUrl = params.has('baseUrl') ? params.get('baseUrl') : 'http://0.0.0.0:8000';
window.baseUrl = "http://0.0.0.0:8000";

class Main extends Component {
    render() {
        return (
          <div className={style.main}>
       
          <Nav/>
          </div>
        );
      }
    
    
    }
    
    export default Main;
    