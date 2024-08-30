import React from 'react'
import { MdOutlinePersonSearch } from "react-icons/md";


const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type='text' placeholder='Search' className='input input-bordered rounded-full' />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <MdOutlinePersonSearch className='w-7 h-7 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput

// Starter code for searchinput
// import React from 'react'
// import { MdOutlinePersonSearch } from "react-icons/md";


// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//       <input type='text' placeholder='Search' className='input input-bordered rounded-full' />
//       <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <MdOutlinePersonSearch className='w-7 h-7 outline-none'/>
//       </button>
//     </form>
//   )
// }

// export default SearchInput