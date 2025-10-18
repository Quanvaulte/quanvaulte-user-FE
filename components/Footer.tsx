export default function Footer() {
  const footerItems = ["Home", "Email Marketing", "Courses", "FAQ"];

  return (
    <div className="bg-[#040718] text-center max-h-[511px] flex flex-col gap-6 py-24 ">
      {/* <p
        className="font-normal
      text-base
      ">
        Are you ready?
      </p> */}

      <h2 className="text-4xl text-white font-normal font-baloo ">
        Let the learning begin with
        <span className="text-[#F9D342] font-bold"> Quanvaulte </span>today
      </h2>

      <div className="flex items-center gap-2 justify-center">
        <button
          className="
      rounded-[40px] border-3 border-white shadow-xl text-white text-lg font-bold py-3 px-12
cursor-pointer   ">
          Login
        </button>
        <button
          className="bg-white
      rounded-[40px] text-[#2C43EB] text-lg font-bold py-3 px-12
cursor-pointer    ">
          Get started
        </button>
      </div>

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
