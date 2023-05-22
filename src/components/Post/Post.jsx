import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  if(posts?.length <= 0){
    return "No posts..."
  }
  return (
    <div>
      {posts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Post;
