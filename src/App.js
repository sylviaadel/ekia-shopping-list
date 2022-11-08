import './App.scss';
import HeaderComponent from './components/Header/Header.tsx'
import WelcomeComponent from './components/Welcome/Welcome.tsx'
import ShoppingListComponent from './components/ShoppingList/ShoppingList.tsx'

function App() {
  
  return (
    <div className="App">
      <HeaderComponent />
      <WelcomeComponent />
      <ShoppingListComponent />
    </div>
  );
}

export default App;
