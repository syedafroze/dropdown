import React,{Component}from 'react'
import Sidebar1 from './drop2'
class Mediator extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:{
           Admin:[
                {id:"0",access:"attend"},
                 {id:"1", access:"staffrecord"},
               {id:"2", access:"Admin2"},
               {id:"3",access:"admin3"},
               {id:"4",access:"admin4"},
               {id:"5",access:"admin5"}
            
           ],

            Manager:[
                {id:"0",access:"Manage-attend"},
                 {id:"1", access:"Manage-staffrecord"},
               {id:"2", access:"Manage-Salary"},
              
            
            ]
        },
        name:[],
        true:true
    }


    }

    function(){
    
        this.state.name.push(this.props.prop1)
        
    }
    

                
  render() {
      let done;
      if(!this.state.name.includes(this.props.prop1)){
          this.function()
          return(
         done= <Sidebar1 prop2={this.state.content[this.props.prop1]}></Sidebar1>
          );
      }else{
          return(
              <div>{alert("cannot select")}</div>
          )
      }
      //console.log(this.state.content[this.props.prop1])
      
    
    }
    
}

export default Mediator