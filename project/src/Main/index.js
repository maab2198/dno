import React, { Component } from 'react';
import style from "./style.scss";
import Nav from "./Nav";


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
    