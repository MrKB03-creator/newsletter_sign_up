import { useState } from "react";
import { iconList } from "../assets/images";
import { signupDesktop, signupMobile } from "../assets/images";


interface FormProps {
  setSubmit: (value: boolean) => void;
  setEmail: (value: string) => void;
}

const Form = ({ setSubmit , setEmail }: FormProps) => {
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [clickButton, setClickButton] = useState(false);



  const submitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputEmail === "" || !inputEmail.includes("@") || !inputEmail.includes(".")) {
      setValidEmail(true);
      setClickButton(true);
      setSubmit(false);
    } else {
      setValidEmail(false);
      setClickButton(false);
      setSubmit(true);
      setEmail(inputEmail);
    }
  };

  return (
    <div className=" bg-White rounded-[36px] pr-6 flex flex-row items-center justify-between xl:w-[928px] h-auto lg:pl-16 md:w-[728px]  md:pl-10 max-sm:flex-col max-sm:h-full max-sm:rounded-none max-sm:p-0 max-sm:w-full max-sm:justify-start">
      <img
        src={signupMobile}
        alt="Sign up"
        className="contain-content xl:hidden md:hidden max-sm:w-full"
      />
      <form className="h-auto w-auto font-Roboto text-Dark-Slate-Grey m flex flex-col justify-center xl:w-[376px] md:w-[276px] max-sm:m-0 max-sm:h-auto max-sm:my-10 max-sm:mx-6 max-sm:w-auto">
        <div className="flex flex-col justify-center h-auto max-sm:h-auto xl:mb-10 md:mb-4 max-sm:mb-10">
          <h1 className="font-bold my-6 xl:text-[56px] md:text-4xl max-sm:text-4xl">
            Stay updated!
          </h1>
          <p className="xl:mb-6 md:mb-2 max-sm:mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
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
          <div className="flex flex-row justify-between">
            <legend className=" mb-2 font-bold text-[12px]">
              Email address
            </legend>
            <p
              className={`text-tomato text-[12px] ${
                validEmail == true && clickButton == true
                  ? "visible"
                  : "invisible"
              }`}
            >
              Valid email required
            </p>
          </div>
          <label
            className={`border-[1px] ${
              validEmail == true && clickButton == true
                ? "border-tomato bg-tomato/25 focus:border-tomato"
                : "border-Grey/25 bg-White focus-within:border-Dark-Slate-Grey"
            }  p-4 rounded-xl cursor-pointer xl:mb-6 md:mb-4 max-sm:mb-6`}
          >
            <input
              type="email"
              name="email"
              id="email"
              value={inputEmail}
              placeholder="email@company.com"
              className={`outline-none ${
                validEmail == true && clickButton == true
                  ? "text-tomato placeholder:text-tomato/50"
                  : "text-Dark-Slate-Grey bg-White"
              } bg-transparent w-full`}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={submitButton}
            className="w-full bg-Dark-Slate-Grey text-White font-bold text-base cursor-pointer p-[18px] rounded-xl hover:bg-gradient-1"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
      <img
        src={signupDesktop}
        alt="Sign up"
        className="contain-content h-auto w-[50%] my-6 max-sm:hidden"
      />
    </div>
  );
};

export default Form;
