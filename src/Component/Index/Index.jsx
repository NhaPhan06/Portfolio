import React from "react";
import "./index.css";
import Earth from "../../lib/globe";
import Threads from "../../lib/Threads/Threads ";

const Index = () => {
  return (
    <>
      <section id="index" className="w-full min-h-screen">
        <div className="w-[95vw] sm:w-[90vw] lg:w-[70vw] mx-auto py-10 grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-6 gap-4">

          {/* About Me */}
          <div
            onClick={() =>
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative rounded-2xl border overflow-hidden sm:col-span-2 sm:row-span-4 sm:col-start-1 sm:row-start-1"
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
              <Earth />
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full px-6 py-5">
              <div className="bg-green-400 group-hover:bg-blue-600 transition-all w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                Who's This?
              </div>
              <span className="text-lg group-hover:hidden font-semibold text-slate-200 mb-1">
                Just a Guy with a Keyboard
              </span>
              <span className="text-lg group-hover:inline-block hidden font-semibold text-slate-200 mb-1">
                Meet Ed: Code Whisperer
              </span>
              <p className="text-sm text-slate-500">
                Backend whisperer. Frontend wrangler. Dreamer of microservices
                and dark mode. Born in Quảng Trị, raised in the cloud.
              </p>
            </div>
          </div>

          {/* Center Block - Your Name / Logo */}
          <div className="group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border sm:col-span-2 sm:row-span-2 sm:col-start-3 sm:row-start-3">
            <div className="relative flex flex-col justify-end h-full px-6 py-5">
              <div className="bg-green-400 group-hover:bg-blue-600 transition-all w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                Password
              </div>
              <span className="text-lg group-hover:hidden font-semibold text-slate-200 mb-1">
                Don't Show Your Password
              </span>
              <span className="text-lg group-hover:inline-block hidden font-semibold text-slate-200 mb-1">
                Hide Your Password
              </span>
              <p className="text-sm text-slate-500">
                If you don't hide your password then we can see it and know it
                and then can enter your account
              </p>
            </div>
          </div>

          {/* Code Philosophy */}
          <div className="group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border sm:col-span-4 sm:row-span-2 sm:col-start-3 sm:row-start-1">
            <div className="relative flex flex-col justify-end h-full px-6 py-5">
              <div className="bg-green-400 group-hover:bg-blue-600 transition-all w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                My Code Beliefs
              </div>
              <span className="text-lg group-hover:hidden font-semibold text-slate-200 mb-1">
                Code Hard, Fail Loud
              </span>
              <span className="text-lg group-hover:inline-block hidden font-semibold text-slate-200 mb-1">
                Break Things with Purpose
              </span>
              <p className="text-sm text-slate-500">
                I write code like I write poetry — structured chaos. Clean
                commits, dirty mugs, and never push to `main` without a backup
                prayer.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div
            onClick={() =>
              document
                .getElementById("technologies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative rounded-2xl border overflow-hidden sm:col-span-4 sm:row-span-2 sm:col-start-1 sm:row-start-5"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Threads
                color={[1, 1, 2]}
                amplitude={4}
                distance={0}
                enableMouseInteraction={true}
              />
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full px-6 py-5">
              <div className="bg-green-400 group-hover:bg-blue-600 transition-all w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                Technologies
              </div>
              <span className="text-lg group-hover:hidden font-semibold text-slate-200 mb-1">
                Code Is My Superpower
              </span>
              <span className="text-lg group-hover:inline-block hidden font-semibold text-slate-200 mb-1">
                Skills That Pay the Bills
              </span>
              <p className="text-sm text-slate-500">
                .NET, Java, Go, Python, Redis, RabbitMQ, Docker. I speak
                fluent API and occasionally yell at TypeScript.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div
            onClick={() =>
              document
                .getElementById("project")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border sm:col-span-2 sm:row-span-4 sm:col-start-5 sm:row-start-3"
          >
            <div className="relative flex flex-col justify-end h-full px-6 py-5">
              <div className="bg-green-400 group-hover:bg-blue-600 transition-all w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                Code in Action
              </div>
              <span className="text-lg group-hover:hidden font-semibold text-slate-200 mb-1">
                My Digital Legacy
              </span>
              <span className="text-lg group-hover:inline-block hidden font-semibold text-slate-200 mb-1">
                Stuff I Shipped
              </span>
              <p className="text-sm text-slate-500">
                ⚙️ FU-NextExam — smart exam system for FPTU. <br />
                📚 Book Store Microservices — backend buffet.
                <br />
                🔐 Notarization Manager — saving lawyers from paper cuts.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Index;
