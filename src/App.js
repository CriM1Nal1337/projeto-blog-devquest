import './App.css';
import AppRoutes from './pages/routes'
import { createGlobalStyle } from 'styled-components';
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

const createGlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default App;
