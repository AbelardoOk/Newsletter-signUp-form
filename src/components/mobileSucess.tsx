import { SucessIcon } from "../../public/sucessIcon";
import Link from "next/link";

export function MobileSucess() {
  return (
    <main className="flex h-screen flex-col justify-between bg-neutral-white font-sans text-base text-neutral-dark">
      <div className="mt-[50%] flex -translate-y-1/4 flex-col justify-center gap-6 p-6">
        <SucessIcon />
        <h1 className="text-4xl font-bold">
          Thanks for <br /> subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">
            {process.env.REACT_APP_EMAIL || "ash@loremcompany.com"}
          </span>
          . Please open it and click the button inside to confirm your
          subscription.{" "}
        </p>
      </div>

      <div className="flex items-end px-6 py-10">
        <Link href={"/"} className="flex h-max w-full items-end">
          <button className="w-full rounded-lg bg-neutral-dark py-3 text-center font-bold text-neutral-white transition-all duration-150 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:shadow-xl hover:shadow-pink-300">
            Dismiss message
          </button>
        </Link>
      </div>
    </main>
  );
}
