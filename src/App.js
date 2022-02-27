
import './App.css';
import logo from './assets/logo.png';
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import fb from "./assets/facebook.png";
function App() {
  return (
    <div className = "flex flex-col justify-between h-full">
    <div className="flex flex-row justify-between">
     <div className = "flex flex-col justify-center">
<img src = {logo} alt = "logo"/>
<p>Logo</p>
     </div>
     <div>
     <label className="relative block">
  <span className="sr-only">Search</span>
 
  <input className="placeholder:italic placeholder:text-black font-semibold block bg-gray-400 w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="SEARCH" type="text" name="search"/>
</label>
     </div>
    </div>

<div className = "flex flex-row justify-between my-10 w-full">
  <div className = "flex flex-col justify-center w-1/4">
    <div className = "text-black font-bold text-4xl">
      SEE THE WORLD
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
    </div>
    <button>READ MORE</button>
  </div>
  <div className = "flex  flex-col justify-between">
    
    <div>HOME</div>
 
    <div>PROFILE</div>
    <div>CONTACT</div>
    <div>GALLERY</div>
  </div>
</div>

<div className = "flex flex-row justify-end ">
<div className = "flex flex-end w-3/6 flex-row justify-between">
  <img src = {insta} alt = "insta"/>
  <img src = {twitter} alt = "twitter"/>
  <img src = {fb} alt = "fb"/>
</div>
</div>


    </div>
  );
}

export default App;
