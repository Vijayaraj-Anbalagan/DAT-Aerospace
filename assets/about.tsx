import Image from "next/image";

export default function About() {
    return (
      <div
        className="text-white overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(to top left, #0b2b87 0%, black 20%)',
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  We're <span className="text-cyan-400">Phunk.</span>
                  <br />
                  Pleased to meet you.
                </h1>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Phunk is a full-service digital marketing agency based out
                    storytelling — taking your raw ideas and vision and
                    translating them into a clear brand narrative, expressed
                    through design, video, copy and UX.
                  </p>
                  <p>
                    If you're looking for a forward-thinking team of creatives
                    to build a brand identity that stands out from the crowd,
                    then you're exactly where you need to be.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-[90%] md:h-[400px]">
                  <Image
                    src="/spaceCraft.jpg"
                    alt="3D Robot mascot"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    className="filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
}