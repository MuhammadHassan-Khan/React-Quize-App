
import Button from './Button'

export default function Navbar() {
  return (<>
  <div className='bg-black text-white  flex justify-around text--center py-4 ' >  
   <div className='pt-2  font-bold text-xl'  >Logo</div>
   <div><Button lables="Login" /></div>
  </div>
  </>
  )
}
