import { signupDesktop, signupMobile } from "./assets/images"
import Form from "./components/Form"


function App() {
  return (
    <>
      <div className="bg-Dark-Slate-Grey h-[100vh] flex items-center justify-center">
        <div className=" bg-White rounded-[36px] pl-16 pr-6 flex flex-row items-center justify-between xl:w-[928px] xl:h-[641px] md:w-[728px] md:h-[541px] max-sm:flex-col max-sm:h-full max-sm:rounded-none max-sm:p-0 max-sm:w-full max-sm:justify-start">
          <img src={signupMobile} alt="Sign up" className="contain-content xl:hidden md:hidden max-sm:w-full"/>
          <Form />
          <img src={signupDesktop} alt="Sign up" className="contain-content xl:h-[593px] xl:w-[400px] md:h-[493px] max-sm:hidden"/>
        </div>
      </div>
    </>
  )
}

export default App
