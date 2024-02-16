"use client"
import CommandCard from "@/components/props/commandcard"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react";
import getImageListFromNotion from "@/components/props/image-from-notion";
import SearchCommand from "@/components/props/search/search-command";

interface NotionImageProps{
  title: string
  id: string
  image: string
  command: string
  description: string
}

export default function ItemPool(){

  const [data, setData] = useState<NotionImageProps[]>();
  useEffect(() => {
    const fetchData = async () => {
      const result = SearchCommand([""])
      setData(result);
      console.log(result)
    };
    fetchData();
  }, []);

  if(!data){return <div>Loading</div>}

  return(
    <ScrollArea className="h-full w-full ml-4">
    <div className="grid grid-flow-row-dense grid-cols-4 m-4">
      {data.map((item, key) => {
        return(
          <div className="m-3" key={"key"+key}>
            <CommandCard 
              title={item.title}
              command={item.command}
              description={item.description}
              url={item.image}
            />
          </div>
        )
      })}
    </div>
    </ScrollArea>
  )
}