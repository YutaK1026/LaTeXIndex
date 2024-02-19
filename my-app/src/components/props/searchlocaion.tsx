'use client';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SearchLocation({setWord}: {setWord: (word: string)=>void}) {
  const handleKeyDown = (e: React.KeyboardEvent<EventTarget> & React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }
  const onFocusFunc = (e: string) => {
    setWord(e)
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">検索BOX</Label>
      <Input
        type="text"
        id="input"
        value=""
        onChange={handleKeyDown}
        placeholder="検索ワードを入力してください"
        onFocus={(e) => {onFocusFunc(e.target.value)}}
      />
    </div>
  )
}