import logo from './logo.svg';
import './App.scss';
//render react around whole app
import { BrowserRouter, Routes, Route } from "react-router-dom";

//for routing body component
import Routerv6 from './components/sidebar/routerv6';
import Aboutjsx from './components/sidebar/Aboutjsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routerv6 />} />
        <Route path="/about" element={<Aboutjsx />} />

        {/* Notice at "/" it renders <App>. At "/invoices" it render <Invoices>. */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

