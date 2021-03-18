import { useEffect, useRef, useState } from "react";

export default function TheGit() {

  const [user, setUser] = useState("taseeeer");
  const [userName, setUserName] = useState("taseeeer");
  const searchInput = useRef();

  const endpoint = "https://api.github.com/users";

  // useEffect(() => {
  //   async function getUser() {
  //     const response = await fetch(endpoint);
  //     const data = await response.json();
  //     setUser(data);
  //   };

  //   getUser();
  // }, []);

  function handleClearInput() {
    searchInput.current.value = "";
  }

  async function hanldeUserSearch() {
    const res = await fetch(`${endpoint}/${userName}`);
    const data = await res.json();
    console.log(data);
    setUser(data);
  }

  return(
    <div>
    <input placeholder="Username?" ref={searchInput} onChange={e => setUserName(e.target.value)}/>
    <button type="submit" onClick={hanldeUserSearch}>Search</button>
    <button onClick={handleClearInput}>Clear</button>
    {user ? (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} />
    </div>
    ) : "Loading..."
    }
    </div>
  ); 
};