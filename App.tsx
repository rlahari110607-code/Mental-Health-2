import { RouterProvider } from "react-router";
import { mentalHealthRouter } from "./mental-health-routes";

export default function App() {
  return <RouterProvider router={mentalHealthRouter} />;
}