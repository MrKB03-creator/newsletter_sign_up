import { iconSuccess } from "../assets/images";

interface SuccessProps {
  email: string;
}

const Success: React.FC<SuccessProps> = ({ email }) => {

    const returnToForm = () => {
        window.location.reload();
    }
    
  return (
    <div className="w-[468px] h-auto bg-White rounded-[36px] flex flex-col justify-between items-start p-16 m-[5%] max-sm:rounded-none max-sm:h-[100vh] max-sm:w-full max-sm:m-0 max-sm:pt-36">
    <img
      src={iconSuccess}
      alt="Success"
      className="w-16 h-16 object-cover mb-10"
    />
    <div className="mb-10 max-sm:flex-grow">
      <h1 className="text-Dark-Slate-Grey font-bold text-[56px] leading-none mb-6 max-sm:text-[40px]">
        Thanks for subscribing!
      </h1>
      <p className="text-Dark-Slate-Grey">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>
    </div>
    <button
      className="w-full h-14 bg-Dark-Slate-Grey text-White rounded-xl hover:bg-gradient-1 cursor-pointer"
      onClick={returnToForm}
    >
      Dismiss message
    </button>
  </div>
  );
};

export default Success;
