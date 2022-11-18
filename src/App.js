import './App.scss';
import HeaderComponent from './components/Header/Header.tsx'
import WelcomeComponent from './components/Welcome/Welcome.tsx'
import ShoppingListWrapperComponent from './components/ShoppingListWrapper/ShoppingListWrapper.tsx'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<WelcomeComponent />} />
        <Route path='/list' element={<ShoppingListWrapperComponent />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );

}

export default App;
