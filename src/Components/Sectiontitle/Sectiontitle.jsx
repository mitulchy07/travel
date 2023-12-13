import React from "react";

const Sectiontitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-6/12 md:my-6">
      <p className="text-red-600 text-2xl text-bold uppercase">{subHeading}</p>
      <h1 className="text-black sm:text-3xl  md:text-5xl md:border-y-4 text-center py-3 text-bold uppercase">
        {heading}
      </h1>
    </div>
  );
};

export default Sectiontitle;
