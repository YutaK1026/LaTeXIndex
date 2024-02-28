"use client"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SearchLocation from "@/components/props/searchlocaion";
import SideMenu from "@/components/props/sidemenu";
import ItemPool from "@/components/props/itempool";
import Header from "@/components/pages/header";
import { useState } from "react";

export default function MainContent() {
  const [searchWordList, setSearchWordList] = useState<string[]>([""])
  const [showSideMenu, setShowSideMenu] = useState(true)
  const setWord = (word: string) => {
    const wordList = word.split(' ')
    setSearchWordList(wordList)
    //COMMENT: 検索欄に入力したワードをitempoolに送信する
  }

  return (
    <ResizablePanelGroup
      direction="horizontal">
      <ResizablePanel defaultSize={22} className={showSideMenu?"border-r-2":"border-r-2 hidden"}>
        <div className="flex h-screen items-center justify-center p-1">
          <SideMenu setWord={setWord}/>
        </div>
      </ResizablePanel>
      <ResizablePanel defaultSize={3}>
        <div className="mt-6 w-6/12 h-10 border bg-current rounded-r-md flex items-center" onClick={() => {setShowSideMenu(!showSideMenu)}}>
          <div className="text-background font-extrabold">
            ＞
          </div>
        </div>
      </ResizablePanel>
      <ResizablePanel defaultSize={showSideMenu?75:97}>
        <ResizablePanelGroup
          direction="vertical">
          <ResizablePanel defaultSize={15}>
            <div className="flex h-full ml-10">
              <SearchLocation setWord={setWord}/>
            </div>
          </ResizablePanel>
          <ResizablePanel defaultSize={85}>
            <div className="flex h-full p-6">
              <ItemPool searchWordList = {searchWordList}/>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}