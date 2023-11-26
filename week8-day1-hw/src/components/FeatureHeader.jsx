import React from 'react'
import FeatureItem from './FeatureItem'

function FeatureHeader() {
  return (
    <div className='w-full  bg-[#d6d6d6] flex justify-center pt-10 gap-5  item-center flex-wrap pb-10'>
     <FeatureItem featureName="Feature 1" featureImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" featureText="Talk about some of the details of your offer with a focus on the value people get back."></FeatureItem>
     <FeatureItem featureName="Feature 2" featureImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" featureText="Is there a pain point that your product or service resolves? Tell visitors about it here."></FeatureItem>
     <FeatureItem featureName="Feature 3" featureImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" featureText="Alternatively, you could use this section to address some frequently asked questions."></FeatureItem>

    </div>
  )
}

export default FeatureHeader