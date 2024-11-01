import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#193172] to-[#0D193A]">
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-start gap-8'>
          <div className='w-full md:w-3/5 -mt-6'>
            <Image 
              src='/home.png' 
              alt='People chatting illustration' 
              width={600} 
              height={600} 
              className='w-full max-w-[600px] h-auto object-contain'
              priority
            />
          </div>
          <div className='w-full md:w-2/5 flex justify-center mt-8 md:mt-20'>
            <div className='w-full max-w-md'>
              <SignIn appearance={{
                elements: {
                  footerActionLink: "text-right block w-full",
                  card: "shadow-2xl"
                }
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}