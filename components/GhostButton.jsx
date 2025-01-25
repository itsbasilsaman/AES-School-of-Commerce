import Image from "next/image"
import Link from "next/link"

const GhostButton = ({ text, href, icon }) => {
  return (
    <div href={href}>
      <div className="flex  items-center">
        <div>
          <div className="bg-transparent  duration-200 font-bold tap-highlight-color-transparent  text-lg   text-primary">
            {text}
          </div>
          <div className="min-h-[2px] w-0 duration-200 bg-primary mt-[1px] lg:group-hover:w-full"></div>
        </div>

        {icon && (
          <div className="bg-secondaygreen flex justify-center items-center py-[14px] px-2">
            <Image width="20" height="20" src="/assets/arrow.png" alt="Best accounting courses in Perinthalmanna" />
          </div>
        )}
      </div>
    </div>
  )
}

export default GhostButton
