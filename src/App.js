import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import UserAuthContext from './context/UserAuthContext';
function App() {
  return (
    <UserAuthContext>
      <Signup />
    </UserAuthContext>
  );
}

export default App;