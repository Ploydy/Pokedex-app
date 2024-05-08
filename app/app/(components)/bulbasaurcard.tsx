import React from 'react'
import Image from "next/image";
import Bulbasaur from '../(gallery)/001.jpg'

export default function BulbasaurCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-300 ml-10 mt-10">
      <Image className="w-full" src={Bulbasaur} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <h1 className="text-4xl font-bold drop-shadow-2xl mb-2">Bulbasaur</h1>
        <p className="text-black text-base">
        For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.
        </p>
        <p className='mt-4'>
          Type: 
          <button className='px-5 mx-2 bg-green-800 rounded hover:bg-green-600 transition'>Grass</button>
          <button className='px-5 mx-2 bg-violet-800 text-white rounded hover:bg-violet-600 transition'>Poison</button>
        </p>
      </div>

    </div>
  )
}