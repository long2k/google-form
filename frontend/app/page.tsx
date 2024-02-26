"use client";
import { getServerSession } from "next-auth";
import { useEffect } from "react";

import { options } from "@/app/api/auth/[...nextauth]/options";
import HomePage from "@/components/HomePage";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  
  return <>{session ? <HomePage /> : <Login />}</>;
}
