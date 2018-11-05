import React, { Component } from 'react';
import style from "./style.scss";

 
class Content extends Component {
  constructor (props) {
    super(props) 
    this.state = {
       db: JSON.parse(this.props.db)
    };
    console.log(this.props)
    console.log(this.state)
    
  }
    render() {
        // return (
        //   <div  className={style.content}> 

        //   { this.state.db["tables"] && this.state.db["tables"].map((item) => (
        //         <table>
        //           <caption>item</caption>
        //           {
        //             this.state.db["tables"][item].map((col) => (
        //               <td>col</td>
                 
        //             ))
        //           }

        //         </table>
        //         ))} }
           
        
    
          </div>
        );
      }
    
    
    }
    
    export default Content;
    