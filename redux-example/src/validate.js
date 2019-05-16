

export const validate = (values)=>{

    const errors = {}

    if (!values.trainerName) {
        errors.trainerName = 'Required'
    } else if (values.trainerName.length < 2) {
        errors.trainerName = 'Minimum be 2 characters or more'
    }
    return errors



}