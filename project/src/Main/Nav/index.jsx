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
    this.createClick = this.createClick.bind(this)
    this.selectLoad = this.selectLoad.bind(this)
    this.selectLoad();
  }
  selectLoad() {
    axios.get('http://localhost:5000/laba_inf_tex/api/v1.0/get_DBs')
      .then(response => {this.setState({list : JSON.parse(response.request.response)["DB"]})})
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
    axios.get('http://localhost:5000/laba_inf_tex/api/v1.0/import_DB/' + this.state.tech)
      .then(response => this.setState({
        db: response.request.response,
        show:true
      }))
      .then(()=>{
        console.log(this.state.db)
        //this.load()
      })
  }

  createClick(create) {
    axios.get('http://localhost:5000/laba_inf_tex/api/v1.0/create_DB/' + this.state.create)
      .then(response => this.setState({
        db: response.request.response,
        tech: create
      }))
      .then(()=> this.selectLoad())
  }

  exportClick() {
    axios.get('http://localhost:5000/laba_inf_tex/api/v1.0/export_DB/' + this.state.tech)
    .then(response => console.log(response))

  }

  deleteClick() {
    axios.delete('http://localhost:5000/laba_inf_tex/api/v1.0/delete_DB/' + this.state.tech)
    .then(response => console.log(response))
    .then(()=> this.selectLoad())
    .then(()=>this.importClick())
  }

  deleteTable(e) {
    axios.delete('http://localhost:5000/laba_inf_tex/api/v1.0/delete_table' + this.state.tech + e)
    .then(response => console.log(response))
    .then(()=> this.selectLoad())
    .then(()=> this.importClick())
}

  getTable(e) {
    axios.get('http://localhost:5000/laba_inf_tex/api/v1.0/' + this.state.tech +"/get_table/" + e)
    .then(response => console.log(response))
    .then(()=> this.selectLoad())
    .then(()=> this.importClick())
  }

  createTable() {
    axios.post('http://localhost:5000/laba_inf_tex/api/v1.0/' + this.state.tech +"/create_table/" )
    .then(response => console.log(response))
    .then(()=> this.selectLoad())
    .then(()=> this.importClick())
  }

  // load( ){
  //   for(var item in )
  // }
  selectTable(e){

    this.setState({
      tech: e.target.value
    })
  }
  
    render() {
        return (
          <main className={style.nav}>
          <aside>
               
                <select id="db" onClick={this.selectClick.bind(this)}>
              
                {this.state.list.map((item) => (
                <option className="dd-list-item" key={item}>{item}</option>
                ))}
                </select>
               
                <button onClick={this.importClick}> Import DB</button>
                <input id= "create" type = "text" onChange = {this.createName.bind(this)}></input>
                
                <button onClick={this.createClick.bind(this)}>Create DB</button>
            
                <button onClick={this.deleteClick.bind(this)}> Delete DB</button>
                  <hr></hr>

                {/* <select id="tab" onClick={this.selectTable.bind(this)}>  
                {this.state.list.map((item) => (
                <option className="dd-list-item" key={item}>{item}</option>
                ))}
                </select> */}
            </aside>
            <Content key={1} db={this.state.db}/>
              
            
            
          </main>
        );
      }
    
    
    }
    
export default Nav;
    