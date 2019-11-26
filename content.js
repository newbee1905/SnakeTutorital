const title = document.getElementsByClassName("title");
const title_link_container = document.getElementsByClassName(
  "title--link--container"
)[0];
const content_part = document.getElementsByClassName("content--part");
const content_inner = document.getElementsByClassName("content--inner")[0];
const title_link = document.getElementsByClassName("title--link");

for (let i = 0; i < title.length; ++i) {
  title_link_container.innerHTML +=
    '<li class="title--link"><span class="highlight">' +
    title[i].innerHTML +
    "</span></li>";
}

window.onresize = window.onload = () => {
  let title_pos = [];
  let curHeight = 80;
  for (let i = 0; i < title.length; ++i) {
    title_pos[i] = curHeight;
    curHeight += content_part[i].offsetHeight;
    curHeight += content_part[i].getElementsByTagName("p").length * 1;
    curHeight += 1.5 * parseFloat(getComputedStyle(title[i]).fontSize);
  }

  console.log(title_pos);

  for (let i = 0; i < title.length; ++i) {
    title_link[i].addEventListener("click", () => {
      content_inner.scrollTop = title_pos[i];
      console.log(content_inner.scrollTop);
    });
  }
};
