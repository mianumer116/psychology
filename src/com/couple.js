import './couple.css'
function Couple(){
    return(
        <>
        <div className='grid lg:grid-cols-2'>
            <div className='box3 coupleb'>
                <h1 className='l'>02</h1>
                <h1 className='l'>Couples</h1>
                <h1 className='l'>Couples counseling</h1>
                <p className='couplep'>Relationship therapy helps people  to communicate their feelings and needs to each other without fear of being criticized or attacked.</p>
                <h1 className='vs'>$ 40 per hour</h1>
                <h1 className='learnm'>Learn More</h1>

            </div>


            <div className='box3 '>
            <img className='coupleimg' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=708,fit=crop/dossenbach0a5yk/service3-AE0yE4vkXjFRLE3k.png"/>

            </div>

        </div>
        
        </>
    )
}
export default Couple;