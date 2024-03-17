import './education.css'
function Education(){
    return(
        <>

        <div className='eduss'>

        <p className='edus'>EDUCATION</p>
        <h1 className='tr'>Trying my best to learn</h1>

        <div className="grid md:grid-cols-3">
            <div className="educationbox">
                <h1 className='e' >Education</h1>
                <h1 className="har">Harvard University </h1>
                <p>Bachelor's degree in Psychology</p>
                <p> 2010-2013</p>
                <h1 className="newy">New York University </h1>
                <p>Master's degree in Psychology</p>
                <p>2010-2013</p>

                

            </div>

            <div className='educationbox'>
              <h1 className='e'>Licenses</h1>
              <h1  className='bal' >NBCC board license, 2013, NYC</h1>
              <h1 className='bal' >NBMTM board license, 2014, Washington DC</h1>
              <h1 className='bal' >NCBTMB board license, 2014, NYC</h1>

            </div>

            <div className='educationbox'>
                <h1 className='e'>Experience</h1>
                <h1 className='e hospi'>St Jude's Hospital</h1>
                <p>Psychology Department</p>
                <p>2008-2010</p>
                <h1 className='e hospi'>NYC Psychotherapy</h1>
                <p>Private psychology practice</p>
                <p>2014-present</p>

            </div>

        </div>
        
        </div>
        </>
    )
}

export default Education;