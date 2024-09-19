import { iconList } from "../assets/images";

const Form = () => {
  return (
    <form className="h-auto w-auto font-Roboto text-Dark-Slate-Grey m flex flex-col justify-center xl:w-[376px] md:w-[276px] max-sm:m-0 max-sm:h-auto max-sm:my-10 max-sm:mx-6 max-sm:w-auto">
      <div className="flex flex-col justify-center h-auto max-sm:h-auto xl:mb-10 md:mb-4 max-sm:mb-10">
        <h1 className="font-bold my-6 xl:text-[56px] md:text-4xl max-sm:text-4xl">
          Stay updated!
        </h1>
        <p className="xl:mb-6 md:mb-2 max-sm:mb-6">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list-image-iconList">
          <li className="mb-[10px] flex flex-row justify-start items-center">
            <img src={iconList} alt="iconList" className="mr-4" />
            Product discovery and building what matters
          </li>
          <li className="mb-[10px] flex flex-row justify-start items-center">
            <img src={iconList} alt="iconList" className="mr-4" />
            Measuring to ensure updates are a success
          </li>
          <li className="mb-[10px] flex flex-row justify-start items-center">
            <img src={iconList} alt="iconList" className="mr-4" />
            And much more!
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <legend className=" mb-2 font-bold text-[12px]">Email address</legend>
        <label className="border-[1px] border-Grey/25 p-4 rounded-xl xl:mb-6 md:mb-4 max-sm:mb-6">
          <input type="email" placeholder="email@company.com" required />
        </label>
        <button
          type="submit"
          className="w-full bg-Dark-Slate-Grey text-White font-bold text-base p-[18px] rounded-xl"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
};

export default Form;
