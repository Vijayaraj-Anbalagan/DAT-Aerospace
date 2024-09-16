import React from 'react';
import Image from 'next/image';

const BentoGrid = () => {
  return (
    <main
      className=""
      style={{
        backgroundImage: 'linear-gradient(to top right, black 80%, #0b2b87)',
      }}
    >
      <h1 className="relative text-4xl md:text-5xl font-bold mx-auto text-center mb-10">
        Focus &{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Goals
        </span>
      </h1>
      <div className=" lg:px-16 max-lg:px-8 grid lg:grid-cols-2  gap-8 sm:grid-cols-1 ">
        {/* Container 1 */}
        <div className="bg-[#141414] p-8 rounded-[25px] ">
          {/* Number and Title */}
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <div className="relative">
              <div className="h-50">
                <h1 className="text-[50px] font-bold text-transparent outline-text">
                  01
                </h1>
              </div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Web Design
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300">
              We create stunning, engaging, and high-conversion websites based
              on the versatile and future-proof Webflow platform. Search engine
              optimization and cutting-edge user experience design come as
              standard, along with exceptional reliability, scalability, and
              performance. Plus, friendly support — whenever you need us.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black">
            <Image
              src={'/sample.jpg'}
              width={200}
              height={100}
              alt="Web Design Image"
              className="rounded-xl"
              layout="responsive"
            />
          </div>
        </div>

        {/* Container 2 */}
        <div className="bg-[#141414] p-8 rounded-[25px] ">
          {/* Number and Title */}
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <div className="relative">
              <div className="h-50">
                <h1 className="text-[50px] font-bold text-transparent outline-text">
                  02
                </h1>
              </div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Web Design
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300">
              We create stunning, engaging, and high-conversion websites based
              on the versatile and future-proof Webflow platform. Search engine
              optimization and cutting-edge user experience design come as
              standard, along with exceptional reliability, scalability, and
              performance. Plus, friendly support — whenever you need us.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black ">
            <Image
              src={'/sample.jpg'}
              width={200}
              height={100}
              alt="Web Design Image"
              className="rounded-xl"
              layout="responsive"
            />
          </div>
        </div>

        {/* Container 3 */}
        <div className="bg-[#141414] p-8 rounded-[25px]  lg:col-span-2 lg:flex">
          <div className="max-w-lg  text-center md:text-left">
            <div className="relative">
              <div className="h-50">
                <h1 className="text-[50px] font-bold text-transparent outline-text">
                  03
                </h1>
              </div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Web Design
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300">
              We create stunning, engaging, and high-conversion websites based
              on the versatile and future-proof Webflow platform. Search engine
              optimization and cutting-edge user experience design come as
              standard, along with exceptional reliability, scalability, and
              performance. Plus, friendly support — whenever you need us.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black">
            <Image
              src={'/sample.jpg'}
              width={500}
              height={100}
              alt="Web Design Image"
              className="rounded-xl"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BentoGrid;
