import "./App.scss";
import HeaderComponent from "./components/Header/Header.tsx";
import WelcomeComponent from "./components/Welcome/Welcome.tsx";
import ShoppingListWrapperComponent from "./components/ShoppingListWrapper/ShoppingListWrapper.tsx";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound.tsx";

/**
 * 1. Rename App.js to App.jsx to know it is a React code
 * 2. Use 1 line export export default App() {} instead of using 2 lines of code for that
 */
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/list" element={<ShoppingListWrapperComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
