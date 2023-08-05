import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayOut />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>
  )
);
