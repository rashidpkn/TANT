import React from 'react'
import Countdown from 'react-countdown'

export default function CountDown():React.ReactElement {
  return (
  <Countdown
    date={new Date('6/1/2024')}
    renderer={renderer}
  />
  )
}


const renderer = ({days ,hours, minutes, seconds }:any):React.ReactElement => {
    return(

        <>
    <div className="p-5 flex flex-col justify-center items-center rounded-xl bg-[#171719]">
                <p className='text-3xl font-medium'>{days}</p>
                <p className='text-[#848385]'>Day</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center rounded-xl bg-[#171719]">
                <p className='text-3xl font-medium'>{hours}</p>
                <p className='text-[#848385]'>HOURS</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center rounded-xl bg-[#171719]">
                <p className='text-3xl font-medium'>{minutes}</p>
                <p className='text-[#848385]'>MINUTES</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center rounded-xl bg-[#171719]">
                <p className='text-3xl font-medium'>{seconds}</p>
                <p className='text-[#848385]'>SECONDS</p>
            </div>
    </>
    )
    
    }
  
  
