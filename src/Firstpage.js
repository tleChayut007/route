import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Route,Routes,Link}from 'react-router-dom';
import Posts from './Posts';
export default function Firstpage(){
     
    return (
     //หัวเว็ป  
    <BrowserRouter>
         <div>
            <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li> 
            <li><Link to="/Contact">Contact</Link></li> 
            <li><Link to="/Posts">All posts</Link></li> 
            <li><Link to="/Posts/1">Item1</Link></li> 
            <li><Link to="/Posts/2">Item2</Link></li> 
            <li><Link to="/posts?name=Chayut&surname=Sae-ueng">Greeting</Link></li>

             </ul>
         </div>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/posts/:id" element={<Posts/>}/>
         </Routes>

    </BrowserRouter>
    );
}
