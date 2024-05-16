import React from 'react'

export default function Progress():React.ReactElement {
  return (
    <div className="col-span-full">
                <div className="w-full rounded-full h-6 bg-[#1d1d1f] overflow-hidden">
                    <div className="w-[53%] h-full bg-[#0d85b3] rounded-full text-right text-white px-5">53%</div>
                </div>
                <div className="flex justify-between text-[#848385]">
                    <p>Amount Raised</p>
                    <p>$500</p>
                </div>
            </div>
  )
}
