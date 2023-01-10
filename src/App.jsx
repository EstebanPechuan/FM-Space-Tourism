import { useState, useEffect } from 'react'
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('./src/assets/js/data.json')
      .then(data => data.json())
      .then(data => {
        setData(data)
        setLoading(false)
        // console.log(data);
      })
    }, [])

  if (!loading) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
  
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/destination" element={<Destination datos={data} />}/>
              <Route path="/crew" element={<Crew datos={data} />}/>
              <Route path="/technology" element={<Technology datos={data} />}/>
              <Route path="*" element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App