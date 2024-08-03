import './App.css';
import{Routes,Route} from "react-router-dom"
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';
import IndexPage from './components/IndexPage';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
function App() {
  return (
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={
          <IndexPage/>
        }/>
        <Route path='/login' element={
            <LoginPage/>
        }/>
        <Route path='/register' element={
            <Register/>
        }/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
  );
}

export default App;
