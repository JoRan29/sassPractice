let title = document.querySelector(".anime");
let strTitle = title.textContent;
let splitTitle = strTitle.split("");
let remove = document.querySelector(".remove");

console.log(splitTitle);

splitTitle.forEach((t, i) => {
  title.innerHTML += `<span> ${splitTitle[i]} </span>`;
});

let complete = () => {
  clearInterval(timer);
  timer = null;
};

let onTick = () => {
  let span = title.querySelectorAll("span")[char];
  span.classList.add("move");
  char++;
  if (char === splitTitle.length) {
    complete();
    return;
  }
};

let char = 0;
let timer = setInterval(onTick, 90);
