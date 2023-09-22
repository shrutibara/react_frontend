import React, { useState } from "react";
import axios from "axios";
import './admin.css';
// import MainPages from "../components/MainPage";



function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [isPosted, setIsPosted] = useState(false); // Added state for the alert

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId= sessionStorage.getItem('usesDetailes');
   
        const data = {
      title,
      description,
      author: JSON.parse(userId)._id
    };

    axios.post("http://https://backnode-becd.onrender.com:4000/api/posts", data)
      .then((response) => {
        if (response.status === 200) {
          // setIsPosted(true); // Set the state to true on success
          setTitle("");
          setDescription("");
        } else {
          console.log("Failed to post");
        }
      })
      .catch((error) => {
        console.log("Error posting data:", error);
      });
  };

  return (<>
  {/* <MainPages/> */}
    <div className="admin-container">
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
          <label>
            Title:-
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:-
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button onClick={() => alert('Successfuly Done !')}>POST</button>
      </form>
    </div>
  </>);
}

export default Admin;
