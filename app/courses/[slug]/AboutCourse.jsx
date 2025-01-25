"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { Book, BookOpenIcon } from "lucide-react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const AboutCourse = ({ courseDetails }) => {
  return (
    <section className=" font-main pb-16 pt-14 lg:pb-32 px-5% lg:pt-40 bg-[#fbfbfb]">
      <div className="mx-auto max-w-full lg:max-w-7xl ">
        <div className="max-w-3xl">
          {courseDetails[0].syllabus ? (
            <Tab.Group>
              <Tab.List className={"mb-16 flex max-w-md"}>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " w-full pb-3 px-5 text-lg",
                      "ring-white ring-opacity-60 ring-offset-2  focus:outline-none ",
                      selected
                        ? "text-primary font-bold  border-b-2 border-b-primary"
                        : "text-slate-300 border-b border-b-slate-300  font-medium"
                    )
                  }
                >
                  About Course
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      " w-full pb-3  px-5 text-lg",
                      "ring-white ring-opacity-60 ring-offset-2  focus:outline-none ",
                      selected
                        ? "text-primary font-bold border-b-2 border-b-primary"
                        : "text-slate-300 border-b border-b-slate-300 font-medium"
                    )
                  }
                >
                  Syllabus
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div
                    className="w-full"
                    data-aos="fade-in"
                    data-aos-duration="800"
                  >
                    <h2 className="text-black mb-6  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
                      About the course
                    </h2>
                    {courseDetails.map((course) => (
                      <div className="" key={course._id}>
                        {course.description && (
                          <p className="  text-lg  text-textgray">
                            {course.description}
                          </p>
                        )}
                        {course.stages && (
                          <div className="mt-6">
                            <h3 className="mb-4  text-black text-2xl font-bold leading-snug">
                              Stages
                            </h3>
                            <ol className="list-decimal ml-7">
                              {course.stages.map((stage , index) => (
                                <li key={index} className="text-base mb-1 text-textgray">
                                  {stage}
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {courseDetails.map((course) =>
                    course.syllabus.map((syllabus) => (
                      <Disclosure key={syllabus._key}>
                        {({ open }) => (
                          <div
                            className={`block p-6 shadow-faq ${
                              open ? "border border-primary" : "border "
                            } w-full  mb-4 `}
                          >
                            <Disclosure.Button className="  flex justify-between items-center   w-full text-left">
                              <span className="flex text-lg font-semibold items-center gap-6">
                                {" "}
                                <span
                                  className={`duration-200 w-9 h-9 min-h-[36px] max-h-9 min-w-[36px] rounded-full flex justify-center ${
                                    open ? "bg-primary" : "bg-slate-100"
                                  }  relative items-center`}
                                >
                                  <div
                                    className={`absolute duration-200 w-[14px] min-h-[2px] ${
                                      open ? "bg-white" : "bg-slate-400"
                                    } `}
                                  ></div>

                                  <div
                                    className={`absolute ${
                                      open
                                        ? "rotate-90 opacity-0 bg-white"
                                        : "rotate-0 opacity-100 bg-slate-400"
                                    } group-hover: duration-200 min-h-[14px] w-[2px] `}
                                  ></div>
                                </span>{" "}
                                {syllabus.sectionName}{" "}
                              </span>{" "}
                              
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              {syllabus.chapter.map((chapter,index) => (
                                <div key={index} className="my-3">
                                  <div
                                    className="flex items-center py-3 gap-2"
                                    key={chapter._key}
                                  >
                                    <span>
                                      {" "}
                                      <Book size={15} />{" "}
                                    </span>{" "}
                                    <span className="text-black font-semibold">
                                      {chapter.chapterName}
                                    </span>
                                  </div>
                                  <ul className="ml-11">
                                    {chapter.unit.map((unit,index) => (
                                      <div key={index}>
                                        {unit && (
                                          <li className="text-base p-2 text-textgray items-start flex gap-2">
                                            {" "}
                                            <div className="pt-2">
                                              <BookOpenIcon size={12} />
                                            </div>{" "}
                                            <div>{unit}</div>{" "}
                                          </li>
                                        )}
                                      </div>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
                    ))
                  )}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          ) : (
            <div className="w-full" data-aos="fade-in" data-aos-duration="800">
              <h2 className="text-black mb-6  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
                About the course
              </h2>
              {courseDetails.map((course) => (
                <div key={course._id} className="">
                  {course.description && (
                    <p className="  text-lg  text-textgray">
                      {course.description}
                    </p>
                  )}
                  {course.stages && (
                    <div className="mt-6">
                      <h3 className="mb-4  text-black text-2xl font-bold leading-snug">
                        Stages
                      </h3>
                      <ol className="list-decimal ml-7">
                        {course.stages.map((stage) => (
                          <li className="text-base mb-1 text-textgray">
                            {stage}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
