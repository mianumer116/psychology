import './welbeing.css'
function Welbing(){
    return(
        <>
        <p className="blog">BLOG</p>
        <h1 className="tools">Tools for wellbeing</h1>
        <div className="grid md:grid-cols-2">
            <div className="box6">
                <img className='welimg' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/dossenbach0a5yk/blog2-dOqEMaV3vWUyJ3x2.png"/>
                <p>ANXIETY</p>
                <h3 className='brek'>How to Break Free From Paralyzing Anxiety</h3>
                <p >Anxiety disorder can have a seriously impairing effect on your life, but it doesn't have to.</p>
                <p className='wp'>Ester S. Dossenbach</p>
                <p className='wp'>1/1/2025</p>
            </div>


            <div className='box6'>
                <img className='welimg' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/dossenbach0a5yk/blog1-m7VZ23OB07Iew6PN.png'></img>
                <p>RELATIONSHIPS</p>
                <h1 className='brek'>Fearful-Avoidant Attachment Patterns</h1>
                <p>Nobody likes to be afraid, but sometimes the way we avoid being afraid can result in problems in our relationships.</p>
                <p className='wp'>Ester S. Dossenbach</p>
                <p className='wp'>1/1/2025</p>
            </div>

        </div>
        </>
    )
}
export default Welbing;