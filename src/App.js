import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './core/constants/routes';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <RouterProvider router={ROUTES} />
  );
}

export default App;
