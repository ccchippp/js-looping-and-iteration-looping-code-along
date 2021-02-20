
function writeCards(names) {
    let thanks = []
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thanks;
}

function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
}