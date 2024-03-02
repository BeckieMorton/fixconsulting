import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/Services" element={<Services />} />
  </>
);

export default routes;
