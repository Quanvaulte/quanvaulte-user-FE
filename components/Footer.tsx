export default function Footer() {
  const footerItems = ["Home", "Email Marketing", "Courses", "FAQ"];

  return (
    <div className="bg-[#040718] text-center max-h-[511px] flex flex-col gap-6 py-24 ">
      <p
        className="font-normal
      text-base
      ">
        Are you ready?
      </p>

      <h2 className="text-4xl text-white  ">Let’s get started</h2>

      <button
        className="bg-[#F9D342]
      rounded-lg text-[#2C43EB] text-lg font-bold py-3 px-12
cursor-pointer  max-w-48 mx-auto mb-12   ">
        Get started
      </button>

      <ul className="flex justify-center items-center max-w-[493px] mx-auto gap-10 ">
        {footerItems.map((item) => (
          <li className="hover:text-[#F9D342] cursor-pointer" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p>Copyright © 2020. Lo</p>
    </div>
  );
}
