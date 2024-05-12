import React from 'react'

function header() {
  return (
    <>
        <section className=''>
            <div className='w-auto h-auto p-2 border-b-[1px] border-gray-300'>
                <div className='flex items-center justify-evenly my-4'>
                    <a href="" className=''><img src="" alt="" />Logo</a>
                    <nav className='text-md'>
                        <a href="" className='mx-5'>Home</a>
                        <a href="" className='mx-5'>Products</a>
                        <a href="" className='mx-5'>Men's Clothing</a>
                        <a href="" className='mx-5'>Women's Clothig</a>
                        <a href="" className='mx-5'>Contact</a>
                    </nav>
                    <div className='flex items-center'>
                        <div className='flex bg-black text-[12px] text-white p-2 px-5 rounded-full'>
                            <button className='mx-1'>Login</button>
                            <div className='w-[1px] mx-1 bg-white'></div>
                            <button className='mx-1'>Register</button>
                        </div>
                        <div className='flex bg-blue-500'>
                            <h1>Heart</h1>
                            <p>(3)</p>
                        </div>
                        <div className='flex bg-blue-500'>
                            <h1>Cart</h1>
                            <p>(3)</p>
                        </div>
                        <h1>profile</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default header