import CommandCard from "@/components/props/commandcard"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ItemPool(){
  const titleName = [["Title",`title{title}`,"タイトルを表示"], ["Author","\title{title}","著者を表示"], ["Date","\title{title}","日付を表す"], ["Title",`title{title}`,"タイトルを表示"], ["Title",`title{title}`,"タイトルを表示"], ["Title",`title{title}`,"タイトルを表示"], ["Title",`title{title}`,"タイトルを表示"], ["Author","\title{title}","著者を表示"], ["Title",`title{title}`,"タイトルを表示"], ["Author","\title{title}","著者を表示"], ]
  return(
    <ScrollArea className="h-full w-full ml-4">
    <div className="grid grid-flow-row-dense grid-cols-4 m-4">
      {titleName.map((item, key) => {
        return(
          <div className="m-3">
            <CommandCard 
              title={item[0]}
              command={item[1]}
              description={item[2]}
            />
          </div>
        )
      })}
    </div>
    </ScrollArea>
  )
}