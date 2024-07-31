import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col mt-64 mb-72 justify-center text-center items-center">
      <h1 className="font-bold text-6xl mb-6 ">Become a better <br />business with us.</h1>
      <h3 className="text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam turpis tortor, ultricies ut justo eu.</h3>
      <button className="bg-purple-600 p-3 px-14 mt-5 text-white rounded-full">Our Business</button>
    </div>
    <img src="/bruce-mars-FWVMhUa_wbY-unsplash 1@2x.png" alt="" />
    </div>
  );
}
