import React, { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";

export default function App() {

  const [user, setUser] = useState(() => window.localStorage.getItem("user"));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      document.title = user ? `${user}'s feed` : "Login";

      window.localStorage.setItem("user", user);
  }, [user]);


  if(!user) {
    return <Login setUser={setUser} />
  }


  return(
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      {posts.map(p => (
        <>
          <p>{p.content}</p>
          <img src={URL.createObjectURL(p.image)} />
        </>
      ))}
    </>
  );
};