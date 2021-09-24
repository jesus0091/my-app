import GoogleLogin from "react-google-login";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Login = () => {
  const { Setlogin } = useContext(CartContext);
  
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    Setlogin(response.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
