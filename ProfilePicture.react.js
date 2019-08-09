import React from 'react';



const ProfilePicture = (props) => {

    return (
        <div >
            <img src={props.imgSrc} alt="ProfilePicture"></img>
        </div>
    );

}

export default ProfilePicture;