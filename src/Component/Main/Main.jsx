import React from 'react'
import bg from '../../assets/1910253.jpg'
import './main.css'

const Main = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-3 h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-center">
        <img src="https://placehold.co/300x500" alt="Ed's avatar" className="rounded-lg shadow-xl" />
      </div>

      <div className="col-span-2 flex items-center justify-start">
        <div className=" bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">Hi, I'm Ed 👋</h1>
          <p className="text-lg text-gray-300">
            I'm a backend-focused developer who loves clean architecture, microservices,
            and solving real-world problems. Currently building internal document
            software for notary offices.
          </p>
        </div>
      </div>
    </section>

  )
}

export default Main