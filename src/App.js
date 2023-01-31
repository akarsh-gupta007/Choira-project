import React, { useState } from 'react'

import "./Style.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4"
import Footer from './Footer';

const App = () => {

  const [selectedValue, setSelectedValue] = useState("");





  return (
    <>

      <div className='main_container'>
        <div className="heading">
          <img src='https://choira.io/static/media/choria.96439620.svg' className="img" />
          <select onChange={(e) => { setSelectedValue(e.target.value) }}>
            <option value="component1">1</option>
            <option value="component2">2</option>
            <option value="component3">3</option>
            <option value="component4">4</option>
          </select>

          <div className='invite'>
            <span className='plus'>+</span>
            <span className='plus'>Invite</span>
          </div>
        </div>


        <div className='components'>
          {selectedValue === "component1" && <Component1 />}
          {selectedValue === "component2" && <Component2 />}
          {selectedValue === "component3" && <Component3 />}
          {selectedValue === "component4" && <Component4 />}
        </div>
        <Footer />

      </div>

    </>
  )
}

export default App