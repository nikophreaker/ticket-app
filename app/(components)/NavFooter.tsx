import React from "react";

const NavFooter = () => {
  return (
    <div>
      <footer className="footer p-10 bg-footer text-default-text">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="w-full">
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyoone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </aside>
        <nav>
          <header className="text-default-text text-xl font-medium mb-5">
            Plan Events
          </header>
          <a className="link link-hover">Create and Set Up</a>
          <a className="link link-hover">Sell Tickets</a>
          <a className="link link-hover">Online RSVP</a>
          <a className="link link-hover">Online Events</a>
        </nav>
        <nav>
          <header className="text-default-text text-xl font-medium mb-5">
            Eventick
          </header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">How it Works</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </nav>
        <form>
          <header className="text-default-text text-xl font-medium mb-5">
            Stay In The Loop
          </header>
          <fieldset className="form-control w-10/12">
            <label className="label">
              <span className="label-text text-default-text text-sm">
                Join our mailing list to stay in the loop with our newest for
                Event and concert
              </span>
            </label>
            <div className="relative flex mt-5">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-full pr-16 rounded-full px-8 py-8 bg-white text-black text-sm"
              />
              <button className="btn btn-primary absolute top-2 right-2 rounded-full bg-pink-600 items-center px-5 hover:bg-pink-700">
                Subscribe Now
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer-center px-10 py-4 bg-footer text-default-text">
        <div className="border-t border-gray-600"></div>
        <aside className="items-center grid-flow-col justify-center mt-3">
          {/* <p>
            Eventick <br />
            Providing since 2023
          </p> */}
        </aside>
      </footer>
    </div>
  );
};

export default NavFooter;
