import { createBrowserRouter } from "react-router";
import LoginPage from "./components/LoginPage";
import MusicPlayer from "./components/MusicPlayer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/player",
    Component: MusicPlayer,
  },
]);
