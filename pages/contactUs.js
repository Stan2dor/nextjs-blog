import Form from "../src/common/Form";
import Link from "next/link";
import Navbar from "../src/common/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Contact us </h1>
        <Form />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h4>
      </div>
    </>
  );
  // export default function handler(req, res) {
  //   const email = req.body.email;
  //   // Then save email to your database, etc...
  // }
}

export default ContactUs;
