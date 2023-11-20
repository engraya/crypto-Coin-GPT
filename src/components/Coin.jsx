import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function Coin() {
    let { id } = useParams();

    const [coin, setCoin] = useState({
        symbol : "",
        name : "",
        rank : "",
        price_usd : "",
        volume24 : 0,
    });

    useEffect(() => {
        axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
            .then((response) =>{
                setCoin({
                    symbol : response.data[0].symbol,
                    name :  response.data[0].name,
                    rank :  response.data[0].rank,
                    price_usd :  response.data[0].price_usd,
                    volume24 :  response.data[0].volume24,
                })

            })
    }, [])

  return (
    <div>
      <h1>Coin Information</h1>
            <h3><small>Symbol</small> : {coin.symbol}</h3>
            <h3><small>Name</small> : {coin.name}</h3>
            <h3><small>Rank</small> : {coin.rank}</h3>
            <h3><small>Price in USD</small> : {coin.price_usd}</h3>
            <h3><small>Volume</small> : {coin.volume24}</h3>
    </div>
  )
}
