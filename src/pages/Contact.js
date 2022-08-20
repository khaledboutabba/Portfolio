import React from 'react'

function Contact() {
  const contactInformation = {
email:'medkhaled.boutabba@gmail.com',
phoneNumber : '+216 26 345 900',
adress:{
  city:'Sfax',
  country:'Tunisia',
  street:'Airport road',
  postalCode:3064,
}
}
  return (
    <div>
    <p> <i class="bi bi-envelope"></i> {contactInformation.email} </p>
    <p> <i class="bi bi-phone"></i> {contactInformation.phoneNumber} </p>
    <p> <i class="bi bi-geo-alt"></i> {contactInformation.adress.street}; {contactInformation.adress.postalCode} {contactInformation.adress.city}; {contactInformation.adress.country} </p>
    </div>
  )
}

export default Contact