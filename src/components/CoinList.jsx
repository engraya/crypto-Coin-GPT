import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
    <div>
         <div id='header'>
            <h1>Crypto Coin Base GPT</h1>
        </div>
      <div className='coin-list'>
        {coinList.map((coin) => {
            return <div onClick={() => {
                navigate(`/coin/${coin.id}`)
            }}>
                <h3><small>Symbol</small> : {coin.symbol}</h3>
                <h3><small>Name</small> : {coin.name}</h3>
                <h3><small>Rank</small> : {coin.rank}</h3>
                <h3><small>Price in USD</small> : {coin.price_usd}</h3>
                <h3><small>Volume</small> : {coin.volume24}</h3>
            </div>
        })}
      </div>
    </div>
  )
}
