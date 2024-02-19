import SearchCommand from "@/components/props/search/search-command";

export default function SplitByTag(wordList: string[]) {
  const req = SearchCommand(wordList)
  var CommandListBeforeMolding: any = {}
  var CommandListSplitByTag: any = []

  req.map((i) => {
    if(!CommandListBeforeMolding[i.tag])CommandListBeforeMolding[i.tag] = [i]
    else CommandListBeforeMolding[i.tag].push(i)
  })

  for(var i in CommandListBeforeMolding){
    var dict: any = {}
    dict[i] = CommandListBeforeMolding[i]
    CommandListSplitByTag.push(dict)
  }
  
  return CommandListSplitByTag
}