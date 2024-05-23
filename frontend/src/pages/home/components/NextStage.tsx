import React from 'react'

export default function NextStage():React.ReactElement {
  return (
    <div className="col-span-full lg:col-span-2 p-3 bg-[#171719] rounded-2xl space-y-2">
                <p className='text-lg text-white/50'>NEXT STAGE PRICE</p>
                <div className="flex justify-between items-center">
                    <p className='text-2xl font-bold'>$ 0.025</p>
                    <p className='text-green-400'>25%</p>
                </div>
            </div>
  )
}
