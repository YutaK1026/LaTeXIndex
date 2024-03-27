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
import { useState, useRef } from "react";

export default function Home() {
  const [searchWordList, setSearchWordList] = useState<string[]>([""])
  const inputRef = useRef<HTMLInputElement>(null);
  
  const setWordHeader = (word: string) => {
    //COMMENT: 子コンポーネントのHeaderで検索ワードが指定された時に発火。
    //COMMENT: 検索ワードを子コンポーネントのMainContentに流す
    const wordList = word.split(' ')
    setSearchWordList(wordList)
  }

  return (
    <main>
      <div>
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-screen max-w-screen">
          <ResizablePanel defaultSize={10}>
            <Header setWordHeader={setWordHeader}/>
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            <MainContent searchWordListFromHeader={searchWordList}/>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
