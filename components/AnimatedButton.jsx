import Link from "next/link";
import { Book } from "lucide-react";


const AnimatedButton = ({text}) => {
  return (
    <Link
      className="border tap-highlight-color-transparent border-slate-200 duration-200 lg:hover:text-primary flex justify-center items-center gap-3 lg:hover:border-primary px-8 py-[16px]  rounded-full text-slate-800"
      href="/courses"
    >
      
      <div   className="flex items-center justify-center text-slate-800 gap-3">{text} <Book className="text-slate-800" strokeWidth="0.9"  size={20}/> </div>
    </Link>
  );
};

export default AnimatedButton;
