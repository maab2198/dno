import React, { Component } from 'react';

 
class Record extends Component {
  constructor (props) {
    super(props) 
    this.state={
      show:true
    }   
    console.log(props)
  }
  deleteRecord() {
    fetch(window.baseUrl +'/laba_inf_tex/api/v1.0/' + this.props.db +
    "/delete_record/"+ this.props.table +"/" + this.props.id,
    {
      method: 'delete'
    })
   .then(this.setState({
     show:false
   }))
  }


    render() {
       return (

         <tr>
          {this.state.show && this.props.list}
          {this.state.show && <button  onClick={this.deleteRecord.bind(this)}>Delete</button>}
        </tr>
        );
          
      }
    
    
    }
    
    export default Record;
    