import React, { useEffect } from 'react';

const Waste = ({ talonIsClicked }) => {

  useEffect(() => {
    if (talonIsClicked) {
      console.log('heyoo');
    }
  })

  return (
    <div className="waste">
      
    </div>
  )
}

export default Waste;