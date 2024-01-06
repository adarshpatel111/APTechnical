import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
function Service() {
  return (
    <>
      <div className="container mt-1">
        <h1 className="text-center mb-4">Our Services</h1>
        <div className="row gy-4">
          {
            Sdata.map((val, index) => {
              return <Card
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                work={val.work.slice(0, 120).concat("...")}
                visit={val.visit}
                btnname={val.btnname}
              />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Service
