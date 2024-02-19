import notionData from "@/app/api/notion/data.json"
import { bigram, trigram, nGram } from 'n-gram'

interface NotionImageProps {
  title: string
  id: string
  image: string
  command: string
  description: string
  tag: string
}

export default function SearchCommand(wordList: string[]) {
  var commandList: NotionImageProps[] = []
  var word_ngram: string[] = []
  wordList.map((word) => {
    //COMMENT: スペースで単語を区切ることを想定
    if (word.length >= 3) {
      word_ngram = trigram(word)
    } else {
      word_ngram = [word]
    }
    //COMMENT: trigram(3つずつ)のワードに検索単語を分割
    word_ngram.map((item) => {
      //COMMENT: 分割したそれぞれの単語について部分一致を検索する
      notionData.map((data) => {
        if ((data.title.indexOf(item) > -1) && (!commandList.includes(data))) {
          //COMMENT: コマンドのtitleと入力した検索コマンドのngramが部分一致したらListに追加
          commandList.push(data)
        }
      })
    })
  })
  return commandList
}