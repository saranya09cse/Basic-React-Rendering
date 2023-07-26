import React from 'react';
import css from './profile.module.css';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGithub } from "react-icons/ai";
import{ AiOutlineGooglePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Card from '../UI/card/Card';

const Profile = ({image,name,job,Company,link}) => {
  return (
    
    <Card>
    <div className={css.profile} style={{}}>
      <img src={image} alt="" />
      <div className={''}>
        <h3>My Profile</h3>
        <div className={css.text}>
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className={css.text}>
          <p>Job:</p>
          <p>{job}</p>
        </div>
        <div className={css.text}>
          <p>Company:</p>
          <p>{Company}</p>
        </div>
        <IconContext.Provider value={{ color:"#666" ,size:20}}>
          <div className={css.icons}>
              <AiOutlineTwitter  />
              <AiOutlineGithub />
              <AiOutlineGooglePlus />
          </div>
        </IconContext.Provider>
        <div className={css.btn}>
          <a href={link}>View Profile</a>
        </div>
      </div>
    </div>
    </Card>
   
  )
}

export default Profile
