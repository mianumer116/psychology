import './question.css'
function Question(){
    return(
        <>
        <div className="grid md:grid-cols-2">
            <div className="box5 cag">
                <h1 className='ques'>Have any </h1>
                <h1 className='ques'>questions?</h1>
                <p>If you have any questions about the therapies, feel free to contact us.</p>
                <h1 className='con'>contact Us</h1>
            </div>

            <div className='box5'>
                <img className='bfi' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=765,fit=crop/dossenbach0a5yk/service4-Yg2X79DKWxiWLDk0.png"></img>

            </div>

        </div>
        </>
    )
}
export default Question;