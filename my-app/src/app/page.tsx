"use client";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SearchLocation from "@/components/props/searchlocaion";
import SideMenu from "@/components/props/sidemenu";
import ItemPool from "@/components/props/itempool";
import Header from "@/components/pages/header";
import MainContent from "@/components/pages/maincontent";
import HeaderPhone from "@/components/pages/smartphone/header";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [searchWordList, setSearchWordList] = useState<string[]>([""])
  const inputRef = useRef<HTMLInputElement>(null);
  
  const setWordHeader = (word: string) => {
    //COMMENT: 子コンポーネントのHeaderで検索ワードが指定された時に発火。
    //COMMENT: 検索ワードを子コンポーネントのMainContentに流す
    const wordList = word.split(' ')
    setSearchWordList(wordList)
  }
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
    <main>
      <div>
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-screen max-w-screen">
          <ResizablePanel defaultSize={10}>
            {isPcType?
              <Header setWordHeader={setWordHeader}/>
              :
              <HeaderPhone setWordHeader={setWordHeader}/>
            }
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            aaaaa
            <MainContent searchWordListFromHeader={searchWordList}/>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
