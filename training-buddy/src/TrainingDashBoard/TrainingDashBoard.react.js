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

    url = "http://localhost:4000/calendar";
    componentDidMount(){

    
        fetch(this.url).then(response =>response.json()).then(data =>{

            this.setState({trngList:data});
        });
    }

    render() {
        return (
            <React.Fragment>
            <AddToCalendar></AddToCalendar>
            <table className='table table-striped'>
            <thead>
            <tr>
                <th>CourseName</th>
               <th>Duration</th>
                <th>Start Date</th>
              </tr>
              </thead>
            <tbody>
             <DataTable data={this.state.trngList}></DataTable>
            </tbody>
              </table>
              </React.Fragment>
        );
    }
}

export default TrainingDashBoard;