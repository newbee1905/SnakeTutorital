const content = document.getElementsByClassName("content")[0];
const myNav = document.getElementById("myNav");
const menu_item = document.getElementsByClassName("menu--items")[0];
const links = document.getElementsByClassName("link");
const sub_menu_item = document.getElementsByClassName("sub--menu--items");

myNav.addEventListener("click", () => {
  myNav.classList.toggle("open");
  content.classList.toggle("open");
  content.classList.remove("open__2");
  menu_item.classList.toggle("open");

  for (let i = 0; i < links.length; ++i) {
    links[i].classList.remove("blur");
  }
  for (let i = 0; i < sub_menu_item.length; ++i) {
    sub_menu_item[i].classList.remove("open");
  }

  link_clicked = false;
});

content.addEventListener("click", () => {
  myNav.classList.remove("open");
  content.classList.remove("open");
  content.classList.remove("open__2");
  menu_item.classList.remove("open");

  for (let i = 0; i < links.length; ++i) {
    links[i].classList.remove("blur");
  }
  for (let i = 0; i < sub_menu_item.length; ++i) {
    sub_menu_item[i].classList.remove("open");
  }

  link_clicked = false;
});

var link_clicked = false;

for (let i = 1; i < links.length; ++i) {
  links[i].addEventListener("click", () => {
    // console.log('debug' + i);
    console.log(links[i].classList.contains("blur"));
    if (!links[i].classList.contains("blur") && link_clicked) {
      for (let j = 0; j < links.length; ++j) {
        links[j].classList.remove("blur");
      }
      content.classList.remove("open__2");
      for (let i = 0; i < sub_menu_item.length; ++i) {
        sub_menu_item[i].classList.remove("open");
      }
      link_clicked = false;
    } else {
      for (let j = 0; j < links.length; ++j) {
        links[j].classList.remove("blur");
        if (j != i) {
          console.log(links[j]);
          links[j].classList.add("blur");
        }
      }
      for (let j = 0; j < sub_menu_item.length; ++j) {
        sub_menu_item[j].classList.remove("open");
      }
      sub_menu_item[i - 1].classList.add("open");
      content.classList.add("open__2");
      link_clicked = true;
    }
  });
}
