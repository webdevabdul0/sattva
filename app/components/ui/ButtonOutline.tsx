import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({ text }: { text: string }) => {
  return (
    <div>
      <button className="px-2 sm:px-6 py-2 rounded-full border border-primary flex flex-row gap-2 items-center justify-center  text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        {text}
        <ArrowUpRight className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default Button;
