import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { PaperClipIcon } from '@heroicons/react/20/solid'
export default function Coin() {
    let { id } = useParams();

    const [coin, setCoin] = useState({
        symbol : "",
        name : "",
        rank : "",
        price_usd : "",
        volume24 : 0,
        volume24_native : '',
        csupply : 0,
        price_btc : 0,
        tsupply : 0,
        msupply : 0,
        percent_change_24h : 0,
        percent_change_1h : 0,
        percent_change_7d : 0,
        market_cap_usd : 0,
        nameid : "",
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
                    nameid :  response.data[0].name_id,
                    market_cap_usd :  response.data[0].market_cap_usd,
                    percent_change_7d :  response.data[0].percent_change_7d,
                    percent_change_24h :  response.data[0].percent_change_24h,
                    msupply :  response.data[0].msupply,
                    tsupply :  response.data[0].tsupply,
                    price_btc :  response.data[0].price_btc,
                    csupply :  response.data[0].csupply,
                    volume24_native :  response.data[0].volume24_native,
                })

            })
    }, [])

  return (
    <div>
            <div className="px-4 m-5 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white-900">Coin Information</h3>
      </div>
      <div className="mt-3 border-t border-white-100">
        <dl className="divide-y divide-white-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Name</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Name_ID</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.name_id}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin ID</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.id}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Symbol</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.symbol}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Ranking</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.rank}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Price in USD</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.price_usd}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Percent Change_24h</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.percent_change_24h}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Percent Change_1h</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.percent_change_1h}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Percent Change_7d</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.percent_change_7d}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Price_BTC</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.price_btc}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Market Cap_USD</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.market_cap_usd}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Volume24</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.volume24}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin Volume24_native</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.volume24_native}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin C_Supply</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.csupply}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin T_Supply</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.tsupply}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">Coin M_Supply</dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{coin.msupply}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          </div>
        </dl>
      </div>
    </div>
  )
}
