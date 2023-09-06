import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops...nothing to see here!</h2>
      <Link to="/">
        <button className="button">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
