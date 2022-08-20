import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Skils() {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((response) => { setSkills(response.data) })
      .catch((error) => { console.log(error) })
  }, [])
  return (
    <div className='row'>
      {skills.map(item => (
        <div key={item.Id} className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
          <div class="card" >
            <img src={item.image} class="card-img-top" alt={`${item.name} logo`} />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              {/* <p class="card-text"> {item.description}</p> */}
              <Link to={ `/skills/${item.id}`} class="btn btn-primary">Go somewhere</Link>

            </div>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Skils