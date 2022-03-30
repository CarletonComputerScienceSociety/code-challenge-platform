import React, { useState } from 'react';
import Link from 'next/link';
import { questionCardStyle } from './QuestionCard.style';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';


const difficultyMap = {
  easy: "Beginner",
  Basic: "Beginner",
  medium: "Medium",
  Intermediate: "Medium",
  Hard: "Challenging",
  Challenging: "Challenging"
}


const shortDesc = (description) => {
  let words = description.split(" ");
  return words.length <= 20 ?
    description : words.splice(0, 20).join(" ").concat("...");
}

const QuestionCard = ({ title, difficulty, description, id }) => {

  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={`/questions/${id}`}>
      <Box className="question-card" sx={questionCardStyle.container(isHover)}
        onMouseEnter={() => { setIsHover(true) }}
        onMouseLeave={() => { setIsHover(false) }}>
        <span style={{ lineHeight: '0px' }}>
          <h5 style={questionCardStyle.difficulty(difficulty)}>{difficultyMap[difficulty]} </h5>
          <h3 style={questionCardStyle.title}>{title}</h3>
        </span>
        <span style={questionCardStyle.description}>{shortDesc(description)}</span>
      </Box>
    </Link>
  )

};


export { QuestionCard };
