import React from "react";
import "./index.css";

const Index = () => {
  return (
    <>
      <section id="index" className="h-screen w-full">
        <div className="grid grid-cols-6 grid-rows-6 gap-4 w-[70vw] h-[80vh] mx-auto mt-[10vh] mb-[10vh]">
          {/* Center Block - Your Name / Logo */}
          <div className="col-span-2 row-span-2 col-start-3 row-start-3 group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border">
            <div className="relative flex flex-col justify-end h-full">
              {" "}
              {/* Thêm flex và justify-between */}
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-blue-600 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Password
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                  Don't Show Your Password
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                  Hide Your Password
                </span>
                <p className="text-sm text-slate-500">
                  If you don't hide your password then we can see it and know it
                  and then can enter your account
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* About Me */}
          <div
            onClick={() =>
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="col-span-2 row-span-4 col-start-1 row-start-1 group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border"
          >
            <div className="relative flex flex-col justify-end h-full">
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-blue-600 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Who's This?
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                  Just a Guy with a Keyboard
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                  Meet Ed: Code Whisperer
                </span>
                <p className="text-sm text-slate-500">
                  Backend whisperer. Frontend wrangler. Dreamer of microservices
                  and dark mode. Born in Quảng Trị, raised in the cloud.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* Skills */}
          <div
            onClick={() =>
              document
                .getElementById("technologies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="col-span-4 row-span-2 col-start-1 row-start-5 group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border"
          >
            <div className="relative flex flex-col justify-end h-full">
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-blue-600 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Technologies
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                  Code Is My Superpower
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                  Skills That Pay the Bills
                </span>
                <p className="text-sm text-slate-500">
                  .NET, Java, Go, Python, Redis, RabbitMQ, Docker. I speak
                  fluent API and occasionally yell at TypeScript.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* Projects */}
          <div
            onClick={() =>
              document
                .getElementById("project")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="col-span-2 row-span-4 col-start-5 row-start-3 group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border"
          >
            <div className="relative flex flex-col justify-end h-full">
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-blue-600 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Code in Action
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                  My Digital Legacy
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                  Stuff I Shipped
                </span>
                <p className="text-sm text-slate-500">
                  ⚙️ FU-NextExam — smart exam system for FPTU. <br />
                  📚 Book Store Microservices — backend buffet.
                  <br />
                  🔐 Notarization Manager — saving lawyers from paper cuts.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* Code Philosophy */}
          <div className="col-span-4 row-span-2 col-start-3 row-start-1 group bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border">
            <div className="relative flex flex-col justify-end h-full">
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-blue-600 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  My Code Beliefs
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                  Code Hard, Fail Loud
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                  Break Things with Purpose
                </span>
                <p className="text-sm text-slate-500">
                  I write code like I write poetry — structured chaos. Clean
                  commits, dirty mugs, and never push to `main` without a backup
                  prayer.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
