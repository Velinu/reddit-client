import { Plus } from 'lucide-react'
import { Button } from '../ui/button'

function Footer() {

  return (
    <footer className='p-5 flex flex-row-reverse'>
      <Button
          className="
            group relative inline-flex
            h-14 w-14
            items-center justify-center
            overflow-hidden
            rounded-full
            bg-linear-to-b from-amber-300 to-orange-600
            text-white
            shadow-md
            hover:cursor-pointer
            transition-all duration-300 ease-out
            hover:w-42
            hover:shadow-lg hover:shadow-orange-500
            focus-visible:ring-2 focus-visible:ring-orange-400
          "
        >
        {/* Texto */}
        <span
          className="
            absolute left-6
            whitespace-nowrap
            opacity-0
            font-bold
            -translate-x-4
            transition-all duration-200 ease-out
            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          Add subreddit
        </span>

        {/* Ícone */}
        <span className="absolute right-4 flex items-center justify-center font-bold">
          <Plus className='bold size-7' />
        </span>
      </Button>
    </footer>
    
  )
}

export default Footer