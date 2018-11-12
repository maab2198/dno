import React, { Component } from 'react';
import style from "./style.scss";
import Table from "./Table";

 
class Content extends Component {
  constructor (props) {
    super(props) 
  //  var parse = JSON.parse(this.props.db);
    this.state = {
       db: this.props.db,
    //   p: parse
    };
    console.log(this.props)
    console.log(this.state)
    //this.renderTD = this.renderTD.bind(this,this.props.db.tables)
    
  }

  renderTD(table){
    var a = [];
    for (var item in table){
      a.push(
      <Table key={item}
            db= {this.props.db}
            table = {item}
            path = {this.props.db.tables[item]}
      >

      </Table>);
    }
    return a

  }
    render() {
       return (
         <div>
           <h2>{this.props.db.database}</h2>
         <div  className="content"> 
              
              {/* <button>Create Table</button> */}
            {this.props.db.tables &&  this.renderTD.call(this,this.props.db.tables)}
        

          </div>
          </div>
        );
      }
    
    
    }
    
    export default Content;
    