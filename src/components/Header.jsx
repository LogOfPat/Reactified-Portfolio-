import Nav from './Nav';

function Header({selectPage}) {

    return(
    <header className="header red">
        <nav className="nav-bar">
            <h2 className="rounded">Logan Patrick</h2>
            <Nav selectPage={selectPage} />
        </nav>
    </header>
    );
    
};

export default Header;