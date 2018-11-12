import React, { Component } from 'react';
import style from "./style.scss";
import axios from 'axios';
import Content from "./Content";


class Nav extends Component {
  constructor () {
    super() 
    this.state = {
      tech: 'select',
      list: ['select'],
      create: "new",
      db: "none",
      show: false
    };
    this.importClick = this.importClick.bind(this)
   // this.createClick = this.createClick.bind(this)
    this.selectLoad = this.selectLoad.bind(this)
    this.selectLoad();
  
  }


  selectLoad() {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/get_DBs')
      .then(response => {return response.json()})
      .then(data => this.setState({list : data["DB"]}))
      .then(() => this.setState({
        tech: this.state.list[0]
      }))
     
  }
  createName(e){
    this.setState({
      create: e.target.value
    })
  }
  selectClick(e){

    this.setState({
      tech: e.target.value
    })
  }

  importClick() {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/import_DB/' + this.state.tech)
    .then(response => {return response.json()})
      .then((data) => {
     
        this.setState({
        db: data,

     })}
     )
      .then((response)=>{
        console.log(this.state.db)
        //this.load()
      })
  }

  // createClick(create) {
  //   axios.get(window.baseUrl +"/laba_inf_tex/api/v1.0/create_DB/' + this.state.create)
  //     .then(response => this.setState({
  //       db: response.request.response,
  //       tech: create
  //     }))
  //     .then(()=> this.selectLoad())
  // }

  exportClick() {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/export_DB/' + this.state.tech)
  //  .then(response => console.log(response))

  }

  deleteClick() {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/delete_DB/' + this.state.tech,{
      method:'delete'
    })
    .then(()=> this.selectLoad())
  }

 
  selectTable(e){

    this.setState({
      tech: e.target.value
    })
  }
  
  union(name0,name1 ){
    fetch(window.baseUrl +"/laba_inf_tex/api/v1.0/"+this.state.tech+"/union_of_tables/"+name0+"/"+name1,{
      method:'delete'
    })
    .then(response => {console.log(response.json())})
  }
    render() {
        return (
          <main className="main">
          <aside>
               
                <select id="db" onClick={this.selectClick.bind(this)}>
              
                {this.state.list.map((item) => (
                <option className="dd-list-item" key={item}>{item}</option>
                ))}
                </select>
               
                <button onClick={this.importClick}> Import DB</button>
                {/* <input id= "create" type = "text" onChange = {this.createName.bind(this)}></input>
               <button onClick={this.createClick.bind(this)}>Create DB</button>
             */}
                <button onClick={this.deleteClick.bind(this)}> Delete DB</button>
            

                {/* <select id="union1">
              
                  {this.state.db.table.map((item) => (
                  <option key={item}>{item}</option>
                  ))}
                  </select>
                  <select id="union2">
              
                  {this.state.db.table.map((item) => (
                  <option key={item}>{item}</option>
                  ))}
 
                  </select>
                  <button onClick={this.union.bind(document.getElementById("union1").value,document.getElementById("union2").value,)}>Union</button> */}
            </aside>
            
            <Content db={this.state.db}/>
            
              
            
            
          </main>
        );
      }
    
    
    }
    
export default Nav;
    