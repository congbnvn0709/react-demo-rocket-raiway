import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './core/constants/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={ROUTES} />
      <ToastContainer />
    </>

  );
}

export default App;
