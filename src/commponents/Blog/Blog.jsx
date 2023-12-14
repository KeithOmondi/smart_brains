import React from 'react'
import { Link } from 'react-router-dom'
import { card } from '../../static/data'


const Blog = () => {
  return (
    <div className="container">
    <div className="flex flex-wrap justify-center items-center">
      <h2 className="text-center mt-6 w-full text-2xl font-bold">
        LATEST BLOGS
      </h2>

      {card.map((i, index) => (
        <Link to="/" key={index} className="w-full md:w-1/3 p-2">
          <div className="w-full h-[300px] rounded-lg shadow-sm overflow-hidden bg-slate-500">
            {/* Image at the top */}
            <img
              src={i.cover}
              alt=""
              className="w-full h-[170px] object-cover rounded-t-lg"
            />

            <div className="p-4">
              {/* Details under the image */}
              <div className="text-black text-xl font-semibold mb-3">
                <h4 className="text-white">{i.name}</h4>
              </div>
              
              <div className="mt-4">{/* Additional details if needed */}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Blog
