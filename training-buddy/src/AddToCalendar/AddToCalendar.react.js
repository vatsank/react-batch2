import React from 'react';



class AddToCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state ={

            newCalendar : {
                id:0,
                courseName:'',
                duration:'',
                startDate:''
            }
        }
    }

    handleChange = () =>{

    }

    handleSubmit = () =>{
        
    }

    render() {
        return (
            <form className='form'>
      
            <div className='form-group'>
                <label htmlFor="">Id</label>
                <input type="text" className="form-control"/>
            </div>
            <div className='form-group' >
                <label htmlFor="">Course Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Duration</label>
                <input type="text" className="form-control"/>
            </div>
            <div className='form-group'>
                  <label htmlFor="">Start Date</label>
                  <input type="text" className="form-control"/>
            </div>
            <div>
              <input type="submit" value="Add" className='btn btn-info'/></div>
            </form>

            
        );
    }
}

export default AddToCalendar;