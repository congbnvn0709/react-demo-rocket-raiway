import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './core/routers/router';
import { Provider } from 'react-redux';
import store from './stores/store';
import { SpinnerProvider } from './components/Spinner/SpinnerProvider';

function App() {
  return (
    <Provider store={store}>
      <SpinnerProvider>
        <RouterProvider router={routers}>
        </RouterProvider>
      </SpinnerProvider>
    </Provider>

  );
}

export default App;
