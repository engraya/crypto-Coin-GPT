import React from 'react'
import coin from '../coin.png'
import currency from '../currency.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'

import NavBar from './NavBar';

export default function LandingPage() {
  return (
    <>
    <div className="h-full">
    <NavBar/>
      <section className='mt-24'>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <a href="#" class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                <Link to="/coins"><span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span class="text-sm font-medium">New Updates for Crypto Market! See what's new</span> </Link>
                <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential by Providing Latest CryptoCurrency Market Trends..!</h1>
            <p class="mb-8 text-lg font-normal text-black-500 lg:text-xl sm:px-16 lg:px-48 dark:text-dark-200">Our platform aggregates data for more than 10,502 coins and 400+ exchanges, providing independent and reliable information for our users.</p>
      
            <Link to="/coins"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button></Link>
        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
   
    </div>
<Footer/>
        </>
  )
}

