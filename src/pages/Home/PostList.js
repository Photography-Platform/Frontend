import React from 'react';
import Meat from "./img/meat.jpg"
import { AiFillHeart,AiFillStar } from "react-icons/ai"
import "./index.css"
const PostList = () => {
  const numPosts = 5; // 欲重複撥放的次數

  return (
    <div>
      {[...Array(numPosts)].map((_, index) => (
        <div className="post" key={index}>
          <img src={Meat} alt="Meat" />
          <AiFillStar size={60} className="icon-star"></AiFillStar>
          <AiFillHeart size={60} className="icon-heart"></AiFillHeart>
          <span className='title'>示範標題:NO.{index + 1}</span>
          <div className='content'>示範貼文內容:NO.{index+1}</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;