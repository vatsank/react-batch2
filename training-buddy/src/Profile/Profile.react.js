import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props) => {

    return (
        <div >
            <img src={props.imgRef} 
                alt='profilePicture'></img>
          <h1>{props.user.userName}</h1>
          <h6>{props.user.email}</h6>
                <p>Points Earned</p>
                <p>{props.points}</p>
           <p>Level</p>
           <p>{props.level}</p>

           </div>
    );

}

Profile.propTypes = {
    imgRef:PropTypes.string.isRequired,
    points:PropTypes.number,
    level:PropTypes.number,
    user:PropTypes.shape({
        userName:PropTypes.string,
        email:PropTypes.string
    })

}


export default Profile;