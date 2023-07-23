import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './core/constants/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={ROUTES} />
      <ToastContainer />
    </Provider>

  );
}

export default App;
