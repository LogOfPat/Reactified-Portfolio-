import Header from './Header';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
import Resume from './pages/Resume';

function Home() {
    const [currentPage, setCurrentPage] = useState('About');
    const selectPage = (page) =>  setCurrentPage(page);
    const changePage = function(){
        console.log("Selected page is " + currentPage);
        if(currentPage === 'About'){
            return  <About />;
        }
        else if (currentPage === 'Portfolio'){
            return <Portfolio />;
        }
        else if(currentPage === 'Resume') {
            return <Resume />;
        }
        else {
            return <Contact />;
        }

    }
    
    return(
        <div>
            <Header currentPage={currentPage} selectPage={selectPage}/>
            <div>{changePage()}</div>
            <Footer />
            
        </div>
    );    
};

export default Home;