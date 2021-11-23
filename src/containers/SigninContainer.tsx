import React, { useCallback } from "react";
import Signin from "../components/Signin";

const SigninContainer = () => {
  const login = useCallback((reqData) => {}, []);
  return <Signin login={login} />;
};

export default SigninContainer;
