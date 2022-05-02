import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Routerv6() {
  return (
    <>
      <center><Link to="about">About</Link></center>
      {/* req outlet to use about  */}
      <center><Link to="lifeCycle">LifeCycle</Link></center>
      {/* no outlet req to use lifeCycle  */}
      <h1>
        STEPS :
      </h1>
      <ul>
        <li> import BrowserRouter and render it around your whole app.</li>
        <li> import Link and add some global navigation. We don't have any routes that render when the URL changes yet, but Link is changing the URL without causing a full page reload.(no page refresh)
          {/* Ex: <Link to="/about">About</Link> |{" "} */}
        </li>
        <li>
          <h1>Outlet:</h1>
          <p>The Outlet element is used as a placeholder. In this case an Outlet enables the Users component to render its child routes. Thus the Outlet element will render either a UserProfile or OwnUserProfile element depending on the current location.</p>
          {/*   Ex: 
                         import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="/" element={<UsersIndex />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
} */}
          <p>Thus the best way this element can be used is in layouts. You can simply create multiple layouts, for e.g.- the Dashboard Layout(for the profile and members page) or the Main Layout(for login and logout, basically when the user is not signed in). Finally, you can simply inject whichever component one needs depending on its route rather than wrapping each route component in a parent layout component like:
          </p>
          {/* ex:<Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
</Route>     */}
        </li>
      </ul>
      <Outlet></Outlet>  used to load child route
    </>
  )
}

export default Routerv6
