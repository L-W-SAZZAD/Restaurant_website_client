import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUP/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/ourMenu" element={<OurMenu />} />
        <Route path="/ourShop" element={<OurShop />} />
      </Route>
    </Route>
  )
);
