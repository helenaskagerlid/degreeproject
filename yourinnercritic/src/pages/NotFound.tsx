import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h2>Sorry the page you are looking for doesnät seem to exist</h2>
      <p>
        To be redirected to Home click here: <Link to="/">Home</Link>
      </p>
    </>
  );
};
