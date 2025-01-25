import Link from "next/link"
import Image from "next/image"
import GhostButton from "@components/GhostButton"
import { urlFor } from "@lib/client"

const ImportantCourse = ({ data }) => {
  return (
    <div className="relative z-10">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
        className="grid md:grid-cols-2 lg:grid-cols-2 relative z-10 text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6"
      >
        {data.map((course) => (
          <Link
            className="group tap-highlight-color-transparent  shadow-faq lg:hover:shadow-faq-hover relative z-10 duration-200 lg:hover:-translate-y-2"
            href={`${course.slug.current ? `/courses/${course.slug.current}` : "/courses"}`}
          >
            <div className="bg-white flex flex-col justify-center text-left ">
              <div className="w-full relative object-cover h-56 lg:h-80">
                <Image
                  className="object-cover h-full w-full "
                  alt="CS foundation course in Perinthalmanna"
                  fill
                  src={urlFor(course.image).url()}
                ></Image>
              </div>

              <div className="pt-8 px-6 pb-10 md:px-10 md:pb-12 lg:px-8 lg:pt-10 lg:pb-14 ">
                <h3 className="mb-4 lg:group-hover:text-primary text-black text-2xl font-bold leading-snug">
                  {course.title}
                </h3>
                <p className="text-lg text-textgray mb-8">{course.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <div className="py-[18px] px-[26px] bg-black text-white leading-[1.1] font-bold text-center">
                    Featured Course
                  </div>
                  <GhostButton text="Learn More" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="1000"
        className="absolute -top-4  lg:-top-8 -right-14 lg:-right-[5.5rem] w-36 h-36 z-0 "
      >
        <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Professional accounting courses in Malappuram" />
      </div>
      <div
        className="absolute -bottom-14 lg:-bottom-[4.5rem] -left-8 lg:-left-10 w-36 h-36 z-0 "
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Top-rated accounting institute in Palakkad" />
      </div>
    </div>
  )
}

export default ImportantCourse
