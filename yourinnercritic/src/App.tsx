import { RouterProvider } from "react-router-dom";
import "./styles/home.scss";
import { router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
