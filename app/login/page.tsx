import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center flex-1'>
        <div className='flex items-center justify-center border border-gray-200 rounded-3xl shadow-md bg-white p-8'>
    <form className="flex flex-col gap-4 max-w-md">
  {/* 1. Email */}
  <div className="flex flex-col gap-1.5">
    <label htmlFor="email">Your email</label>
    <input
      id="email"
      type="email"
      placeholder="name@flowbite.com"
      className="w-full rounded-lg border border-gray-300 px-3 py-2"
    />
  </div>

  {/* 2. Password */}
  <div className="flex flex-col gap-1.5">
    <label htmlFor="password">Your password</label>
    <input
      id="password"
      type="password"
      className="w-full rounded-lg border border-gray-300 px-3 py-2"
    />
  </div>

  {/* 3. Checkbox */}
  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" className="rounded" />
    <span>I agree with the terms and conditions.</span>
  </label>

  {/* 4. ปุ่ม Sign in ຢູ່ທາງລຸ່ມສຸດ */}
  <div className='flex gap-1'>
  <button
    type="submit"
    className="w-fit rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
  >
    Sign in
  </button>
  <button
    type="submit"
    className="w-fit rounded-lg bg-green-600 px-5 py-2.5 text-white hover:bg-green-700"
  >
    Sign in with Google
  </button>
  </div>
</form>
</div>
</div>
  )
}
