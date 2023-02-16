import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export const AuthRoutes = () =>{
  return(
    <Routes>
      <Route element={<SignIn/>} path={"/"}/>
      <Route element={<SignUp/>} path={"/register"}/>
    </Routes>
  )
}