import { useState, useEffect } from 'react'
import './Crew.css'
import Douglas from '../../assets/img/crew/image-douglas-hurley.png'

function Crew(props) {
    const [crew, setCrew] = useState()
    const [idPlace, setIdPlace] = useState(0)
    const [active, setActive] = useState(0)

    useEffect(() => {
        setCrew(props.datos.crew);
        // console.log(crew);
    }, [])

    const handleClick = (setId) => {
        setIdPlace(setId)
        setActive(setId)
    }

    if (!crew) {
        return (
            <main className="crew"></main>
        )
    } else {
        console.log(crew[idPlace]);
        return (
            <main className="crew">
                <div className="crew_content">
                    <div className="crew_info">
                        <h5><span>02</span> MEET YOUR CREW</h5>
    
                        <h4>{crew[idPlace].role.toUpperCase()}</h4>
    
                        <h3>{crew[idPlace].name.toUpperCase()}</h3>
    
                        <p>{crew[idPlace].bio}</p>

                        <div className="crew_dots">
                            <span onClick={() => handleClick(0)} className={(active == 0) ? 'active' : ''}></span>
                            <span onClick={() => handleClick(1)} className={(active == 1) ? 'active' : ''}></span>
                            <span onClick={() => handleClick(2)} className={(active == 2) ? 'active' : ''}></span>
                            <span onClick={() => handleClick(3)} className={(active == 3) ? 'active' : ''}></span>
                        </div>
                    </div>
    
                    <div className="crew_img">
                        <img src={crew[idPlace].images.png} alt="Douglas" />
                    </div>
                </div>
            </main>
        )
    }
}

export default Crew