import Router from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Router />
    </BrowserRouter>
  );
}

export default App;
