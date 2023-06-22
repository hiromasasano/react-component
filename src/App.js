import { BrowserRouter } from "react-router-dom-v5-compat";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "AAA",
  image: "https://source.unsplash.com/2_3c4dIFYFU",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

export default function App() {
  return <Router />;
}
