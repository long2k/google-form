"use client";
import { getServerSession } from "next-auth";
import { useEffect } from "react";

import { options } from "@/app/api/auth/[...nextauth]/options";
import HomePage from "@/components/HomePage";
import Login from "@/components/Login";

export default function Home() {
  let session;
  const getSession = async () => {
    session = await getServerSession(options);
  };

  useEffect(() => {
    getSession().catch(console.error);
  }, []);
  return <>{!session ? <HomePage /> : <Login />}</>;
}
