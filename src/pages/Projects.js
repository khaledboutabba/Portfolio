import React from 'react'

const PROJECTS = [
  {
    title: 'pricing',
    description: 'Pricing section with 3 plans',
    url: 'https://khaledboutabba.github.io/pricing/',
    githubId: 'pricing',
  },
  {
    title: 'business land',
    description: 'Web page developed with only HTML and CSS',
    url: 'https://khaledboutabba.github.io/business-land',
    githubId: 'business-land',
  },

]

function Pojects() {
  return (
    <div>
      {PROJECTS.map(item => (
        <div key={item.githubId} style={{ border: 'solid 1px black', margin: 10}}>
          <h1> {item.title} </h1>
          <p>{item.description}</p>
          <a href={item.url} target='_blank'>Preview</a>
          <h6> {item.githubId} </h6>
        </div>
      ))}
    </div>
  )
}

export default Pojects