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

    handleChange = (event) =>{
     console.log(event);
        let value = event.target.value;
        let name = event.target.name;

        this.setState( prevState => ({ newCalendar : 
            {...prevState.newCalendar, [name]: value  }
        }
        ));
        
    }
    url = "http://localhost:4000/calendar";
    handleSubmit = (event) =>{

        event.preventDefault();

        fetch(this.url,{
            method:'POST',
            body:JSON.stringify(this.state.newCalendar),
            headers:{'Content-Type':'application/json'}
        });
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
      
            <div className='form-group'>
                <label htmlFor="">Id</label>
                <input type="text" name='id' className="form-control" 
                   value={this.state.newCalendar.id} onChange={this.handleChange}/>
            </div>
            <div className='form-group' >
                <label htmlFor="">Course Name</label>
                <input type="text" name='courseName' className="form-control" value={this.state.newCalendar.courseName} onChange={this.handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Duration</label>
                <input type="text" name='duration' className="form-control" value={this.state.newCalendar.duration} onChange={this.handleChange}/>
            </div>
            <div className='form-group'>
                  <label htmlFor="">Start Date</label>
                  <input type="text"  name='startDate' className="form-control" value={this.state.newCalendar.startDate} onChange={this.handleChange}/>
            </div>
            <div>
              <input type="submit" value="Add" className='btn btn-info'/></div>
            </form>

            
        );
    }
}

export default AddToCalendar;