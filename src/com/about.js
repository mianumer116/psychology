import './about.css'
import Methods from './methods';
import Education from './education';
import Question from './question';
import Testimonial from './testimonials';
import Footer from './footer';
function About(){
    return(
        <>
        <div className='aboutc'>

        <p className='aboutme'>ABOUT ME</p>
        <h1 className='niceto'>Nice to meet you</h1>
        <div className='grid md:grid-cols-2'>
            <div className='boxabout'>
                <p className='aboutp'>My initial interest in psychotherapy started early on in high school when I discovered the world of psychology. Fast-forward a few years and I was picking cognitive behavioral therapy as my major at university. I find that psychotherapy has such a profound and positive impact on the psyche of any individual. </p>
                <p className='aboutp ptwo'>In my work, I like to place emphasis on self-reliance and self-discovery, meaning that I prefer to take the role of a facilitator or a mentor, rather than being the one with the answers. My methodology follows the current research in the field overall, and I take care of keeping on top of all new developments in the field. </p>

            </div>

            <div className='boxabout'>
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1078,fit=crop/dossenbach0a5yk/about-dOqEMZxoVjuRzwLG.png"/>

            </div>

        </div>
        </div>
        <Methods/>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/dossenbach0a5yk/about2-d95PMZ3x7RU77M9x.png"/>
        <Education/>
        <Question/>
        <Testimonial/>
        <Footer/>
        </>
    )
}

export default About;