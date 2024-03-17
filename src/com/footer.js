import './footer.css'
function Footer(){
    return(
        <>
        <footer>
            <div className="grid md:grid-cols-3"> 
                <div className="box7">
                    <h1 className='pshelp'> PsychHelp</h1>
                    <p className="fop">Ester S. Dossenbach, therapist</p>

                </div>


                <div className='box7'>
                    <h1 className='fps'>My office</h1>
                    <h1 className='fps'>3721 Single Street</h1>
                    <h1 className='fps'>Quincy, MA 02169</h1>


                </div>

                <div className='box7'>
                    <h1>Contacts</h1>
                    <h1>email@example.com</h1>
                    <h1>+923163865813</h1>

                </div>

            </div>

        </footer>
        
        </>
    )
}

export default Footer;