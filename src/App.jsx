import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

function App() {
 

  return (
    <main className='flex'>
      <SideBar />
     <div className='flex flex-col flex-1 relative'>
     <Navbar />
     </div>
 

    </main>
  
  )
}

export default App
