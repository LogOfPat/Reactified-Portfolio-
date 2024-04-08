function Portfolio() {

    return(
        <section id="portfolio" className="block section-card red">
            <h1>Portfolio</h1>
            <div className = "icard">           
                    <a href= "https://logofpat.github.io/Password-Gen/"className = "icard">
                        <figure className="image image-placeholder image-background"></figure>
                    </a>
                    <p className="text-box rounded">Password-Gen   <a href="https://github.com/LogOfPat/Password-Gen">GitRepo</a></p> 
            </div>
            <div className="icard-small">   
                <div className="icard-small">
                    <a href="https://logofpat.github.io/Coding-Quiz/">
                        <figure className="image-small image-placeholder image-background"></figure><br></br>
                    </a>
                    <p className="text-box rounded">Coding-Quiz   <a href="https://github.com/LogOfPat/Coding-Quiz">GitRepo</a></p> 
                </div>
                <div className="icard-small">
                    <a href="https://logofpat.github.io/Work-Day-Scheduler/">
                        <figure className="image-small image-placeholder image-background"></figure><br></br>
                    </a>
                    <p className="text-box rounded">Work-Day-Scheduler   <a href="https://github.com/LogOfPat/Work-Day-Scheduler">GitRepo</a></p> 
                </div>
                <div className="icard-small">
                    <a>
                        <figure className="image-small image-placeholder image-background"></figure><br></br>
                    </a>
                    <p className="text-box rounded">Project 4   <a href="https://github.com/LogOfPat/Work-Day-Scheduler">GitRepo</a></p> 
                </div>
                <div className="icard-small">
                    <a>
                        <figure className="image-small image-placeholder image-background"></figure><br></br>
                    </a>
                    <p className="text-box rounded">Project 5   <a href="https://github.com/LogOfPat/Work-Day-Scheduler">GitRepo</a></p> 
                </div>
                <div className="icard-small">
                    <a>
                        <figure className="image-small image-placeholder image-background"></figure><br></br>
                    </a>
                    <p className="text-box rounded">Project 6   <a href="https://github.com/LogOfPat/Work-Day-Scheduler">GitRepo</a></p> 
                </div>
            </div>
        </section>
    );

};

export default Portfolio;