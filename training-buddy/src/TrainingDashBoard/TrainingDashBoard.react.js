import React ,{Fragment}from 'react';
import DataTable from '../DataTable/DataTable.react';
import AddToCalendar from '../AddToCalendar/AddToCalendar.react';



class TrainingDashBoard extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {

            trngList : []
        }
    }

    update = (val) =>{

        const updated = [...this.state.trngList,val];

        this.setState({trngList:updated})
    }

    edit =(obj)=>{

        console.log(obj);
    }
    delete =(obj)=>{

        var array =[...this.state.trngList];
        var index = array.indexOf(obj);
        array.splice(index,1);
        const url = this.url+'/'+obj.id;

        fetch(url, {
            method:"DELETE"
        }).then(res=> res.json()).then(data => {
            console.log('one resource removed')
            this.setState({trngList:array});
        });

    }
    

    url = "http://localhost:4000/calendar";
    componentDidMount(){

    
        fetch(this.url).then(response =>response.json()).then(data =>{

            this.setState({trngList:data});
        });
    }

    render() {
        return (
            <React.Fragment>
            <AddToCalendar action={this.update} ></AddToCalendar>
            <table className='table table-striped'>
            <thead>
            <tr>
                <th>CourseName</th>
               <th>Duration</th>
                <th>Start Date</th>
              </tr>
              </thead>
            <tbody>
             <DataTable data={this.state.trngList} action={this.delete}></DataTable>
            </tbody>
              </table>
              </React.Fragment>
        );
    }
}

export default TrainingDashBoard;