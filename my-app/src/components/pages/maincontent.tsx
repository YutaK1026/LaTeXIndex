import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  import SearchLocation from "@/components/props/searchlocaion";
  import SideMenu from "@/components/props/sidemenu";
  import ItemPool from "@/components/props/itempool";
  import Header from "@/components/pages/header";

export default function MainContent(){
	return(
		<ResizablePanelGroup 
		direction="horizontal">
			<ResizablePanel defaultSize={25}>
				<div className="flex h-screen items-center justify-center p-1">
					<SideMenu />
				</div>
			</ResizablePanel>
			<ResizablePanel defaultSize={75}>
				<ResizablePanelGroup
					direction="vertical">
					<ResizablePanel defaultSize={15}>
						<div className="flex h-full ml-10">
							<SearchLocation />
						</div>
					</ResizablePanel>
					<ResizablePanel defaultSize={85}>
						<div className="flex h-full p-6">
							<ItemPool />
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>	
	)
}