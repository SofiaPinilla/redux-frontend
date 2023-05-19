import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getByTitle } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

const Search = () => {
  const { postName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByTitle(postName));
    console.log(postName);
  }, [postName]);

  return <div><Post/></div>;
};

export default Search;
