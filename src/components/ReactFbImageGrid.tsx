import { ClassValue } from "clsx"
import { cn } from "../lib/utils"

interface ReactFbImageGridProps {
  images: string[]
  className?: ClassValue
}

export function ReactFbImageGrid({
  images = [],
  className = '',
}: ReactFbImageGridProps) {
  const totalImages = images.length
  let gridClass = 'grid gap-1 '
  let gridItems = 'rounded '
  let restCount = images.length - 5

  if (totalImages === 1) {
    gridClass += 'grid-cols-1'

  } else if (totalImages === 2) {
    gridClass += 'grid-cols-2'
  } else if(totalImages === 3) {
    gridClass += 'grid-cols-2'
    gridItems += 'last:col-span-2 last:row-span-1'
  } else if(totalImages === 4) {
    gridClass += 'grid-cols-2'
  } else if (totalImages >= 4) {
    gridClass += 'grid-cols-2 grid-rows-6'
    gridItems += 'first:col-span-1 first:row-span-3 [&:nth-child(4)]:col-span-1 [&:nth-child(4)]:row-span-3 col-span-1 row-span-2 bth'
  }

  return (
    <div className={`${gridClass} ${className} overflow-hidden rounded`}>
      {images.slice(0, 5).map((src, index) => (
        <div
          key={index}
          className={`relative cursor-pointer 
         ${cn("col-span-1 row-span-1", gridItems)}   
        `}>
          <img
            src={src}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className={`object-cover w-full h-full rounded ${
                restCount > 0 && index === 4 ? 'opacity-50' : ''
            }`}
          />
          {
            restCount > 0 && index === 4 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold">
                +{restCount}
              </div>
            )
          }
        </div>
      ))}
    </div>
  )
}
