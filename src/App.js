
import './App.css';
import logo from './assets/logo.png';
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import fb from "./assets/facebook.png";
function App() {
  return (
    <div className = "flex flex-col justify-between h-full">

    <div className="flex flex-row justify-between">
     <div className = "flex flex-col justify-center my-2 mx-2 text-center">
<img src = {logo} alt = "logo"/>
<p className = "text-black font-semibold text-2xl">Logo</p>
     </div>
     <div className = "my-3 mx-3">
     <label className="relative block">
  <span className="sr-only">Search</span>
 
  <input className="placeholder:italic placeholder:text-black font-semibold block bg-gray-400 w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="SEARCH" type="text" name="search"/>
</label>
     </div>
    </div>

<div className = "flex flex-row justify-between my-10 w-full">
  <div className = "flex flex-col justify-center w-1/4 mx-10">
    <div className = "text-black font-bold text-4xl my-1">
      SEE THE WORLD
    </div>
    <div className = "my-1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
    </div>
    <div className = "mx-1">
    <button className = "bg-green-500 text-white font-normal w-3/6 rounded-lg py-1 my-1 ">READ MORE</button>
    </div>
  </div>
  <div className = "flex  flex-col justify-between my-2 mx-4">
    
    <div ><a href="#" className = " text-gray-400 text-3xl   hover:text-black hover:underline hover:decoration-3 hover:decoration-green-600">HOME</a></div>
    <br/><br/>
    <div ><a href="#" className = " text-gray-400 text-3xl  hover:text-black hover:underline hover:decoration-3 hover:decoration-green-600">PROFILE</a></div>
    <br/><br/>
    <div ><a href="#" className = " text-gray-400 text-3xl  hover:text-black hover:underline hover:decoration-3 hover:decoration-green-600">CONTACT</a></div>
   <br/><br/>
    <div ><a href="#" className = " text-gray-400 text-3xl   hover:text-black hover:underline hover:decoration-3 hover:decoration-green-600">GALLERY</a></div>
  </div>
</div>
<br/><br/>
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
