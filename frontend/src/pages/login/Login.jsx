import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-blue-500'> CUChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor='username' className='label p-2'>
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input id='username' type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor='password' className='label'>
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input id='password' type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-8'>Login</button>
          </div>

          <div className='text-center'>
            <a href='#' className='text-sm text-center hover:underline hover:text-blue-600 mt-2 inline-block'>
              Don't have an account
            </a>
          </div>
          

        </form>
      </div>
    </div>
  )
}

export default Login

// STARTER CODE FOR LOGIN component
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='h-full w-full p-6 bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> CUChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label htmlFor='username' className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Username</span>
//             </label>
//             <input id='username' type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor='password' className='label'>
//               <span className='text-base label-text text-gray-300'>Password</span>
//             </label>
//             <input id='password' type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <button className='btn btn-block btn-sm mt-8'>Login</button>
//           </div>

//           <div className='text-center'>
//             <a href='#' className='text-sm text-center hover:underline hover:text-blue-600 mt-2 inline-block'>
//               Don't have an account
//             </a>
//           </div>
          

//         </form>
//       </div>
//     </div>
//   )
// }