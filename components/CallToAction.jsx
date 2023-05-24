import React from 'react'
import CustomButton from './CustomButton'
function CallToAction() {
  return (
    <div className='p-8'>
         
        <section class="text-gray-600 body-font callto rounded-lg">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>
              <div className=' flex flex-col gap-8'>
                <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit </p>
                  <CustomButton
                          bgColor="bg-custom-green"
                          textColor="text-white"
                          lineColor="border-black"
                          opacity="opacity-1"
                        >
                          Click Me
                        </CustomButton>
              </div>

            </div>
          </div>
        </section>
         
    </div>
  )
}

export default CallToAction