const userName = 'Kemal Atayew';
const nickname = userName
.toLowerCase()
.split(' ')
.map(function (word) {
    return word[0];
})
.join('');

console.log(nickname);
console.log(nickname).join()