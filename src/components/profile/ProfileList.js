import React from 'react';
import styles from './profileList.module.css';
import Profile from './Profile';
import pic1 from "../../assets/flower1.jpg";
import pic2 from "../../assets/flower2.jpg";
import pic3 from "../../assets/flower3.jpg";
import { profile } from "../../product-data";
const ProfileList = () => {
  return (
    <section>
      <div>
       <h1>Team Members</h1>
       <div className={styles["profile-content"]}>
        {profile.map((item,index)=>{
          const {img, name, job, Company, link} = item;
           return (<Profile 
              key={index}
              image={img} 
              name={name}
              job={job}
              Company={Company}
              link={link}
              />
           )

        })}
       
       

       </div>
       </div>
    </section>
  )
}

export default ProfileList
