import React, { useState } from 'react';
import Link from 'next/link';
import {questionCardStyle} from './QuestionCard.style';


const difficultyMap = {
  easy: "Beginner",
  medium: "Medium",
  hard: "Challenging"
}


const shortDesc = (description)=>{
  let words = description.split(" ");
  return words.length <= 25 ? 
        description : words.splice(0, 25).join(" ").concat("...");
} 

const QuestionCard = ({title, difficulty, description, id}) => {

  const [isHover, setIsHover] = useState(false);

  return ( 
    < >
    <Link href={`/questions/${id}`}>
      <div style={questionCardStyle.container(isHover)} 
          onMouseEnter={()=> {setIsHover(true); console.log("enter");}}
          onMouseLeave={()=> {setIsHover(false);console.log("leave");}}>
        <span style={{lineHeight: '0px'}}>
            <h5 style={questionCardStyle.difficulty(difficulty)}>{difficultyMap[difficulty]} </h5>
            <h3 style= {questionCardStyle.title}>{title}</h3>
        </span>      
        <div style= {questionCardStyle.description}>{shortDesc(description)}</div> 
      </div> 
    </Link>
    </>
  )

};


export { QuestionCard };
