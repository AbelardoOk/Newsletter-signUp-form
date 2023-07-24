import Image from "next/image";
import { ListIcon } from "../../public/listIcon";
export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-charcoal">
      <div className="flex flex-row items-center rounded-3xl bg-neutral-white">
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

          <form className="flex flex-col gap-6" action="">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold" htmlFor="email">
                Email adress
              </label>
              <input
                className="rounded-lg border-2 border-neutral-grey p-4 text-left"
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
              />
            </div>

            <button
              className="rounded-lg bg-neutral-dark py-4 text-center font-bold text-neutral-white"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
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
