
const questionCardStyle = {
    container:containerStyle,
    title:{
        color:'#111',
        marginBottom: '1.5rem',
        textTransform: 'capitalize'
    },
    description:{
        color:'#333'
    },
    difficulty: difficultyStyle
};

function containerStyle(isHover){
    const style = {
        fontFamily: 'Roboto sans-serif', 
        height: '14.375rem',
        width: '21.875rem',
        borderRadius: '1.5%',
        backgroundColor: '#fff',
        padding: '0.938rem 1.25rem 1.25rem 1.25rem',
        transition: 'all 0.5s ease' ,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
    if(isHover){
        return {...style, boxShadow: '0 5px 12px -3px rgb(0 0 0 / 35%)'}
    }else{
        return {...style, boxShadow: '0px 5px 12px -4px rgb(0 0 0 / 20%)'}
    }

}
function difficultyStyle(difficulty){
    const style = {
        marginBottom: '1.9rem',
         textTransform: 'capitalize'
    }

    switch(difficulty){
        case 'hard':
            return {...style, color: '#28a74c'};
        case 'medium':
            return {...style, color: '#0080ff'};
        case 'easy':
            return {...style, color: '#f54425'};
        default:
            return {...style, color: 'black'};
    }
}

export { questionCardStyle, difficultyStyle };
