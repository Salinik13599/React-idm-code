import First from "./Components/One";
import "./App.css"
import "./task.css"
import "./bootstrap-5.3.3-dist/css/bootstrap.min.css"
import Dynamic from "./Components/Dynamic";
import ParentProps from "./props/ParentProps";
import State from "./UsestateHooks/State";
import Effect from "./UseEffect/Effect";
import Main from "./useContext/Main";
import Ref from "./useRef/Ref";
import Memo from "./useMemo/Memo";
import Callback from "./useCallback/Callback";
import Reduce from "./useReducer/Reduce";
import Demo from "./customHook/Demo";
import Forms from "./ReactForms/Forms";
import Map from "./ReactForms/Map";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Create from "./CRUD/Create";
import Edit from "./CRUD/Edit";
import View from "./CRUD/View";
function App() {
   return (
    <div className="App">
        <h1>
          Hello welcome
        </h1>
        {/* <First />
        <Dynamic /> */}

       {/* <ParentProps /> */}
        {/* <State /> */}
        {/* <Effect /> */}
        {/* <Main /> */}
        {/* <Ref />
        <Memo />
        <Callback /> */}
        {/* <Reduce /> */}
        {/* <Demo /> */}
         <Forms />
        <Map /> 

        <BrowserRouter>
            <Routes>

                <Route path="/"  element={<First></First>}/>
                <Route path="/hooks" element={<State></State>}/>
                <Route path="/memohook" element={<Memo></Memo>}/>
                <Route path="/reduce" element={<Reduce></Reduce>}/>
                <Route path="/refhook" element={<Ref ></Ref>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/view" element={<View/>}/>
                <Route path="/edit" element={<Edit/>}/>
               
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



// import React from "react";
// import Navbar from "./Components/Navbar";
// import Filters from "./Components/Filters";
// import ProductList from "./Components/ProductList";
// import "./App.css";
 

// function App() {
//   let a={
//     logo:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70"
//   }
//   return (
//     <div>
//       <Navbar />
//       <div className="main-content">
//         <Filters />
//         <ProductList />
//       </div>
//     </div>
//   );
// }

// export default App;

