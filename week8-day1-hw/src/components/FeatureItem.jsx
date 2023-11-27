import React from 'react'

function FeatureItem({featureImg , featureName , featureText}) {
  return (
    <div className='flex flex-col justify-center items-center w-96 '>
        <img  className='w-[18rem] rounded' src={featureImg}></img>
        <h1 className='font-bold mt-5'>{featureName}</h1>
        <h1 className='w-[60%] text-center'>{featureText}</h1>
    </div>
  )
}

export default FeatureItem