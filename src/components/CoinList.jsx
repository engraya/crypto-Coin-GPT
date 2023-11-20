import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import coin from '../coin.png'
import currency from '../currency.png'
import Footer from './Footer'
import NavBar from './NavBar';
export default function CoinList() {
    const [coinList, setCoinList] = useState([])

    let  navigate  = useNavigate();

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/?start=100&limit=100')
            .then((reponse) =>{
                setCoinList(reponse.data['data'])
            })
    }, [])

  return (
    <>
    <div className='h-full'>
    <NavBar/>
      <div className='coin-list mt-9 mb-12'>
        {coinList.map((coin) => {
            return <div onClick={() => {
                navigate(`/coin/${coin.id}`)
            }}>
                <h1>{coin.symbol}</h1>
                <h3>{coin.name}</h3>
                <button type="button" class="text-white mt-8 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Info</button>
            </div>
        })}
      </div>
      <Footer/>
    </div>
       
    </>

  )
}
