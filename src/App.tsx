import { useContext, useState } from 'react'
import './App.css'
import StoreProvider, { Store } from './state/StoreProvider'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/about_me/AboutMe'
import Blog from './pages/blog/Blog'
import BlogForm from './pages/blog_form/BlogForm'
import Knowledges from './pages/knowledge/Knowledges'

function App() {
  const [count, setCount] = useState(0)

  const {state} = useContext(Store)
  console.log(state);
  

  return (
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/">About me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/knowledge">Knowledges</Link>
          <Link to="/portafolium">Portafolium</Link>
          {state.logged&&<Link to="/blog/form">Blog form</Link>}
          {state.logged?<button>Log out</button>:<button>Log in</button>}
        </nav>
        {state.logged?
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/knowledge" element={<Knowledges />}/>
            <Route path="/portafolium" element={<Portafolium />}/>
            <Route path="/blog/form" element={<BlogForm />}/>
          </Routes>:
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/knowledge" element={<Knowledges />}/>
            <Route path="/portafolium" element={<Portafolium />}/>
          </Routes>}      
        <footer className='footer'>This is my footer</footer>
      </BrowserRouter>
  )
}

export default App
