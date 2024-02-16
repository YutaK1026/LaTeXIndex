"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface CommandCardProps{
  title: string
  command: string
  description: string
  url: string
}

export default function CommandCard({title, command, description, url}: CommandCardProps){
  
  return(
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mb-2 ml-2">詳細</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>コマンド詳細</DialogTitle>
            <DialogDescription>
              コマンド概要: {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4">
            <div className="align-middle">
              command: 
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              \{command}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="align-middle">
              preview: 
            </div>
            <div className="rounded-md border px-4 py-3 font-serif text-sm"> 	
              <Image
                src={url}
                width={100}
                height={100}
                alt={title}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}