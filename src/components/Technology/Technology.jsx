import { useState, useEffect } from 'react'
import './technology.css'

function Technology(props) {
    const [technology, setTechnology] = useState()
    const [idPlace, setIdPlace] = useState(0)
    const [active, setActive] = useState(0)

    useEffect(() => {
        setTechnology(props.datos.technology);
    }, [])

    const handleClick = (setId) => {
        setIdPlace(setId)
        setActive(setId)
    }

    if (!technology) {
        return (
            <main className="technology"></main>
        )
    } else {
        return (
            <main className="technology">
                <h5><span>03</span> SPACE LAUNCH 101</h5>
    
                <div className="technology_content">
                    <div className="technology_dots">
                        <ul>
                            <li className={(active == 0) ? 'active' : ''} onClick={() => handleClick(0)}>1</li>
                            <li className={(active == 1) ? 'active' : ''} onClick={() => handleClick(1)}>2</li>
                            <li className={(active == 2) ? 'active' : ''} onClick={() => handleClick(2)}>3</li>
                        </ul>
                    </div>

                    <div className="technology_info">
                        <p>THE TERMINOLOGY…</p>
    
                        <h3>{technology[idPlace].name.toUpperCase()}</h3>
    
                        <p>{technology[idPlace].description}</p>
                    </div>
    
                    <div className="technology_img">
                        <img src={technology[idPlace].images.portrait} alt="Launch" />
                    </div>
                </div>
            </main>
        )
    }
}

export default Technology