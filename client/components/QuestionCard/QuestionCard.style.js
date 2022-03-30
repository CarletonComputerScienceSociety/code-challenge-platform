
const questionCardStyle = {
    container: containerStyle,
    difficulty: difficultyStyle,
    title:{
        color:'text.primary',
        marginBottom: '1.5rem',
        textTransform: 'capitalize'
    },
    description:{
        color:'text.secondary'
    }
};

function containerStyle(isHover){
    if(isHover){
        return {backgroundColor: 'action.hover', boxShadow: 2}
    }else{
        return {backgroundColor: 'background.default', boxShadow: 6}
    }

}
function difficultyStyle(difficulty){
    const style = {
        marginBottom: '1.9rem',
        textTransform: 'capitalize'
    }

    switch(difficulty){
        case 'hard': 
        case 'Challenging':
            return {...style, color: '#28a74c'};
        case 'medium': 
        case 'Intermediate':
            return {...style, color: '#0080ff'};
        case 'easy': 
        case 'Basic':
            return {...style, color: '#f54425'};
        default:
            return {...style, color: 'text.primary'};
    }
}

export { questionCardStyle};
