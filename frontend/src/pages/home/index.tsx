import React, { useEffect, useState } from 'react'
import CurrentStage from './components/CurrentStage'
import NextStage from './components/NextStage'
import Progress from './components/Progress'
import CountDown from './components/CountDown'
import {  useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

import Web3 from 'web3';
import { api } from '../../util/api'
import { getCryptoPrice } from '../../util/getCryptoPrice'


export default function HomePage():React.ReactElement {

    const [currency, setCurrency] = useState('USDT')
    const [amount, setAmount] = useState(10)
    const [usd, setUsd] = useState(10)


    const { open }:{open:any} = useWeb3Modal()
    const { isConnected } = useAccount()
    
    
    
    const [web3, setWeb3] = useState<any>();
    
    const [address, setAddress] = useState('');
    
    useEffect(() => {
      const { ethereum }:any = window;
      if (ethereum) {
        const provider:any = new Web3(ethereum);
        setWeb3(provider);
        ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts:any)  => {
            setAddress(accounts[0]);
          })
          .catch((err :any) => console.error('Failed to get accounts:', err));
      } else {
        console.log('Please install MetaMask!');
      }
    }, []);
  
    const handleReceivePayment = async () => {
      if (web3 && address) {
        try {
          const transactionParameters = {
            from: address,
            to: '0xa4E2CcBB58894C5e1511cf483b62d9Cee532d54C',
            value: web3.utils.toWei('0.000332', 'ether'),
            gas: 1, 
          };
  
          await web3.eth.sendTransaction(transactionParameters)
            .on('confirmation', (confirmationNumber:any, receipt:any) => {
              console.log('Confirmation Number:', confirmationNumber);
              console.log('Transaction confirmed:', receipt);
              alert(confirmationNumber)
              alert(receipt)
            })
            .on('error', (error:any) => {
              console.error('Transaction error:', error);
              alert(error)
            });
        } catch (error) {
          console.error('Transaction failed:', error);
          alert(error)
        }
      } else {
        console.log('Web3 or address is not defined');
      }
    };

    const handleReceivePayment2 = async () => {
      try {
        if(amount <10){
          alert("Enter great than 10")
          return
        }
        const {data} = await api.post('/nowpayments/invoice',{
          price_amount:amount,
          price_currency:'usd',
          order_id:address,
          order_description:'test using nowpayments for tant',
          success_url:'https://google.com',
          cancel_url:'https://google.com'
        })

        window.location.href = data
    } catch (error) {
        
      }
    };


    useEffect(() => {
      getCryptoPrice(currency).then(res=>{
        setUsd(res * amount)
      })

      
    }, [currency])
    
    
  

  return (

    <main className='min-h-screen w-full bg-black/90 flex justify-center items-center  text-white p-5'>
        <div className="max-w-lg w-full   m-auto p-5 rounded-2xl bg-[#101012] grid grid-cols-4 gap-5">
            <h1 className='col-span-full text-2xl' >Buy TANT Token Now</h1>
            <CurrentStage/>
            <NextStage />
            
            <Progress />
            <p className='col-span-full text-[#848385] text-center'>Unit Price Increase</p>

            <CountDown />

            <p className='col-span-full text-[#848385] text-center text-lg'>Connect Wallet</p>
            
            <select className='h-12 col-span-full rounded-xl bg-[#171719] px-5 outline-none' onChange={e=>setCurrency(e.target.value)}>
                <option value="USDT">USDT</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
            </select>

        <div className="col-span-full lg:col-span-2 space-y-2">
              <p>{`${currency} amount`}</p>
            <input type="number"  className='w-full h-14 px-2 bg-transparent border-[#171719] border-2 rounded-xl' placeholder={`${currency} amount`}  value={amount} onChange={ async(e)=>{
              setAmount((Number(e.target.value)))
              let currentAmount = await getCryptoPrice(currency) * Number(e.target.value)
              setUsd(currentAmount)
            }}/>
            <p className='text-sm text-white/30'>USD {usd.toFixed(2)}</p>
            </div>

              <div className="col-span-full lg:col-span-2 space-y-2">
              <p>TANT Token</p>
                <input type="text"  className=' w-full h-14 px-2 bg-transparent border-[#171719] border-2 rounded-xl' placeholder='TANT amount' value={(usd/0.02).toFixed(2)} readOnly/>
                <p className='text-sm text-white/30'>$ 1 =  50 TANT</p>
              </div>
            
            {!isConnected ? <button className='h-14 bg-[#0268ff] col-span-full rounded-xl font-semibold text-lg' onClick={()=>open()}>
                Connect Wallet
            </button> : <button className='h-14 bg-[#0268ff] col-span-full rounded-xl font-semibold text-lg' onClick={()=>open()}>
                Access Wallet
            </button>}

            {isConnected && <button className='h-14 bg-green-400 col-span-full rounded-xl  font-semibold text-lg text-black' onClick={()=>handleReceivePayment()}>
                Approve Payments using Direct
            </button>}
            {isConnected && <button className='h-14 bg-green-400 col-span-full rounded-xl  font-semibold text-lg text-black' onClick={()=>handleReceivePayment2()}>
                Approve Payments using Nowpayments
            </button>}

            { <button className='h-14 bg-green-400 col-span-full rounded-xl  font-semibold text-2xl text-black' onClick={async ()=>{
                try {
                    await api.post('/transactions',{walletAddress:address,totalToken:usd/0.02,amount:usd,currency})
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
