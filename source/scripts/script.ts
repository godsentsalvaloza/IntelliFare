// test
const djhduifhdifu = "\x69\x6E\x74\x65\x6C\x6C\x69\x66\x61\x72\x65\x30\x78";
let x = prompt("Shhh.. Don't leak our hard work... \n please enter password");

if (x != djhduifhdifu) {
  document.body.style.color = "white";
  document.body.innerHTML = "Wrong password. hehe~";
}
