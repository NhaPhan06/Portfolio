import React from 'react'
import './index.css'

const Index = () => {
    return (
        <>
            <section id='index' className="grid grid-cols-4 grid-rows-7 gap-4 w-[90vw] h-[100vh] mx-auto">
                <div className="row-span-5">1</div>
                <div className="col-span-2 row-span-3 col-start-2 row-start-3">5</div>
                <div className="col-span-3 row-span-2 col-start-2 row-start-1">6</div>
                <div className="row-span-5 col-start-4 row-start-3">

                </div>
                <div className="col-span-3 row-span-2 row-start-6">8</div>
            </section>
            <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto ">
                <div className="group  bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
                    <div className="relative">
                        <div className="px-6 py-5">
                            <div className="bg-green-400 group-hover:bg-blue-600  transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                                Password
                            </div>
                            <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                                Don't Show Your Password
                            </span>
                            <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                                Hide Your Password
                            </span>
                            <p className="text-sm text-slate-500">
                                If you don't hide your password then we can see it and know it
                                and then can enter your account
                            </p>
                        </div>
                        <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                            <img
                                className="group-hover:opacity-0 transition-opacity duration-500"
                                src="https://placehold.co/300x500"
                                width={350}
                                height={240}
                                alt="Card image 01"
                            />
                            <img
                                className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                src="https://placehold.co/300x500"
                                width={350}
                                height={240}
                                alt="Card image 01 displaying on hover"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>      
            </section>
        </>
    )
}

export default Index