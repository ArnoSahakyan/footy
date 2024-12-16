import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="NavbarBG">
            <div className='Navbar container'>
                <h1 className="Navbar__logo">KickOff</h1>
                <ul className="Navbar__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/leagues">Leagues</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/players">Players</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className="Navbar__search">
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
        </nav>
    );
};
