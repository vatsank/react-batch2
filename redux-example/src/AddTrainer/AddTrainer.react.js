import React from 'react';
import {Field,reduxForm} from 'redux-form';


const AddTrainer = (props) => {

    const {handleSubmit}  =props
    return (
        <div >
        <form onSubmit={handleSubmit}>
     
          <div>
              <label htmlFor="">Id</label>
              <Field component='input' name='id' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Trainer Name</label>
              <Field component='input' name='trainerName' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Skill Set</label>
              <Field component='input' name='skilSet' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Rating</label>
              <Field component='input' name='rating' type='text'></Field>
          </div>
          <div>
          <button type='submit'>Submit</button>
          </div>
        
        </form>
      </div>
    );

}

export default reduxForm({form:'addTrainer'})(AddTrainer);