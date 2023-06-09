import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className='mt-2'>
      <Link to ="/donation">
      <button type="button" className="text-white m-auto bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm fpx-5 py-2.5 text-center mr-12 mb-4 mt-4 p-40 pb-12 pt-12">Donate</button>
      </Link>
      <Link to ="/receive">
      <button type="button" className="text-white m-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm fpx-5 py-2.5 text-center mr-12 mb-4  p-40 pb-12 pt-12">Receive</button>
      </Link>
      <Link to ="/history">
      <button type="button" className="text-white m-auto bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm fpx-5 py-2.5 text-center mr-12 mb-4  p-40 pb-12 pt-12">All-Data</button>
      </Link>
      
    </div>
  )
  
}

export default Card
