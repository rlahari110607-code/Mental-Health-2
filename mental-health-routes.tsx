import { createBrowserRouter, Navigate } from "react-router";
import MHLogin from "./components/mental-health/MHLogin";
import MHDashboard from "./components/mental-health/MHDashboard";
import MHStressRelief from "./components/mental-health/MHStressRelief";
import MHArticles from "./components/mental-health/MHArticles";
import MHChatbot from "./components/mental-health/MHChatbot";
import MHEmergency from "./components/mental-health/MHEmergency";
import MHForum from "./components/mental-health/MHForum";
import MHLayout from "./components/mental-health/MHLayout";

export const mentalHealthRouter = createBrowserRouter([
  {
    path: "/",
    element: <MHLogin />,
  },
  {
    path: "/app",
    element: <MHLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <MHDashboard />,
      },
      {
        path: "stress-relief",
        element: <MHStressRelief />,
      },
      {
        path: "articles",
        element: <MHArticles />,
      },
      {
        path: "chatbot",
        element: <MHChatbot />,
      },
      {
        path: "emergency",
        element: <MHEmergency />,
      },
      {
        path: "forum",
        element: <MHForum />,
      },
    ],
  },
]);
