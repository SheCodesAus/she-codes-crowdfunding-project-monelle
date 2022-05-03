import React, { useState } from "react";
import { Link } from "react-router-dom";

function PledgeForm({ projectId }) {
  // State
  const loggedIn = window.localStorage.getItem("token");
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: "",
  });


  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

// Alex doing something with HandleSubmit - what's HandleSubmit
  const handleSubmit = async (event) => {
      event.preventDefault();
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}pledges`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            project_id: projectId,
            amount: pledge.amount,
            anonymous: pledge.anonymous,
            supporter: window.localStorage.getItem("username"),
            comment: pledge.comment,
        }),        
  });
    const data = await res.json();
    console.log(data); 
  } catch (err) {
    console.log(err)
  }
};

if (!loggedIn) {
    return (
        <Link to="/login">Please log in to pledge</Link>
    );
}

  return (
    <form>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter pledge amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Write something!"
          onChange={handleChange}
          />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <select id="anonymous" onChange={handleChange}>
          <option value="">---Please select an option---</option>          
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit Pledge</button>
    </form>
  );
}

export default PledgeForm;