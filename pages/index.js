import Head from "next/head";
import Image from "next/image";
import star from "../assets/icon-star.svg";
import ilustration from "../assets/illustration-thank-you.svg";
import { useState } from "react";
export default function Home() {
  const [rating, setRating] = useState(0);
  const [submited, setSubmited] = useState(false);
  const ratings = Array.from(Array(5).keys());

  return (
    <div>
      <Head>
        <title>Rating App</title>
        <meta name="description" content="A simple Rating App." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className="flex  items-center justify-center text-white w-full bg-[#151518] h-screen px-10">
        {!submited ? (
          <div className="max-w-sm rounded-lg p-6 bg-[#1e252f] flex flex-col gap-4">
            <div className="bg-gray-800  rounded-full w-10 h-10 relative flex items-center justify-center ">
              <Image
                layout="intrinsic"
                className="object-cover "
                src={star}
                alt="star"
              />
            </div>

            <h1 className=" mt-2  font-sans text-2xl">How did we do?</h1>
            <p className="text-gray-500 text-sm">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <ul className="flex gap-2 justify-between mt-5">
              {ratings.map((_, i) => (
                <li
                  key={i + 1}
                  onClick={() => setRating(i + 1)}
                  className={`hover:bg-orange-500 font-bold p-6 flex cursor-pointer items-center justify-center  rounded-full w-5 h-5 ${
                    rating === i + 1 ? `bg-gray-400` : `bg-gray-700`
                  } `}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
            <button
              disabled={rating === 0}
              onClick={() => setSubmited(true)}
              className={`${
                rating !== 0
                  ? `opacity-1 hover:text-orange-500 hover:bg-white`
                  : `opacity-30 `
              }   w-full mt-5 bg-orange-500 rounded-2xl py-3 font-bold cursor-pointer`}
            >
              SUBMIT
            </button>
          </div>
        ) : (
          <div className="max-w-sm rounded-lg p-6 bg-[#1e252f] flex flex-col gap-6 text-center">
            <div className=" w-full rounded-full relative flex items-center justify-center ">
              <Image
                className="object-cover"
                layout="intrinsic"
                src={ilustration}
                alt="star"
              />
            </div>
            <div className="text-orange-500 rounded-2xl text-base bg-gray-700 w-fit m-auto px-3 py-1 ">
              You selected {rating} out of 5
            </div>
            <h1 className=" mt-2  font-bold font-sans text-3xl">Thank You!</h1>

            <p className="text-gray-200 text-base">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}

        <div className="absolute bottom-1 font-bold">
          Challenge by{" "}
          <a
            className="text-[#4ddb99] "
            href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/luispintodev/"
            className="text-[#4ddb99]"
          >
            Luís Pinto
          </a>
          .
        </div>
      </main>
    </div>
  );
}
