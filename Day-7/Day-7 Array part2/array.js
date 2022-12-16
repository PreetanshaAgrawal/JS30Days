const comments = [
    {text: 'Love this', id: 738939},
    {text: 'Super good', id: 738949},
    {text: 'You are my fav person', id: 738959},
    {text: 'I love chocolates', id: 738969},
    {text: 'Noce', id: 738979}
];


const people = [
    {
        name: 'John Doe',
        year: 1999
    },
    {
        name: 'Prima Donna',
        year: 2001
    },
    {
        name: 'Everly Doe',
        year: 2000
    },
    {
        name: 'Will Traynor',
        year: 1987
    },
    {
        name: 'William Turner',
        year: 2008
    }
];


const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});


console.log(isAdult);



const isAllAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});


console.log(isAllAdult);


const comment = comments.find(comment => comment.id === 738949);

console.log(comment);


const commentInd = comments.findIndex(comment => comment.id === 738949);

console.log(commentInd);

// comments.splice(commentInd, 1);
// console.table(comments);


const newComments = [
    ...comments.slice(0, commentInd),
    ...comments.slice(commentInd + 1)
];

console.table(newComments);