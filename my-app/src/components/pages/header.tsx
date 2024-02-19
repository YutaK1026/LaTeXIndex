"use client";
import { Button } from "@/components/ui/button"
import getImageListFromNotion from "@/components/props/image-from-notion"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/props/modebutton";
import Link from "next/link";

export default function Header() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-3 flex items-center">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ml-6">
          LaTeX with React
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