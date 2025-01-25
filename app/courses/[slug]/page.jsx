import React from "react";
import { client, urlFor } from "@lib/client";
import { ClockIcon, GraduationCapIcon, PlayCircle } from "lucide-react";
import CourseGrid from "@components/CourseGrid";
import Image from "next/image";
import Play from "@public/assets/play.svg";
import Link from "next/link";
import AboutCourse from "./AboutCourse";

export async function generateMetadata({ params: { slug } }) {
  const courseDetails = await getData(slug);
  return {
    title: courseDetails[0].pageTitle,
    description : courseDetails[0].pageDescription,
  }
}

const page = async ({ params: { slug } }) => {
  const courseDetails = await getData(slug);
  const data = await getCourses();
  return (
    <>
      <section className="oveflow-hidden w-full font-main relative px-5% pt-5 md:pt-10 lg:pt-20 pb-14 lg:pb-32">
        <div className="mx-auto max-w-7xl ">
          {courseDetails.map((course) => (
            <div
              className={`flex flex-col w-full ${
                course.url ? "gap-5 gap-y-9" : ""
              } lg:flex-row gap-5 justify-between  items-center `}
            >
              <div
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
                className="relative z-10 w-full max-w-full lg:max-w-2xl lg:min-w-[445px] "
              >
                {course.fullTitle && (
                  <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[52px] md:text-[48px] md:leading-[1.233] font-bold">
                    {course.fullTitle}
                  </h1>
                )}
                {course.shortDescription && (
                  <p className="text-lg text-textgray">
                    {course.shortDescription}
                  </p>
                )}
                <div className="grid gap-3 mt-6  ">
                  {course.duration && (
                    <div className="flex items-center  duration-200 group box-border text-blackbg leading-none font-bold text-base gap-3 ">
                      <div className="w-[35px]  duration-200 lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center flex-1 rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                        <ClockIcon color="white" size={20} />
                      </div>
                      <div className="mb-[10px]">
                        {`Duration : ${course.duration}`}
                      </div>
                    </div>
                  )}

                  {course.eligibility && (
                    <div className="flex items-center  duration-200 group box-border text-blackbg leading-none font-bold text-base gap-3 ">
                      <div className="w-[35px]  duration-200 lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center flex-1 rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                        <GraduationCapIcon color="white" size={20} />
                      </div>
                      <div className="mb-[10px]">
                        {`Eligibility : ${course.eligibility}`}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {course.url && (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="relative bg-teal-800 w-full max-w-full  lg:max-w-[723px]"
                >
                  <div className="aspect-video relative">
                    <Image className="" fill alt="Course image" src={urlFor(course.image).url()} />
                    <div className="absolute w-full h-full inset-0 bg-black/40 z-20" />
                    <Link
                      href={course.url}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 z-30 lg:hover:scale-105 duration-300 -translate-y-1/2 bg-white w-20 h-20 rounded-full flex justify-center items-center "
                      target="_blank"
                      
                      rel="noopener"
                    >
                      <Image
                        src={Play}
                        width={20}
                        height={20}
                        className="ml-2"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <AboutCourse courseDetails={courseDetails} />
      <section className="overflow-hidden  px-5% font-main py-20 md:py-[100px] lg:py-32 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-black  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            All Courses
          </h2>
          <div className="mb-8">
            <CourseGrid data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export const getCourses = async () => {
  const query = '*[_type=="course"]';
  const products = await client.fetch(query);
  return products;
};

export const getData = async (slug) => {
  const query = `*[_type=="course" && slug.current == "${slug}"]`;
  const courses = await client.fetch(query);
  return courses;
};

export const revalidate = 3600;
export default page;
