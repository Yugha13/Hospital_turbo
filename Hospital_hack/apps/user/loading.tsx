import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-full grid place-items-center'>
      <LoaderCircleIcon className='animate-spin'/>
    </div>
  )
}

export default loading