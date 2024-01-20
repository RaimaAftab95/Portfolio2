// import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setActiveUser } from "./redux/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login({ name = "n/a", place, dob }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const handleChange = (event) => {
    setusername(event.target.value);
  };

  return (
    //  style={{ marginTop: '100px' }}
    <div className="Login">
      {/* <h4>Name:{name}</h4>
      {dob ? <h4>DOB:{dob}</h4> : <p>DOB is na</p>}
      <h4>Place: {place}</h4> */}
      <input placeholder="username" value={username} onChange={handleChange} />
      <input placeholder="password" />
      <button onClick={() => dispatch(setActiveUser({ username, navigate }))}>
        login
      </button>
    </div>
  );
}
