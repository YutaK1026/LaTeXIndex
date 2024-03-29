"use client";
import Contact from "@/components/pages/contact"
import Header from "@/components/pages/header";
import HeaderPhone from "@/components/pages/smartphone/header";
import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
  const setWord = (word:string) => {}

  const [isPcType, setIsPcType] = useState(false)
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPad", "iPod", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1
    })
    if(mobileTypeCheck.length > 0){
      setIsPcType(false)
    }else{
      setIsPcType(true)
    }
    console.log(machineType)
  })

  return (
    <div>
      {isPcType?
        <div>
          <Header setWordHeader={setWord}/>
          <div className="m-10">
            <Contact/>
          </div>
        </div>
        :
        <div>
          <HeaderPhone setWordHeader={setWord}/>
          <div className="mt-6">
            <Contact/>
          </div>
        </div>
      }
    </div>
  )
}
