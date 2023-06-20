import { Link } from "react-router-dom-v5-compat";

export const Header = () => {
  return (
    <header>
      <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link>
    </header>
  );
};
