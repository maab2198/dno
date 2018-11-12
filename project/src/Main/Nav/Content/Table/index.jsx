import React, { Component } from 'react';
import axios from 'axios';
import Record from "../Record";
 
class Table extends Component {
  constructor (props) {
    super(props) 
    this.state={
      show:true
    }

    this.renderCols = this.renderCols.bind(this.props.path)
    
  }

  deleteTable(e) {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/delete_table/' + this.props.db.database+"/"+ this.props.table    , {
      method: 'delete'
    })
   .then(this.setState({
     show:false
   }))
  }



  // getTable(e) {
  //   axios.get(window.baseUrl +'/laba_inf_tex/api/v1.0/' + this.props.db.database +"/get_table/" + this.props.table)
  //   .then(response => console.log(response))
  //   .then(()=> this.selectLoad())
  //   .then(()=> this.importClick())
  // }

  createTable() {
    axios.post(window.baseUrl +'/laba_inf_tex/api/v1.0/' + this.state.tech +"/create_table/" )
    .then(response => console.log(response))
    .then(()=> this.selectLoad())
    .then(()=> this.importClick())
  }


  renderCols(path){
    var a = [];
    for (var item in path.columns){
      a.push(<td>{path.columns[item]}</td>);
    }
    return a

  }

  renderRows(path){
    var a = [];
    for (var arr in path.records){
      var b = []
      {
        path.records[arr].forEach(
          function(element) {
            // console.log(element);
            b.push(<td>{element}</td>)
        })
      }
      
      a.push(<Record
      db = {this.props.db.database}
      id = {arr}
      table = {this.props.table}
      list = {b}
      >
    
      </Record>)
    }

    return a

  }
    render() {
       return (
         <div>
         {this.state.show&&
         <div>
           <button class="delTable" onClick={this.deleteTable.bind(this)}>Delete</button>
         <table>

             <caption>{this.props.table}</caption>
           <tbody>
             <tr>
              {this.renderCols(this.props.path)}
             </tr>
            
             {this.renderRows.call(this,this.props.path)}
             
      
            {/* {this.props.db.tables && this.props.db.tables.map((item) => (
                <table>
                   <tr>{item}</tr>
                   

                 </table>
                 ))}  
            */}
         
            
          
            </tbody>
          
    
          </table>
            
            </div>
          }
            </div>
        );
          
      }
    
    
    }
    
    export default Table;
    