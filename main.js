// Task 
// 3 dene function quracaqsiz bir function usersleri adlandiran
// function olacaq yeni dinamik olaraq usernameler vereceksiz
// o functionda localeStoragede onu users keyine value olaraq
// Array seklinde elave edecek
// 2ci function dinamik olaraq username qebul edib localeStorageden
// hemin usernameni silecek
// 3 cu function ise umumi localestoragedeki users arrayini pars
// olunmus halini logda daima gosderecek


// TASK 1

// const addUser = (name) => {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     try {
//         if(users.length === 0) {
//             users.push(name);
//         } else {
//             users.filter((item) => {
//                 if (item === name) throw new Error (`User ${name} already exists`);
//                 else {users.push(name)}
//             })
//         }
//         localStorage.setItem('users',JSON.stringify(users));
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }

// addUser('Elshan');
// addUser('Muzo');


// TASK 2

// const removeUser = (name) => {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     try {
//         if (users.length > 0) {
//             users.forEach((item,index) => {
//                 if (item === name) {
//                     users.splice(index, 1)
//                 } else throw new Error (`${name} does not exists`);
//             })
//          } else {
//             throw new Error (`${name} does not exists`);
//          }

//         localStorage.setItem('users',JSON.stringify(users));
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }

// removeUser('Muzo');



// TASK 2 - better solution

// const removeUser = (name) => {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     const userIndex = users.indexOf(name);
//     try {
//         if (userIndex === -1) {
//             console.error(`${name} does not exist`);
//             return;
//         }
//         users.splice(userIndex, 1);
//         localStorage.setItem('users', JSON.stringify(users));
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }


// removeUser('Elshan');



// TASK 3

// const currentLocal = () => console.log(JSON.parse(localStorage.getItem('users')));
// currentLocal();

