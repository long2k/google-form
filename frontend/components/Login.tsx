import React from "react";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"

const Login = () => {

  return (
    <section className="w-full h-screen">
      <div className="w-full h-full grid grid-cols-4 ">
        <div className="lg:col-span-1 col-span-2 flex flex-col justify-center items-center gap-y-5 rounded-[100px]">
            <div className="text-3xl text-center font-semibold">Let Start App With <span>Google</span></div>
            <div>Survey form helps you work quickly.</div>
            <button onClick={() => signIn()} className="flex gap-x-3 border border-amber-300 rounded-[100px] px-2 py-2">
              <Image src={"/google.svg"} width={24} height={24} alt="google icon" /> 
              <div className="font-semibold"> Sign In</div>
            </button>
        </div>
        <div className="lg:col-span-3 col-span-2 bg-login bg-cover bg-no-repeat bg-center">
        </div>
      </div>
    </section>
  );
};

export default Login;
