import Button from "./Button";
import AnimatedButton from "./AnimatedButton";
import animationJson from "@/lottie/system-outline-19-book.json";
import CourseGrid from "./CourseGrid";

const CoursesSection = ({data}) => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex relative flex-col text-center lg:text-left lg:flex-row justify-between items-center">
          <h2 className="text-black md:max-w-lg font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            What courses are taught in the Best Accounting Institute?
          </h2>
          <p className="text-textgray flex-1 md:max-w-lg text-lg mt-6">
            Enroll in some of the well designed courses and brighten your future in the field of accountancy
          </p>
        </div>
        <CourseGrid data={data} />
        <div className="md:mt-20 mt-14 flex flex-col text-center w-full md:justify-center md:items-center  md:flex-row gap-5 md:gap-3">
          <Button text="Get Free Consultation" href="/contact" />
          <AnimatedButton text="View Courses" animationData={animationJson} />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
