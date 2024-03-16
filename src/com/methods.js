import './methods.css';

function Methods() {
    return (
        <>
            <div className='mainmethod'>
                <div className="met">
                    <p>QUALIFICATIONS</p>
                    <h1 className='mymethod'>My methods</h1>
                </div>
                <div className="methods grid md:grid-cols-4 mainbox">
                    <div className='box1'>
                        <div className="fontf">&#127802;</div>
                        <h1 className='bh'>Humanistic therapy</h1>
                        <p className='mainp'>In humanistic therapy, the main focus is on a person's capacity to make rational choices and develop.</p>
                    </div>
                    <div className='box1'>
                        <div className="fontf">&#127802;</div>
                        <h1 className='bh'>Psychoanalysis</h1>
                        <p className='mainp'>In psychoanalysis, we focus on changing problematic behaviors by understanding the unconscious meanings and motivations behind them.</p>
                    </div>
                    <div className='box1'>
                        <div className="fontf">&#127802;</div>
                        <h1 className='bh'>Cognitive therapy</h1>
                        <p className='mainp'>In cognitive therapy, the focus is on what people think rather than what they do.</p>
                    </div>
                    <div className='box1'>
                        <div className="fontf">&#127802;</div>
                        <h1 className='bh'>Behavior therapy</h1>
                        <p className='mainp'>In behavior therapy, the main focus is on learning's role in developing both normal and abnormal behaviors.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Methods;
