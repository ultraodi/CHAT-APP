import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96-auto'>
      <div className='w-full p-6 bg-blue-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-500'> CUChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor='fullname' className='label p-2'>
              <span className='text-base label-text text-gray-300'>Full Name</span>
            </label>
            <input id='fullname' type='text' placeholder='James Smith' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor='username' className='label p-2'>
              <span className='text-base label-text text-gray-300'>Full Name</span>
            </label>
            <input id='username' type='text' placeholder='jamesmith' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor='password' className='label'>
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input id='password' type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor='confirmpassword' className='label'>
              <span className='text-base label-text text-gray-300'>Confirm Password</span>
            </label>
            <input id='confirmpassword' type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
          </div>

          <GenderCheckbox/>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

          <div className='text-center'>
            <a href='#' className='text-sm text-center hover:underline hover:text-blue-600 mt-4 inline-block'>
              Already have an account
            </a>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Signup


// STARTER CODE FOR SIGNUP component
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96-auto'>
//       <div className='w-full p-6 bg-blue-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 '>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Sign Up <span className='text-blue-500'> CUChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label htmlFor='fullname' className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Full Name</span>
//             </label>
//             <input id='fullname' type='text' placeholder='James Smith' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor='username' className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Full Name</span>
//             </label>
//             <input id='username' type='text' placeholder='jamesmith' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor='password' className='label'>
//               <span className='text-base label-text text-gray-300'>Password</span>
//             </label>
//             <input id='password' type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor='confirmpassword' className='label'>
//               <span className='text-base label-text text-gray-300'>Confirm Password</span>
//             </label>
//             <input id='confirmpassword' type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
//           </div>

//           <GenderCheckbox/>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//           </div>

//           <div className='text-center'>
//             <a href='#' className='text-sm text-center hover:underline hover:text-blue-600 mt-4 inline-block'>
//               Already have an account
//             </a>
//           </div>

//         </form>

//       </div>
//     </div>
//   )
// }