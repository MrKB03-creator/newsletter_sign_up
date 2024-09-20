import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="bg-Dark-Slate-Grey h-full p-[10%] flex items-center justify-center max-sm:p-0 ">
        {submit === true ? (
          <Success email={email} />
        ) : (
          <Form setSubmit={setSubmit} setEmail={setEmail} />
        )}
      </div>
      <footer className="text-center m-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/MrKB03-creator">Kurt Badillo</a>.
      </footer>
    </>
  );
}

export default App;
