import React from 'react';
import NavBar from './navbar';

function Header(){
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <NavBar />
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Header;