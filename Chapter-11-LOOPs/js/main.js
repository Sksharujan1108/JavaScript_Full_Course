// while loop
let i = 1
while (i <= 45) {
  console.log(i);
  i = i+2
}

console.log('====================================');
console.log("***********************************************************");
console.log('====================================');

// Do-While
let j = 45
  do {
  console.log(j);
  j = j+2
} while (j <= 45)

console.log('====================================');
console.log("*************************************************************");
console.log('====================================');

// For Loop
for(i=1;i<=5;i++) {
  console.log(i)
}

console.log('====================================');
console.log("*************************************************************");
console.log('====================================');


// 01
let name  = "Sharujan"
for (let a=0; a<=name.length; a++) {
  console.log(name.charAt(a));
}

console.log('====================================');
console.log("*************************************************************");
console.log('====================================');


// 02
let na  = "Sh"
for (let x=0; x <= na.length; x++) {
  for (let y=0; y<=na.length; y++) {
      console.log(x,y);
  }
}  

console.log('====================================');
console.log("*************************************************************");
console.log('====================================');

// Break 
let c = 0;

while (c <= 10) {
  if (c === 3) {
    break;
  }
  c = c + 2;
}

console.log(c);
// Expected output: 3

console.log('====================================');
console.log("*************************************************************");
console.log('====================================');

// continue
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"
