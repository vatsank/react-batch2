import React ,{useState} from 'react';
import {Field,reduxForm} from 'redux-form';
import {validate} from '../validate';

const RenderField = (props) => {

    const {input,type,meta:{touched,error,warning}} = props
    return (
        <div>
        <input {...input} type={type}></input>

        {touched && ((error && 
            <span className="text-danger">{error}</span>) || 
              (warning && <span>{warning}</span>))}
       
        </div>
    );
};



const AddTrainer = (props) => {

    const {handleSubmit}  =props
    return (
        <div >
        <p>{props.info}</p>
        <form onSubmit={handleSubmit}>
     
          <div>
              <label htmlFor="">Id</label>
              <Field component={RenderField} name='id' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Trainer Name</label>
              <Field component={RenderField} name='trainerName' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Skill Set</label>
              <Field component={RenderField} name='skilSet' type='text'></Field>
          </div>
          <div>
              <label htmlFor="">Rating</label>
              <Field component={RenderField} name='rating' type='text'></Field>
          </div>
          <div>
          <button type='submit'>Submit</button>
          </div>
        
        </form>
      </div>
    );

}

export default reduxForm({form:'addTrainer',validate})(AddTrainer);