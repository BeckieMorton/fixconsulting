import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <p>Hero</p>
      <Link to="/Services" state={{ from: "Cfo" }}>
        <p>CFO as a service</p>
      </Link>
      <Link to="/Services" state={{ from: "Projectandchange" }}>
        <p>Project and Change Services</p>
      </Link>
    </div>
  );
};
