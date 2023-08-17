// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

function Root() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
