import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./Rightbar.css";
const Rightbar = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src={PUBLIC_FOLDER+"/star.png"} alt="" className="starImg" />
          <span className="eventText">Exclusive events going on!</span>
        </div>
        <img src="/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Advertisements</p>
        <img
          src={PUBLIC_FOLDER+"/promotion/promotion1.jpeg"}
          alt=""
          className="rightbarPromotionImg"
        ></img>
        <p className="promotionName">Shopping</p>
        <img
          src={PUBLIC_FOLDER+"/promotion/promotion2.jpeg"}
          alt=""
          className="rightbarPromotionImg"
        ></img>
        <p className="promotionName">Car shop</p>
        <img
          src={PUBLIC_FOLDER+"/promotion/promotion3.jpeg"}
          alt=""
          className="rightbarPromotionImg"
        ></img>
        <p className="promotionName">Dummy company</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoKey">Fukuoka</span>
          </div>
          <h4 className="rightbarTitle">Your friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              ></img>
              <span className="rightbarFollowingName">Shin code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/2.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              ></img>
              <span className="rightbarFollowingName">Suzuki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/3.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              ></img>
              <span className="rightbarFollowingName">Tanaka</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/4.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              ></img>
              <span className="rightbarFollowingName">Koga</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? (
          <ProfileRightbar></ProfileRightbar>
        ) : (
          <HomeRightbar></HomeRightbar>
        )}
      </div>
    </div>
  );
};

export default Rightbar;
