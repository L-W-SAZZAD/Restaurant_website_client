import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { Provider } from "react-redux";
import { store } from "./features/Store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
    </div>
  );
}

export default App;
