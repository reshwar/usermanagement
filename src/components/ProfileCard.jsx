import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getSelectedProfile } from '../Redux/userActions';

const ProfileCard = (props) => {
    
     const navigate = () =>{
        props.navigate(props.id)
     }

    return (
        <div>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                    <p className="f3 mb2" onClick={navigate}>{props.name}</p>
                    <button onClick={navigate} >{props.buttonName}</button>
                    <h2 className="f5 fw4 gray mt0">{props.dob}</h2>
                    <h3 className="f5 fw4 gray mt0">{props.address}</h3>
                </div>
            </article>
        </div>
    )
}

export default ProfileCard;
