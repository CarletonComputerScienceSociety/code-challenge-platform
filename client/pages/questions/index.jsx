import Head from 'next/head'
import { QuestionCard } from '../../components'
import Link from 'next/link'
import { getQuestions } from '../../services';

export default function Questions({ data }) {
  return (
    <div className="container">
        {JSON.stringify(data)}
        <Link href="/1"><QuestionCard title="my title 1" difficulty= "hard" description= "Decode the following message"/></Link>

        <QuestionCard title="my title 2 " difficulty= "easy" description= "Longest Substring Without Repeating Characters"/>
        <QuestionCard title="my title 3" difficulty= "medium" description= "Two Sum"/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await getQuestions();

  return {
    props: { data }
  };
};
// question card goes to questions/id make link work, link is a next module
// /questions
// /questions/:id
