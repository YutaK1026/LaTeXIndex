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
import { useState, useEffect } from "react";

interface SearchWordListProps {
  searchWordListFromHeader: string[]
}

export default function MainContent({searchWordListFromHeader}: SearchWordListProps) {
  const [searchWordList, setSearchWordList] = useState<string[]>(searchWordListFromHeader)
  
  useEffect(() => {
    //COMMENT: Header内のSideMenuで検索ワードが指定されたときに、ここでsetする。
    setSearchWordList(searchWordListFromHeader)
  },[searchWordListFromHeader])

  const setWord = (word: string) => {
    const wordList = word.split(' ')
    setSearchWordList(wordList)
    //COMMENT: 検索欄に入力したワードをitempoolに送信する
  }

  return (

        // <ResizablePanelGroup
        //   direction="vertical">
        //   <ResizablePanel defaultSize={15}>
        //     a
        //     {/* <div className="flex h-full mx-8">
        //       <SearchLocation setWord={setWord}/>
        //     </div> */}
        //   </ResizablePanel>
        //   <ResizablePanel defaultSize={85}>
        //     b
        //     {/* <div className="flex h-full p-6">
        //       <ItemPool searchWordList = {searchWordList}/>
        //     </div> */}
        //   </ResizablePanel>
        // </ResizablePanelGroup>

        <div className="h-full">

          <div className="mx-8">
            <SearchLocation setWord={setWord}/>
          </div>
          <div className="flex h-full p-6">
            <ItemPool searchWordList = {searchWordList}/>
          </div>
        </div>
  )
}