'use client'

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react"
interface ContextProps{
    email: string;
    name: string;
    image: string;
}

const GlobalContext = createContext<ContextProps>({
    email: "",
    name: "",
    image: ""
})
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) =>{
    const { data: user } = useSession();
    const value = {
      email: user?.user?.email ?? "",
      name: user?.user?.name ?? "",
      image: user?.user?.image ?? ""
    };
  
    return(
      <GlobalContext.Provider value={value}>
          {children}
      </GlobalContext.Provider>
    )
  }
  
export const useGlobalContext=()=> useContext(GlobalContext)