import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SearchLocation from "@/components/props/searchlocaion";
import SideMenu from "@/components/props/sidemenu";
import ItemPool from "@/components/props/itempool";
import Header from "@/components/pages/header";
import MainContent from "@/components/pages/maincontent";

export default function Home() {
  return (
    <main>
      <div>
        <ResizablePanelGroup
         direction="vertical"
         className="min-h-screen max-w-screen">
          <ResizablePanel defaultSize={10}>
            <Header/>
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            <MainContent/>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
