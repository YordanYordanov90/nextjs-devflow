

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200  sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-1 flex-col gap-6 ">
        <NavLinks />
      </div>
     
    </section>
  );
};

export default LeftSidebar;
