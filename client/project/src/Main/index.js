import React, { Component } from 'react';
import style from "./style.scss";
import Nav from "./Nav";

const params = new URLSearchParams(window.location.search);
const baseUrl = params.has('baseUrl') ? params.get('baseUrl') : 'http://localhost:5000';
window.baseUrl = baseUrl;

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
    