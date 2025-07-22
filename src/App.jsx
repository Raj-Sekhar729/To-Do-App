// import React from 'react'
// import ToDo from './components/ToDo'

// const App = () => {
//   return (
//     <div className='bg-stone-900 grud py-4 min-h-screen'>
//       <ToDo/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import ToDo from './components/ToDo'

const App = () => {
  return (
    <div className='min-h-screen py-4 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-32 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/15 to-red-500/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Moving gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-full h-full bg-gradient-to-l from-transparent via-purple-300/5 to-transparent transform skew-y-12 animate-pulse" style={{animationDuration: '4s', animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      <ToDo/>
    </div>
  )
}

export default App