import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const tags = ["A", "B", "C", "D"]
export default function SideMenu(){
	return(
		<ScrollArea className="h-full w-full ml-4">
			<div className="text-xl">
				Document Classes
			</div>
			<Separator/>
			{tags.map((tag) => (
				<div key={tag} className="text-sm p-3 bg-color-gray">
					{tag}
				</div>
			))}
			<div className="text-xl">
				Common DocumentClass Options
			</div>
			<Separator />
			{tags.map((tag) => (
				<div key={tag} className="text-sm p-3">
					{tag}
				</div>
			))}
			<div className="text-xl">
				Packages
			</div>
			<Separator />
			{tags.map((tag) => (
				<div key={tag} className="text-sm p-3">
					{tag}
				</div>
			))}
			<div className="text-xl">
				Title
			</div>
			<Separator />
			{tags.map((tag) => (
				<div key={tag} className="text-sm p-3">
					{tag}
				</div>
			))}
		</ScrollArea>
	)
}