import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Game1Page from "./pages/Game1Page/Game1Page";
import Game2Page from "./pages/Game2Page/Game2Page";
import GameLayout from "./components/modules/games/GameLayout";
import GamePage from "./pages/GamePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/game",
      element: <GameLayout />,
      children: [
        {
          path: "",
          element: <GamePage />,
        },
        {
          path: "game1",
          element: <Game1Page />,
        },
        {
          path: "game2",
          element: <Game2Page />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
