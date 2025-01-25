import ImportantCourse from "./ImportantCourse";
import { client } from "@lib/client";

async function getCourse() {
  const query = '*[_type=="course" && isFeature]'
  const importantCourses = await client.fetch(query);
  return importantCourses;
}

const CoursesHero = async () => {
  const data = await getCourse();
  return (
    <section className="overflow-hidden px-5%  font-main pt-10 lg:pt-20 py-32">
      <div
        className="mx-auto max-w-[671px] lg:px-6  text-center"
        data-aos="zoom-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
          Our Courses
        </h1>
        <p className=" text-lg text-textgray">
          Discover some of our best accounting courses and build a great career out of it. AE's, the Best Accounting Institute in Perinthalmanna have sketched some of the most important certification courses to enrich your experience in the field of accountancy that help you realize your dreams
        </p>
      </div>
      <div className="max-w-[1342px] mx-auto ">
        <ImportantCourse data={data} />
      </div>
    </section>
  );
};

export default CoursesHero;
