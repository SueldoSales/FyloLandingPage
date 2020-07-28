import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <img src="./img/logo.svg" alt="logo" />
                    <ul>
                        <li>
                            <a href="#">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Team
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex">
                    <div>
                        <h1>
                            All your files in one secure location, accessible anywhere.
                        </h1>
                        <p>
                            Fylo stores your most important files in one secure location.
                            Access them wherever you need, share and collaborate with friends,
                            family, and co-workers.
                        </p>
                        <form>
                            <input type="email" placeholder="Enter your email..." />
                            <button>
                                Get Started
                            </button>
                        </form>
                    </div>
                    <div>
                        <img className="illustration" src="./img/illustration-1.svg" alt="header-img" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;