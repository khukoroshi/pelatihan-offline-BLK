import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {
  return (
    <div>
      <Title title="" desc="" />
      <form action="">
        <div>
          <p></p>
          <div className="flex pl-3 rounded-xl border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
