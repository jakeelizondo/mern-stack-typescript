import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
