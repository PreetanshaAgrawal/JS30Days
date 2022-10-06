// Some data we can work with


const inventors = [
    { first: 'albert', last: 'einstein', year: 1879, passed: 1955 },
    { first: 'issac', last: 'newton', year: 1643, passed: 1727 },
    { first: 'galileo', last: 'galilei', year: 1564, passed: 1642 },
    { first: 'marie', last: 'curie', year: 1867, passed: 1934 },
    { first: 'charles', last: 'darwin', year: 1809, passed: 1882 },
    { first: 'michael', last: 'faraday', year: 1791, passed: 1867 },
    { first: 'nikola', last: 'tesla', year: 1856, passed: 1943 },
    { first: 'thomas', last: 'edison', year: 1847, passed: 1931 },
    { first: 'nicolaus', last: 'copernicus', year: 1473, passed: 1543 },
    { first: 'rosalind', last: 'franklin', year: 1920, passed: 1958 },
    { first: 'louis', last: 'pasteur', year: 1822, passed: 1895 },
    { first: 'robert', last: 'boyle', year: 1627, passed: 1691 },
    { first: 'benjamin', last: 'franklin', year: 1706, passed: 1790 },
    { first: 'carl', last: 'linnaeus', year: 1707, passed: 1778 },
];

const people = ['beck, glen', 'becker, carl', 'beckett, samuel', 'beddoes, mick',
    'beecher, henry', 'beethoven, ludwig', 'begin, menachem', 'belloc, hilaire',
    'bellow, saul', 'benchley, robert', 'benson, peter', 'ben-gurion, david',
    'benjamin, walter', 'ben, tony', 'bennington, chester', 'benson, leana',
    'bent, silas', 'bentson, lloyd', 'berger, ric', 'bergman, ingmar', 'berio, luciano',
    'berle, milton', 'berlin, irving', 'berne, eric', 'bernhard, sandra', 'berra, yogi',
    'berry, halle', 'berry, wendell', 'bethea, erin', 'bevan, aneurin']; 


// Array functions -

// 1. Filter the names born in b/w 1700 - 1800
// const fifteen = inventors.filter(function(inventor) {

//     if(inventor.year >= 1700 && inventor.year < 1800){
//         // console.log(inventor.first + " "  + inventor.last);
//         return true;
//     }
// });

// one line(code shortened)

// const fifteen = inventors.filter(inventor => (inventor.year >= 1700 && inventor.year < 1800));

// console.table(fifteen)



// 2. return the full names of the inventors using map
// const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));

// console.log(fullNames);


// 3. sort the inventors by their birth years using sort() from oldest to youngest;

// const ordered = inventors.sort(function(a,b) {
//     if(a.year >b.year) return 1;
//     else return -1;
// });

// const ordered = inventors.sort((a,b) => (a.year > b.year ? 1 : -1));

// console.table(ordered);


// 4. reduce the array:
// a. how many years did all inventors lived?

// const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
// console.log(totalYears);


// b. sort the inventors by years lived.

// const oldest = inventors.sort(function(a,b) {
//     if ((a.passed - a.year) > (b.passed - b.year)) return -1;
//     else return 1;
// })

// console.table(oldest);


// c. create a list of boulevards in paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Later


// d. Sort the people alphabetically by last name.

// const orderedLastName = people.sort(function(lastOne,nextOne){
//     const[aLast, aFirst] = lastOne.split(', ');
//     const[bLast, bFirst] = nextOne.split(', ');

//     return (aLast > bLast) ? 1 : -1;
// })

// console.table(orderedLastName);



// e. Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
'walk', 'car', 'van', 'car', 'truck'];


const transport = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] =0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transport);

