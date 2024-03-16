import './testimonial.css'
function Testimonial(){
    return(
        <>
        <div className='boxf'>

       
        <div className='testi'>

        <p>TESTIMONIALS</p>
        <h1 className='hclient'>Happy clients</h1>
        </div>
        <div className="grid md:grid-cols-2 maintest">
            <div className="box4">
                <h1 className='dolo'>Doloress K.</h1>
                <p className='tep'>Therapy has really helped me overcome some past trauma I had been keeping under a lid for a long time. Now, I feel happier and more confident in my life, and feel like I can walk with my head held high.</p>

            </div>

            <div className='box4'>
                <h1 className='dolo'>Anthony M.</h1>
                <p className='tep'>Coming from a competitive sports background, the injury that ended up making me give up my career was a hard blow. With therapy, I was able to start building my identity around other things than just sport. </p>

            </div>

        </div>
        </div>
        </>
    )
}

export default Testimonial;