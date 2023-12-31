import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpeg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">s
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Viraj Pitale</span>
        <span>Viraj@98</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>150</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>2000</span>
            <span>Followers</span>
          </div>

          
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
