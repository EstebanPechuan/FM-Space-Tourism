import { useState, useEffect } from 'react'
import './Destination.css'

function Destination(props) {
    const [destinations, setDestinations] = useState()
    const [idPlace, setIdPlace] = useState(0)
    const [active, setActive] = useState(0)
    
    useEffect(() => {
        setDestinations(props.datos.destinations)
    }, [])

    const handleClick = (setId) => {
        setIdPlace(setId)
        setActive(setId)
    }
    
    if (!destinations) {
        return (
            <main className="destination"></main>
        )
    } else {
        return (
            <main className="destination">
                <h5><span>01</span> PICK YOUR DESTINATION</h5>

                <div className="destination_content">
                    <div className="destination_img">
                        <img src={destinations[idPlace].images.png} alt={destinations[idPlace].name} />
                    </div>

                    <div className="destination_info">
                        <ul className='destination_navigation'>
                            <li className={(active == 0) ? 'active' : ''} onClick={() => handleClick(0)}>MOON</li>
                            <li className={(active == 1) ? 'active' : ''} onClick={() => handleClick(1)}>MARS</li>
                            <li className={(active == 2) ? 'active' : ''} onClick={() => handleClick(2)}>EUROPA</li>
                            <li className={(active == 3) ? 'active' : ''} onClick={() => handleClick(3)}>TITAN</li>
                        </ul>

                        <h2>{destinations[idPlace].name.toUpperCase()}</h2>

                        <p>{destinations[idPlace].description}</p>

                        <hr />

                        <div className="data">
                            <div className="data_distance">
                                <p>AVG. DISTANCE</p>

                                <h5>{destinations[idPlace].distance.toUpperCase()}</h5>
                            </div>

                            <div className="data_days">
                                <p>EST.TRAVEL TIME</p>

                                <h5>{destinations[idPlace].travel.toUpperCase()}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Destination