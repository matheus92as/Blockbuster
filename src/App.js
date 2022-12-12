import Router from './routes/Router';
import { BrowserRouter } from "react-router-dom";
import GlobalState from './global/GlobalState';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalState>
          <Router/>
        </GlobalState>
      </BrowserRouter> 
    </div>
  );
}

export default App;
