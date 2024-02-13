'use client';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SearchLocation(){
  const  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    console.log("Enterキーが押された")
  }

  return(
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">検索BOX</Label>
      <Input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="検索ワードを入力してください" 
      />
    </div>
  )
}