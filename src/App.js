import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { Provider } from "react-redux";
import { store } from "./features/Store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
