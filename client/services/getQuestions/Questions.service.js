const getQuestions = async () => {
    return fetch(`http://127.0.0.1:8000/api/questions`, {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
    }).then(response => response.json());
};

export { getQuestions };