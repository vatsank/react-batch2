import React from 'react';

import Poll from '../Poll/Poll.react';

class ShowCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            interested:1,
            notNow:0
        }
    }

    update = (state,props) =>{

        if(state.notNow >10){
            return null;
        } else { 
    return {
        notNow:state.notNow+1
    }
}
    }
    notNow = ()=>{
       // this.setState({notNow:this.state.notNow+1});
      //  this.setState({notNow:this.state.notNow+1});
      this.setState(this.update);
      this.setState(this.update);
      
    }
    increment = () =>{
        this.setState({interested:this.state.interested+1});
    }
    render() {
        console.log('render Called');
        return (
            <div >
            <p>Interested </p><span><h1>{this.state.interested}</h1></span>
            <p>Not Interested </p><span><h1>{this.state.notNow}</h1></span>
            
              <Poll action={this.increment} text={"Interested"}></Poll>
              <Poll action={this.notNow} text={"Not Now"}></Poll>

              </div>
        );
    }
}

export default ShowCourse;