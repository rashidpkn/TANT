import React, { useEffect, useState } from 'react'
import CurrentStage from './components/CurrentStage'
import NextStage from './components/NextStage'
import Progress from './components/Progress'
import CountDown from './components/CountDown'
import {  useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

import Web3 from 'web3';
import { api } from '../../util/api'


export default function HomePage():React.ReactElement {

    const [currency, setCurrency] = useState('ETH')
    const [amount, setAmount] = useState(0.1)


    const { open }:{open:any} = useWeb3Modal()
    const { address,isConnected } = useAccount()
    const [web3, setWeb3]:any = useState(null);
    
    

    useEffect(() => {
        const {ethereum}:any = window
        if (ethereum) {
          const provider:any = new Web3(ethereum);
          setWeb3(provider);
        }
          
      }, []);


    const handleReceivePayment = async () => {
        if (web3) {
console.log(web3.utils.toWei(0.1, 'ether'));
            try {
                
                await web3.eth.sendTransaction({
                  from:address,
                  to:'0xa4E2CcBB58894C5e1511cf483b62d9Cee532d54C',
                  value: web3.utils.toWei(0.000332, 'ether')
                }).on('confirmation' , (confirmationNumber:any, receipt:any)=>{
                  console.log(confirmationNumber);
                  console.log('Transaction confirmed:', receipt);
                }).on('error',(error:any)=>{
                  console.error('Transaction error:', error);
                })
            } catch (error) {
                console.log('Hello');
                // console.log(error);
            }
           
        }
      };

  return (

    <main className='h-screen w-full bg-black/90 flex justify-center items-center  text-white'>
        <div className="max-w-lg w-full  mx-5 m-auto p-5 rounded-2xl bg-[#101012] grid grid-cols-4 gap-5">
            <h1 className='col-span-full text-2xl' >Buy TANT Token Now</h1>
            <CurrentStage/>
            <NextStage />
            
            <Progress />
            <p className='col-span-full text-[#848385] text-center'>Unit Price Increase</p>

            <CountDown />

            <p className='col-span-full text-[#848385] text-center text-lg'>Connect Wallet</p>
            
            <select className='h-12 col-span-full rounded-xl bg-[#171719] px-5 outline-none' onChange={e=>setCurrency(e.target.value)}>
                <option value="ETH">ETH</option>
            </select>

            <input type="number"  className='col-span-2 h-14 px-2 bg-transparent border-[#171719] border-2 rounded-xl' placeholder={`${currency} amount`} value={amount} onChange={e=>setAmount(Number(e.target.value))}/>
            <input type="text"  className='col-span-2 h-14 px-2 bg-transparent border-[#171719] border-2 rounded-xl' placeholder='TANT amount' value={amount/0.02} readOnly/>
            
            {!isConnected ? <button className='h-14 bg-[#0268ff] col-span-full rounded-xl font-semibold text-2xl' onClick={()=>open()}>
                Connect Wallet
            </button> : <button className='h-14 bg-[#0268ff] col-span-full rounded-xl font-semibold text-2xl' onClick={()=>open()}>
                Access Wallet
            </button>}

            {isConnected && <button className='h-14 bg-green-400 col-span-full rounded-xl  font-semibold text-2xl text-black' onClick={()=>handleReceivePayment()}>
                Approve Payments
            </button>}

            { <button className='h-14 bg-green-400 col-span-full rounded-xl  font-semibold text-2xl text-black' onClick={async ()=>{
                try {
                    await api.post('/transactions',{walletAddress:address,totalToken:amount/0.02})
                    alert("Thank you for purchasing tokens")
                } catch (error) {
                    alert("somthing is error")
                }

                }}>
                Test
            </button>}


        </div>
    </main>
  )
}
