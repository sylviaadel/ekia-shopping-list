import './App.scss';
import HeaderComponent from './components/Header/Header.tsx'
import WelcomeComponent from './components/Welcome/Welcome.tsx'
import ShoppingListComponent from './components/ShoppingList/ShoppingList.tsx'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<WelcomeComponent />} />
        <Route path='/list' element={<ShoppingListComponent />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );

}

export default App;
