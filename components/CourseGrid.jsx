import Link from "next/link"
import GhostButton from "./GhostButton"
import Image from "next/image"
import { urlFor } from "@lib/client"

const CourseGrid = ({ data }) => {
  return (
    <div className="relative z-10">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="grid md:grid-cols-2 z-10 xl:grid-cols-3 relative text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6"
      >
        {data?.map((course) => (
          <Link
            className="group bg-white border border-[#eaeaea] tap-highlight-color-transparent shadow-faq lg:hover:shadow-faq-hover relative z-10 duration-200 lg:hover:-translate-y-2"
            href={`${course.slug.current ? `/courses/${course.slug.current}` : "/courses"}`}
          >
            <div className="bg-white flex flex-col justify-center text-left ">
              <div className="w-full relative object-cover h-56">
                <Image
                  className="object-cover h-full w-full "
                  loading="lazy"
                  alt="CS coaching institute near me in Perinthalmanna"
                  src={urlFor(course.image).url()}
                  fill={true}
                />
              </div>

              <div className="pt-8 px-6 pb-10 md:px-8 md:pb-12 lg:px-8 lg:pt-10 lg:pb-14 ">
                <h3 className="mb-4 lg:group-hover:text-primary text-black text-2xl font-bold leading-snug">
                  {course.title}
                </h3>
                <p className="text-lg text-textgray mb-8">{course.shortDescription}</p>
                <GhostButton text="View More" icon={false} />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="absolute -top-2 lg:-top-8 -right-14 lg:-right-[5.5rem] w-36 h-36 z-0 "
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="800"
      >
        <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Accounting and finance courses in Malappuram" />
      </div>
      <div
        className="absolute -bottom-14 lg:-bottom-[4.5rem] -left-8 lg:-left-10 w-36 h-36 z-0 "
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="800"
        data-aos-offset="-200"
      >
        <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Advanced ACCA courses in Perinthalmanna" />
      </div>
    </div>
  )
}

export default CourseGrid
