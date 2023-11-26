import React from 'react'

function BenifitsItem({benifitName ,  benifitImg , benifitText}) {
  return (
    <div className='flex flex-col w-[15rem]  items-center'>
        <img src={benifitImg} className='w-20 object-contain min-h-[120px] min-w-24 object-center'></img>
        <h3 className='text-lg font-bold'>{benifitName}</h3>
        <h4 className='text-center'>{benifitText}</h4>
    </div>
  )
}

export default BenifitsItem