import React, { useContext, useEffect } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";
const TimeLine = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`https://keitaro-sns-backend.herokuapp.com/api/posts/profile/${username}`)
        : await axios.get(`https://keitaro-sns-backend.herokuapp.com/api/posts/timeline/${user._id}`);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
