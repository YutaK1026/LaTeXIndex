"use client"
import CommandCard from "@/components/props/commandcard"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react";
import SplitByTag from "@/components/props/search/split-by-tag";

interface NotionImageProps {
  title: string
  id: string
  image: string
  command: string
  description: string
  tag: string
  searchword: string
}
interface SearchWordListProps {
  searchWordList: string[]
}
type CommandListProps = Record<string, NotionImageProps[]>

export default function ItemPool({searchWordList}: SearchWordListProps) {

  const [data, setData] = useState<CommandListProps[]>();
  useEffect(() => {
    //COMMENT: 検索欄にワードを入れてEnterを押した時点の単語で検索をかける
    const fetchData = async () => {
      const result = SplitByTag(searchWordList)
      setData(result)
    };
    fetchData();
  }, [searchWordList]);

  if (!data) { return <div>Loading</div> }

  return (
    <ScrollArea className="h-full w-full ml-4">
      <div>
        {data.map((item, key) => {
          const keyName = Object.keys(item)[0]
          var CommandList: NotionImageProps[] = []
          item[keyName].map((i) => { CommandList.push(i) })
          return (
            <div className="m-3" key={"key" + key}>
              <div className="border-b-2 text-xl">
                {keyName}
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] m-4">
                {CommandList.map((i: NotionImageProps, key) => {
                  return (
                    <div className="m-2" key={key}>
                      <CommandCard
                        title={i.title}
                        command={i.command}
                        description={i.description}
                        url={i.image}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}