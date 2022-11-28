import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Route from './routers';

function App() {
  return (
   <BrowserRouter>
      <Route />
   </BrowserRouter>
  );
}

export default App;
