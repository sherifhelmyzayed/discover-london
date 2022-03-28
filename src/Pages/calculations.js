import React from 'react'
import listings from '../shared/airbnb-listings (1).json'


const calculations = () => {
    const importedData = listings
    .filter(item => item.fields.geolocation[0] > 51.261667988171695 && item.fields.geolocation[0] < 51.489119889002126 && item.fields.geolocation[1] > -0.32688691447197016 && item.fields.geolocation[1] < -0.01115745233397547)
    .sort((a, b)=>(b.fields.number_of_reviews - a.fields.number_of_reviews))
    .slice(0, 20)
  return (
      <>
      {(importedData)?(
          importedData.map((list, key)=>(
              <div>{list.fields.number_of_reviews}</div>
          ))
      ):''}
      <div>calculations</div>
      </>
  )
}

export default calculations