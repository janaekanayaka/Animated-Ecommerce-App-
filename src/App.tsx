import BackGroundAnimation from "./components/BackGroundAnimation";
import BottomGrid from "./components/BottomGrid";
import Details from "./components/Details";
import NavBar from "./components/NavBar";

function App(){
   return(
    <div className="h-screen overflow-hidden relative bg-black">
      <BackGroundAnimation/>
      <NavBar/>
      <BottomGrid/>
      <Details/>
    </div>
   )
}

export default App;