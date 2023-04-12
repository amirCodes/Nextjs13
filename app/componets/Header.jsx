
import Link from 'next/link'

export default function Header () {
  return (
    <header className='bg-white border-b-4'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img className='h-8 w-8' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
          </Link>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 md:flex md:gap-x-12'>
          <Link href='about/team' className='text-sm font-semibold leading-6 text-gray-900'>
            Team
          </Link>
          <Link href='code/repos' className='text-sm font-semibold leading-6 flex text-gray-900'>
            Code&nbsp;
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path fillRule='evenodd' d='M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z' clipRule='evenodd' />
            </svg>

          </Link>
          <Link href='about' className='text-sm font-semibold leading-6 text-gray-900'>
            About
          </Link>
          <Link href='meeting'>Online Meeting List</Link>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
