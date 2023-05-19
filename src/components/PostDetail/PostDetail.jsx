import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(id));
  }, []);
  if (!post) {
    return <Spin />;
  }
  return (
    <div>
      PostDetail
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>Date: {post.createdAt?.slice(0, 10)}</p>
    </div>
  );
};

export default PostDetail;
