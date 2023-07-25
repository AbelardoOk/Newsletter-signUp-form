import Link from "next/link";
import { SucessIcon } from "../../public/sucessIcon";

export function DesktopSucess() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-charcoal font-sans text-base text-neutral-dark">
      <div className="flex flex-col gap-8 rounded-3xl bg-neutral-white p-12 shadow-xl">
        <SucessIcon />
        <h1 className="text-5xl font-bold">
          Thanks for <br /> subscribing!
        </h1>
        <p>
          A confiormation email has been sent to <br />{" "}
          <span className="font-bold">
            {process.env.REACT_APP_EMAIL || "email"}
          </span>
          . Please open it and click <br /> the button inside to confirm your
          subscription.{" "}
        </p>
        <Link href={"/"} className="w-full">
          <button className="w-full rounded-lg bg-neutral-dark py-4 text-center font-bold text-neutral-white transition-all duration-150 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:shadow-xl hover:shadow-pink-300">
            Dismiss message
          </button>
        </Link>
      </div>
    </main>
  );
}
