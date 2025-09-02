import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const namE = useRef();
  const emaiL = useRef();
  const msg = useRef();
  const fun = () => {
    namE.current.value = "";
    emaiL.current.value = "";
    msg.current.value = "";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b81ec135-4d98-4342-adef-c0702c020be8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    fun();
    toast.success("Thank you for Contacting !!");
  };
  return (
    <div>
      <form className="contact-form" onSubmit={onSubmit} method="POST">
        <h2 class="pb-2 border-bottom">Contact Us</h2>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            name="name"
            type="name"
            ref={namE}
            placeholder="Your Name.."
            class="form-control"
            id="name"
          />
        </div>
        <div class="mb-3">
          <label for="email-client" class="form-label">
            Email address
          </label>
          <input
            name="email"
            ref={emaiL}
            type="email"
            placeholder="Your Email.."
            class="form-control"
            id="email-client"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            name="message"
            type="message"
            ref={msg}
            placeholder="Regards..."
            class="form-control"
            id="message"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-right" // where to display
        autoClose={3000} // closes in 3 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};
export default Contact;
