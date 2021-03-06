import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isclose } from "../../redux/actions";
import styled from "./SignUp.module.css";

const init = {
  userName: "",
  password: "",
  agree: true,
};

const SignUp = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(init);

  const dataHandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const dispatch = useDispatch()
  const url ="http://localhost:8080/users"
  const AddToServer = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then ((res) => {navigate("/login")
        dispatch(isclose())
  })
  };

  return (
    <>
      <div className={styled.SignUp_cont}>
        <h1>CREATE YOUR ACCOUNT</h1>
        <p>Sign up now and get 15% off your first order.</p>
        <input
          type="text"
          placeholder="Enter Username"
          name="userName"
          value={data.userName}
          onChange={dataHandle}
          className={styled.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={dataHandle}
          className={styled.input}
        />
        <br />
        <input type="checkbox" name="age" id="" />
        <label>Yes, I am over 18 years old</label>
        <br />
        <input type="checkbox" name="" id="" />
        <label>
          I would like to stay up to date with adidas. I agree to receive
          personalised email.
        </label>
        <br />
        <input type="checkbox" name="" id="" />
        <label>
          I have read and accepted the Terms & Conditions, the adiClub Terms &
          Conditions.
        </label>
        <br />
        <button onClick={AddToServer}>Register</button>
        <h4>Or</h4>
        <div className={styled.facebook}>Facebook</div>
      </div>
    </>
  );
};

export default SignUp;
