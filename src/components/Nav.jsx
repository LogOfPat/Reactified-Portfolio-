function Nav({selectPage }) {
    return (
        <ul className="links">
            <li>
                <a 
                onClick={()=> selectPage('About')}
                >
                    About me
                </a>  
            </li>
            <li>
                <a 
                onClick={()=> selectPage('Portfolio')}
                >   
                Portfolio
                </a>
            </li>
            {/* <li>
                <a 
                onClick={()=> selectPage('Resume')}
                >
                
                Resume
                </a>
            </li> */}
        </ul>   
    )
}

export default Nav;