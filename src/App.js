import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './core/constants/routes';

function App() {
  return (
    <RouterProvider router={ROUTES} />
  );
}

export default App;
