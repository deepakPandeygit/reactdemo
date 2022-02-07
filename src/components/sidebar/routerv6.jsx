import React from 'react';
import { Link } from 'react-router-dom'

function Routerv6() {
    return (
        <>
            <center><Link to="/about">Routing V6</Link></center>
            <h1>
                STEPS :
            </h1>
            <ul>
                <li> import BrowserRouter and render it around your whole app.</li>
                <li> import Link and add some global navigation. We don't have any routes that render when the URL changes yet, but Link is changing the URL without causing a full page reload.(no page refresh)
                    Ex: <Link to="/about">About</Link> |{" "}
                </li>
            </ul>
        </>
    )
}

export default Routerv6
