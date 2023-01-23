import { useEffect, useState } from "react"


export default function Trivia({data, setTimeOut,
   questionNumber, setQuestionNumber}) {

    const [question,setQuestion] = useState(null);
    useEffect(()=>{
      setQuestion(data[questionNumber - 1]);
    },[data,questionNumber]);

  return (
    <div className="trivia">
        <div className="question">What's the bnest?</div>
        <div className="answers">
            <div className="answer">laafw</div>
            <div className="answer">laafw</div>
            <div className="answer">laafw</div>
            <div className="answer">laafw</div>
        </div>

    </div>
  )
}
