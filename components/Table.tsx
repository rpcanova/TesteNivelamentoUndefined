import React from 'react'

const Table = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Transações Recentes</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">#</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Data</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Descrição</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Valor</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">1</td>
                    <td className="py-2 px-4 border-b border-gray-300">2024-08-12</td>
                    <td className="py-2 px-4 border-b border-gray-300">Lorem ipsum dolor</td>
                    <td className="py-2 px-4 border-b border-gray-300">R$150,00</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Completo</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2</td>
                    <td className="py-2 px-4 border-b border-gray-300">2024-08-11</td>
                    <td className="py-2 px-4 border-b border-gray-300">Lorem ipsum dolor</td>
                    <td className="py-2 px-4 border-b border-gray-300">R$500,00</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Completo</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">3</td>
                    <td className="py-2 px-4 border-b border-gray-300">2024-08-10</td>
                    <td className="py-2 px-4 border-b border-gray-300">Lorem ipsum dolor</td>
                    <td className="py-2 px-4 border-b border-gray-300">$75,00</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs">Pendente</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  )
}

export default Table