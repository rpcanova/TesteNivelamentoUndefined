import React from 'react'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Turmas</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Professores</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">ERP</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default Cards