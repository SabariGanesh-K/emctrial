
import './App.css';
import logo from './assets/logo.png';
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import fb from "./assets/facebook.png";
function App() {
  return (
    <div className = "flex flex-col justify-between h-full">

    <div className="flex flex-row justify-between ">
     <div className = "flex flex-col justify-center my-2 mx-20 text-center">
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
    <div className="custom-shape-divider-top-1646023003  " style = {{width:'20%'}}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
<div className="custom-shape-divider-top-1646023627" style = {{width:'30%'}}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
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
<div class="custom-shape-divider-bottom-1646024196">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
<div class="custom-shape-divider-bottom-1646024476">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
<div className = "flex flex-row justify-end ">
<div className = "flex flex-end w-3/6 flex-row justify-between mx-11">
  <img src = {insta} alt = "insta"/>
  <img src = {twitter} alt = "twitter"/>
  <img src = {fb} alt = "fb"/>
</div>
</div>


    </div>
  );
}

export default App;
