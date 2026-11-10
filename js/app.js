//47
let a = "  JavaScript  ";
let b = "   Methods ";
console.log(a.trim() + " " + b.trim());
//48
let ma = "salom dunyo salom olam";
console.log(ma.replaceAll("salom", "assalom").toUpperCase());
//49
let email = "  user.name@gmail.com  ";

let toza = email.trim();
let tekshiruv= toza.includes("@") && toza.endsWith(".com");

console.log(toza);      
console.log(tekshiruv); 
//50
let matn = "JavaScript";

let teskari = "";
for (let i = matn.length - 1; i >= 0; i--) {
  teskari += matn.charAt(i);
}

console.log(teskari); 