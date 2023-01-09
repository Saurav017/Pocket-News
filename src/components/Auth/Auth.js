import React, { useState } from "react";
import classes from "./Auth.module.css";
import { AiTwotoneEye } from "react-icons/ai";
import rocket from "./rocket.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { auth,provider,ghprovider } from "../../firebase-config";

const Auth = () => {
  // toggling the password type
  const [passwordType, setPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");

  // state to prevent API Call repeatedly
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // setting values for email & password
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    // toggling the auth type
    const [authType, setAuthType] = useState(true);

    const handleAuthChange = () => {
      setAuthType(!authType);
    };
  

  // function to handle form submission
  const handleFormSubmission = (event) => {
    event.preventDefault();

    if (!values.email || !values.pass) {
      setErrorMessage("Please fill all the fields.");
      return;
    }
    setErrorMessage("");
    console.log(values);


    // firebase signup
    setSubmitButtonDisabled(true);

    if(authType)    {
        
        signInWithEmailAndPassword(auth, values.email, values.pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setSubmitButtonDisabled(false);
    // ...
    console.log("Login Successful")
  })
  .catch((error) => {
    setSubmitButtonDisabled(false);
    setErrorMessage(error.message)
  }); 
        return;
    }


    // sign up with firebase
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        const user = res.user;
        await updateProfile(user, {
          displayName: values.email.charAt(0).toUpperCase(),
        });
        console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
        console.log(err);
      });
  };


//   Google Authentication
  const handleGoogleAuth = () =>    {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    setErrorMessage(errorMessage);
    // ...
  });

  }


// Github Authentication
  const handleGithubAuth = ()  => {
    signInWithPopup(auth, ghprovider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <main className={classes.container}>
      <div className={classes.auth_container}>
        <div className={classes.img_div}>
          <img src={rocket} alt="rocket" className={classes.img} />
        </div>
        <div className={classes.heading_div}>
          <h3 className={classes.heading}>Welcome to Bardeen</h3>
          <p className={classes.sub_heading}>
            Let's {authType ? "Sign In" : "Sign Up"} to launch your automations.
          </p>
          <b className={classes.err}>{errorMessage}</b>
        </div>
        <div className={classes.form_div}>
          <div className={classes.input_div}>
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className={classes.pass_div}>
            <input
              name="pass"
              type={passwordType}
              placeholder="Password"
              onChange={handleChange}
              value={values.pass}
            />
            <div className={classes.toggle} onClick={togglePassword}>
              <AiTwotoneEye />
            </div>
          </div>

          <div className={classes.auth_footer}>
            <button className={classes.auth_add} onClick={handleAuthChange}>
              {authType ? "Create Account" : "Sign In with E-Mail"}
            </button>
            <button className={classes.auth_add}>Forgot Password ?</button>
          </div>

          <div className={classes.btn_div}>
            <button
              className={classes.auth_btn}
              onClick={handleFormSubmission}
              disabled={submitButtonDisabled}
            >
              Sign {authType ? "In" : "Up"}
            </button>
          </div>

          <div className={classes.tp_auth}>
            <button className={classes.tp_btn} onClick={handleGoogleAuth}>
              <span className={classes.icon}>
                <FcGoogle />
              </span>
              Sign in with Google
              <span className={classes.arrow}>
                <AiOutlineArrowRight />
              </span>
            </button>
            <button className={classes.tp_btn} onClick={handleGithubAuth}>
              <span className={classes.icon}>
                <FaGithub />
              </span>
              Sign in with Github
              <span className={classes.arrow}>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
