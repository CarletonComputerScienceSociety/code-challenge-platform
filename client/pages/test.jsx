import Head from 'next/head'
import { QuestionCard } from '../components'


export default function Test() {
  let text = "Longest Substring Without asds sdass sadad  srer sa asdrawe saarRepeating Characters Longest Substring Without Repeating CharactersLongest Substring Without Repeating CharactersLongest Substring Without Repeating Characters Longest Substring Without Repeating Characters Longest Substring Without Repeating CharactersLongest Substring Without Repeating CharactersLongest Substring Without Repeating Characters Longest Substring Without Repeating Characters Longest Substring Without Repeating CharactersLongest Substring Without Repeating CharactersLongest Substring Without Repeating Characters";
  return (
    <div style={{display:'flex'}} className="container">
        <QuestionCard id="1" title="my title 1" difficulty= "hard" description= "Decode the following message"/>
        <QuestionCard id="2" title="my title 2 " difficulty= "easy" description = {text}/>
        <QuestionCard id="3" title="my title 3" difficulty= "medium" description= "Two Sum"/>
    </div>
  )
}
