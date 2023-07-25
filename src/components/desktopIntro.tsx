"use client";

import Image from "next/image";
import { ListIcon } from "../../public/listIcon";
import { useState } from "react";
import Link from "next/link";

export function DesktopPage() {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const emailValidation = (e) => {
    var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  process.env.REACT_APP_EMAIL = email;

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-charcoal">
      <div className="flex flex-row items-center rounded-3xl bg-neutral-white shadow-xl">
        <div className="flex h-max flex-col gap-6 p-16">
          <h1 className="text-6xl font-bold">Stay updated!</h1>
          <p>Join 60,000+ product manager receiving monthly updates on:</p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-4">
              <ListIcon />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex flex-row gap-4">
              <ListIcon />
              <p>Measuring to ensure updates are a sucess</p>
            </li>
            <li className="flex flex-row gap-4">
              <ListIcon />
              <p>And much more!</p>
            </li>
          </ul>

          <div className="flex flex-col gap-2">
            {validated == true || email == "" ? (
              <label className="text-xs font-bold" htmlFor="email">
                Email adress
              </label>
            ) : (
              <div className="flex flex-row justify-between text-xs font-bold">
                <label htmlFor="email">Email adress</label>
                <p className="text-primary-tomato">Valid email required</p>
              </div>
            )}

            <input
              className="rounded-lg border-[1px] border-neutral-grey p-4 text-left transition duration-300 invalid:border-primary-tomato invalid:bg-red-100 invalid:text-primary-tomato focus:border-neutral-dark disabled:bg-neutral-white"
              type="email"
              name="email"
              id="email"
              onChange={emailValidation}
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="email@company.com"
            />
          </div>

          {email == "" || validated == false ? (
            <button
              className="rounded-lg bg-neutral-dark py-4 text-center font-bold text-neutral-white transition-all duration-150 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:shadow-xl hover:shadow-pink-300"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          ) : (
            <Link href={"/sucess"} className="w-full">
              <button
                className="w-full rounded-lg bg-neutral-dark py-4 text-center font-bold text-neutral-white transition-all duration-150 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:shadow-xl hover:shadow-pink-300"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </Link>
          )}
        </div>

        <Image
          className="m-8 h-full w-fit"
          src="illustration-sign-up-desktop.svg"
          alt=""
          width={400}
          height={593}
        />
      </div>
    </main>
  );
}
