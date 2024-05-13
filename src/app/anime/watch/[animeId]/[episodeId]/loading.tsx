import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='container p-4'>
        <Skeleton className='w-full py-6 mb-4' />
        <Skeleton className='py-6 mx-auto aspect-video h-[30rem] max-w-[50rem] w-full mb-6 max-sm:h-[13rem]' />
    
        <Skeleton className='w-16 py-6 mb-4' />


        <Skeleton className='w-full py-6 mb-4' />
        <Skeleton className='w-full py-6 mb-4' />
        <Skeleton className='w-full py-6 mb-4' />
        <Skeleton className='w-full py-6 mb-4' />
        <Skeleton className='w-full py-6 mb-4' />
        




    </div>
  )
}

export default loading