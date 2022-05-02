import logo from './logo.svg';
import './App.scss';
//render react around whole app
import { BrowserRouter, Routes, Route } from "react-router-dom";

//for routing body component
import Routerv6 from './components/sidebar/routerv6';
import Aboutjsx from './components/sidebar/Aboutjsx';
import ScssBasic from './components/sidebar/scssBasic';
import ReactLifeCycle from './components/sidebar/reactLifeCycle';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routerv6 />} >
          <Route path="scss" element={<ScssBasic />} />
          <Route path="about" element={<Aboutjsx />} />
        </Route>
        <Route path="lifeCycle" element={<ReactLifeCycle />} />
        {/* Notice at "/" it renders <Routerv6>. At "/scss" it render <ScssBasic>. */}
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> {/*for match only when no other routes do*/}
        {/* <Route path="*" element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

