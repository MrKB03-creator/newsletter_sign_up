
const Form = () => {
  return (
    <form className="h-auto xl:w-[376px] md:w-[276px] max-sm:w-[327px] max-sm:m-10 font-Roboto text-Dark-Slate-Grey">
      <h1 className="font-bold text-[56px]">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list-image-iconList">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
        </ul>
        <legend>Email address</legend>
        <label>
            <input type="email" placeholder="Your email address" required /> 
        </label>
        <button type="submit">Subscribe</button>
    </form>
  )
}

export default Form
