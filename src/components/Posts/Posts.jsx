import React from "react";
import Post from "../Post/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const Posts = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    setTimeout(() => {
      dispatch(reset());
    }, 1000);
  }, []);
  
  if (isLoading) {
    return <Spin />;
  }
  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
