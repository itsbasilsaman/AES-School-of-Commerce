import CourseGrid from "@components/CourseGrid";
import CoursesHero from "./CoursesHero";
import { client } from "@lib/client";

async function getData() {
  const query = '*[_type=="course"]';
  const products = client.fetch(query);
  return products;
}

export const metadata = {
  title: "Best Accounting Course in Perinthalmanna | Best CA Institute",
  description: "Best Accounting courses in Perinthalmanna are offered at AE's School of Commerce, where expert faculty help you gain practical skills and knowledge. Contact Now",
};

const page = async () => {
  const data = await getData();
  return (
    <>
      <CoursesHero />
      <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main py-20 md:py-[100px] lg:py-32 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-black text-center max-auto  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            Our Best Accounting Courses
          </h2>
          <div className="mb-10">
            <CourseGrid data={data} />
          </div>
        </div>
      </section>
    </>
  );
};
export const revalidate = 3600;
export default page;
