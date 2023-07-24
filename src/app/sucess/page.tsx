import { SucessIcon } from "../../../public/sucessIcon";

export default function SucessPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-charcoal font-sans text-base text-neutral-dark">
      <div className="flex flex-col gap-8 rounded-3xl bg-neutral-white p-12 shadow-xl">
        <SucessIcon />
        <h1 className="text-5xl font-bold">
          Thanks for <br /> subscribing!
        </h1>
        <p>
          A confiormation email has been sent to <br />{" "}
          <span className="font-bold">email</span>. Please open it and click{" "}
          <br /> the button inside to confirm your subscription.{" "}
        </p>
        <button className="rounded-lg bg-neutral-dark py-4 text-center font-bold text-neutral-white">
          Dismiss message
        </button>
      </div>
    </main>
  );
}
