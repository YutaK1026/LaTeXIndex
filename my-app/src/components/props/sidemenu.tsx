import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import SplitByTag from "@/components/props/search/split-by-tag"

interface NotionImageProps {
  title: string
  id: string
  image: string
  command: string
  description: string
  tag: string
}
type CommandListProps = Record<string, NotionImageProps[]>

export default function SideMenu({setWord}: {setWord: (word: string)=>void}) {
  const notionData = SplitByTag([""])
  
  const selectTag = (title: string) => {
    setWord(title)
  }

  return (
    <ScrollArea className="h-full w-full ml-4">
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
                <div key={key} className="text-sm p-3 bg-color-gray" onClick={() => {selectTag(i.title)}}>
                  {i.title}
                </div>
              )
            })}
          </div>
        )

      })}
    </ScrollArea>
  )
}