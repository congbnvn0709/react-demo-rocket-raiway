import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './core/routers/router';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}>
      </RouterProvider>
    </Provider>

  );
}

export default App;
