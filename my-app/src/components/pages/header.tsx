"use client";
import { Button } from "@/components/ui/button"
import getImageListFromNotion from "@/components/props/image-from-notion"

export default function Header() {
  return (
    <div className="flex">
      <h2 className="flex-auto scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        LaTeX with React
      </h2>
      <Button className="m-3" onClick={getImageListFromNotion}>
        データ更新取得
      </Button>
    </div>
  )
}