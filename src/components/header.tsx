
import { Link } from 'react-router'
import { ModeToggle } from './mode-toggle'
import { CitySearch } from './city-search'
 


const Header = () => {
  return (
  <header className = 'sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 '>
     <div className=' container mx-auto flex h-16 items-center justify-between px-4'>
      <Link to = '/'>
      <img  src ="./logo2.png" alt = "weather-app-logo" className='h-14'/>
      </Link>
       <div>
            {/* search */}
           <CitySearch/>


          <ModeToggle /> 
       </div>
        
         </div>
  </header>
  )
}

export default Header