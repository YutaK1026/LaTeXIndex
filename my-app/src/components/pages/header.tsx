"use client";
import { Button } from "@/components/ui/button"
import getImageListFromNotion from "@/components/props/image-from-notion"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/props/modebutton";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideMenu from "@/components/props/sidemenu";
import { AlignJustify } from 'lucide-react';
import { useState, useRef } from "react";

interface HeaderProps {
  setWordHeader: (word: string)=>void
}

export default function Header({setWordHeader}: HeaderProps) {
  const Ref = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const setWord = (word: string) => {
    setWordHeader(word)
    setIsOpen(!isOpen)
    //COMMENT: Header内にSideMenuがある。そこで選択した要素を描画するため、wordを親コンポーネントのPageに流す
    //COMMENT: 検索欄に入力したワードをitempoolに送信する
  }

  const handleSetOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-3 flex items-center">
        <div className="m-2 flex items-center">
          <Sheet open={isOpen}>
            <SheetTrigger onClick={() => {handleSetOpen()}}>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent handleSetOpen={handleSetOpen}>
              <SheetHeader>
                <SheetTitle>
                  絞り込むワードを選択してください。
                </SheetTitle>
                <SheetDescription>
                  <SideMenu setWord={setWord} />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ml-6">
          <Link href="/">
            LaTeX with React
          </Link>
        </h1>
      </div>

      <div className="col-span-1 flex items-center">
        <ModeToggle/>
      </div>

      <div className="col-span-1 m-3 flex items-center underline">
        <Link href="/contact">
          お問い合わせはこちら
        </Link>
      </div>

      <Button className="col-span-1 m-3" onClick={getImageListFromNotion}>
        データ更新取得
      </Button>

    </div>
  )
}