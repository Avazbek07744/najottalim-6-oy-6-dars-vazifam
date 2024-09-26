import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { brends, colors, years } from './constants/app'

const App = () => {
  function handelSubmit(event) {
    event.preventDefault()

    let res = new FormData(event.target)
    console.log(res.get('brend'),res.get('name'),res.get('color'),res.get('year'));
  }
  return (
    <div>
      <Navbar />
      <main>
        <div className="base-container h-full mb-[190px] flex justify-center">
          <form onSubmit={handelSubmit} className=' w-full max-w-96 flex flex-wrap gap-5'>
            <h2 className='font-semibold text-2xl mb-5'>Yangi mashina qo'shish</h2>
            <input
            name='name'
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select name='brend' defaultValue='Mashina rusumini tanlang*' className="select select-bordered w-full">
              <option disabled>Mashina rusumini tanlang*</option>
                {
                brends.map((brend,i)=>{
                  return <option key={i}>{brend}</option>
                })
              }
            </select>
            
            <select name='color' defaultValue='Mashina rangini tanlang*' className="select select-bordered w-full">
              <option disabled>Mashina rangini tanlang*</option>
                {
                colors.map((color,i)=>{
                  return <option key={i}>{color}</option>
                })
              }
            </select>

            <select name='year' defaultValue='Mashina yilini tanlang*' className="select select-bordered w-full">
              <option disabled>Mashina yilini tanlang*</option>
                {
                years.map((year,i)=>{
                  return <option key={i}>{year}</option>
                })
              }
            </select>

            <button className="btn btn-primary w-full">Qo'shish</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
