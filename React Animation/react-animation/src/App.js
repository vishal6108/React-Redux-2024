import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/welcome-page.jsx";
import ChallengesPage from "./pages/challenges.jsx";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengesPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
