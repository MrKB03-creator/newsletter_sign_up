import { signupDesktop, signupMobile } from "./assets/images"
import Form from "./components/Form"


function App() {
  return (
    <>
      <div className="bg-Dark-Slate-Grey h-auto p-[5%] flex items-center justify-center max-sm:p-0">
        <div className=" bg-White rounded-[36px] pr-6 flex flex-row items-center justify-between xl:w-[928px] h-auto lg:pl-16 md:w-[728px]  md:pl-10 max-sm:flex-col max-sm:h-full max-sm:rounded-none max-sm:p-0 max-sm:w-full max-sm:justify-start">
          <img src={signupMobile} alt="Sign up" className="contain-content xl:hidden md:hidden max-sm:w-full"/>
          <Form />
          <img src={signupDesktop} alt="Sign up" className="contain-content h-auto w-[50%] my-6 max-sm:hidden"/>
        </div>
      </div>
    </>
  )
}

export default App
