import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import SplitByTag from "@/components/props/search/split-by-tag"
import { useRef } from "react"

interface NotionImageProps {
  title: string
  id: string
  image: string
  command: string
  description: string
  tag: string
  searchword: string
}
type CommandListProps = Record<string, NotionImageProps[]>

interface SideMenuProps {
  setWord: (word: string)=>void
}

export default function SideMenu({setWord}: SideMenuProps) {
  const notionData = SplitByTag([""])
  const selectTag = (title: string) => {
    setWord(title)
  }

  return (
    <ScrollArea className="h-full w-full ml-4">
      <div className="text-xl">
        ALL
      </div>
      <Separator />
      <div className="text-sm p-3 hover:font-extrabold rounded-md" onClick={() => {selectTag("")}}>
        ALL
      </div>
      <br />
      {notionData.map((item: CommandListProps, key: string) => {
        const keyName = Object.keys(item)[0]
        var commandList: NotionImageProps[] = []
        item[keyName].map((i) => { commandList.push(i) })
        return (
          <div key={key}>
            <div className="text-xl">
              {keyName}
            </div>
            <Separator />
            {commandList.map((i: NotionImageProps, key) => {
              return (
                <div key={key} className="text-sm p-3 hover:font-extrabold rounded-md" onClick={() => {selectTag(i.title)}}>
                  {i.title}
                </div>
              )
            })}
          </div>
        )
      })}
    <div>
      <br />
    </div>
    </ScrollArea>
  )
}