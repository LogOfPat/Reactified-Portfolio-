import avatar from '../../assets/gus-avatar.png'

function About() {

    
    return(
        <section id="about" className="block rounded section-card red">
            <h1>About me</h1>
            <div className="tcard">
                <figure className="avatar">
                    <img src= {avatar} alt="Picture of a very round hamster" ></img>
                    <figcaption>My hamster gus!</figcaption>
                </figure>
                <p>My name is logan patrick and i'm an aspiring web developer! 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim sem, imperdiet sed mi vel, rhoncus ultrices est. 
                    Pellentesque porta ultrices mi, sollicitudin pulvinar sapien tincidunt at. Ut ac lacus quis felis viverra dignissim. Aliquam elit lacus, laoreet et interdum vel, 
                    volutpat id turpis. Nulla tellus tortor, commodo ut ipsum vitae, suscipit congue turpis. Sed nec felis non neque convallis vulputate sit amet et lacus. 
                    Suspendisse varius molestie libero et molestie. Curabitur tincidunt arcu nisl, eu elementum sapien ultrices eget. Sed nec hendrerit urna. Nullam convallis malesuada turpis.
                </p>
            </div>
            
        </section>
    );

};

export default About;