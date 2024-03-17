import './home.css'
import Methods from './methods'
import Individual from './individual'
import Couple from './couple'
import Testimonial from './testimonials'
import Question from './question'
import Welbing from './welbeing'
import Footer from './footer'
function Home() {
    return (
        <>
            <main>


                <div className="homeimg ">
                    <div className="fom">


                        <p>PSYCHOTHERAPIST</p>
                        <h1 className='homeester'>Ester S.</h1>
                        <h1 className='homeester'>Dossenbach</h1>

                        <p className='homep  text-lg text-justify'>I'm a board-certified psychotherapist specializing in individual and relationship therapy. My mission is to help people live happier, more fulfilling lives.</p>
                        <button className='homebu'>About Me</button>
                    </div>


                </div>
                <Methods />
                <Individual />
                <Couple />
                <Testimonial/>
                <Question/>
                <Welbing/>
                <Footer/>
            </main>
        </>
    )
}
export default Home 