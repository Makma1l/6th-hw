import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary mt-60">
      <div className="flex text-white">
        <div className="mr-0">
          <h1 className="font-bold text-6xl mt-20 mb-10 ml-20">
            Let’s start working <br /> to build a brighter <br /> future.
          </h1>
          <p className="ml-20 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Elementum posuere eget elementum vulputate elementum <br /> viverra
            sapien tellus aenean.
          </p>

          <ul className="flex gap-8 ml-20 mb-20">
            <li>Fb</li>
            <li>In</li>
            <li>Tw</li>
            <li>Ln</li>
          </ul>
        </div>
        <div className="w-3/5  mt-20">
          <input
            className="w-1/2 h-28 border-r-transparent bg-transparent px-1 border-white border  mt-20 ml-80"
            placeholder="Join our mailing list"
            type="email"
          />
          <button className="border-collapse border-l-transparent border h-28">Submit</button>
        </div>
      </div>
    </footer>
  );
}
