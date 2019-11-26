let switch_page_time = "1000";
let amount_page = 4;
let cur_content = 1;

let content_1 =   '<h3 class="heading letter__light">Welcome to Snake Tutorital</h3>';
    content_1 +=  '<p class="letter__light">Swipe up or down</p>';

let content_2 =   '	<h3 class="heading heading__dark">';
    content_2 +=  '		What is <span class="highlighted"><a href="#">Snake</a></span>?';
    content_2 +=  "	</h3>";
    content_2 +=  "	<ul>";
    content_2 +=  '		<li class="letter__big">';
    content_2 +=  '			<p class="letter__big">';
    content_2 +=' 				Do you want to know a little bit about <span class="highlighted"><a href="history.html">history of snake</a></span>?';
    content_2 +=  "			</p>";
    content_2 +=  "  	</li>";
    content_2 +=  '		<li class="letter__big">';
    content_2 +=  '			<p class="letter__big">';
    content_2 +=  '				Or may be you want to know about <span class="highlighted"><a href="#">which Nokia phone had it</a></span>?';
    content_2 +=  "			</p>";
    content_2 +=  "  	</li>";
    content_2 +=  "	</ul>";

let content_3 =   '	<h3 class="heading heading__dark">';
    content_3 +=  '		What is <span class="highlighted"><a href="#">Snake</a></span>?';
    content_3 +=  "	</h3>";
    content_3 +=  "	<ul>";
    content_3 +=  '		<li class="letter__big">';
    content_3 +=  '			<p class="letter__big">';
    content_3 +=' 				Do you want to know a little bit about <span class="highlighted"><a href="history.html">history of snake</a></span>?';
    content_3 +=  "			</p>";
    content_3 +=  "  	</li>";
    content_3 +=  '		<li class="letter__big">';
    content_3 +=  '			<p class="letter__big">';
    content_3 +=  '				Or may be you want to know about <span class="highlighted"><a href="#">who made it</a></span>?';
    content_3 +=  "			</p>";
    content_3 +=  "  	</li>";
    content_3 +=  "	</ul>";

let content_4 =   '	<h3 class="heading heading__dark">';
    content_4 +=  '		What is <span class="highlighted"><a href="#">Snake</a></span>?';
    content_4 +=  "	</h3>";
    content_4 +=  "	<ul>";
    content_4 +=  '		<li class="letter__big">';
    content_4 +=  '			<p class="letter__big">';
    content_4 +=' 				Do you want to know a little bit about <span class="highlighted"><a href="history.html">history of snake</a></span>?';
    content_4 +=  "			</p>";
    content_4 +=  "  	</li>";
    content_4 +=  '		<li class="letter__big">';
    content_4 +=  '			<p class="letter__big">';
    content_4 +=  '				Or may be you want to know about <span class="highlighted"><a href="#">who made it</a></span>?';
    content_4 +=  "			</p>";
    content_4 +=  "  	</li>";
    content_4 +=  "	</ul>";

let content = [content_1, content_2, content_3, content_4];

let content_style_1 = "display: flex;";
content_style_1 += "flex-direction: column;";
content_style_1 += "justify-content: space-around;";
content_style_1 += "align-items: center;";
content_style_1 += "background: black;";

let content_style_2 = "display: flex;";
content_style_2 += "justify-content: center;";
content_style_2 += "align-items: baseline;";
content_style_2 += "flex-direction: column;";
content_style_2 += "padding-left: 15%;";
content_style_2 += "background: wheat;";

let content_style_3 = "display: flex;";
content_style_3 += "justify-content: center;";
content_style_3 += "align-items: baseline;";
content_style_3 += "flex-direction: column;";
content_style_3 += "padding-left: 15%;";
content_style_3 += "background: wheat;";

let content_style_4 = "display: flex;";
content_style_4 += "justify-content: center;";
content_style_4 += "align-items: baseline;";
content_style_4 += "flex-direction: column;";
content_style_4 += "padding-left: 15%;";
content_style_4 += "background: wheat;";

let content_style = [
  content_style_1,
  content_style_2,
  content_style_3,
  content_style_4
];

// switch content
for (let switch_id = 1; switch_id <= amount_page; ++switch_id) {
  document
    .getElementById("switcher_" + switch_id)
    .addEventListener("click", function() {
      console.log("debug");
      cur_content = switch_id;
      document.getElementById("content").style.animation =
        "disappear 0.6s forwards";
      for (let i = 1; i <= amount_page; ++i) {
        document.getElementById("switcher_" + i).style.background =
          "transparent";
      }
      document.getElementById("switcher_" + switch_id).style.background =
        "darkorange";
      setTimeout(() => {
        document.getElementById("content").innerHTML = content[switch_id - 1];
        document.getElementById("content").style = content_style[switch_id - 1];
        console.log(document.getElementById("content").style);
        document.getElementById("content").style.animation =
          "reappear " + switch_page_time + "ms forwards";
      }, switch_page_time);
    });
}

// add swipe and scroll function

let mouse_down = false;

// document.body.addEventListener("mousedown", function() {
// 	mouse_down = true;
// 	console.log("mouse down");
// });

let mouse_Y_pos;

document.body.addEventListener("mousedown", function(event) {
  mouse_Y_pos = event.clientY;
});

document.body.addEventListener("mouseup", function(event) {
  if (event.clientY - mouse_Y_pos > 30) {
    console.log("swipe down");
    if (cur_content < 4) {
      ++cur_content;
      document.getElementById("content").style.animation =
        "disappear 0.6s forwards";
      for (let i = 1; i <= amount_page; ++i) {
        document.getElementById("switcher_" + i).style.background = "transparent";
      }
      document.getElementById("switcher_" + cur_content).style.background = "darkorange";
      setTimeout(function() {
        document.getElementById("content").innerHTML = content[cur_content - 1];
        document.getElementById("content").style =
          content_style[cur_content - 1];
        console.log(document.getElementById("content").style);
        document.getElementById("content").style.animation =
          "reappear " + switch_page_time + "ms forwards";
      }, switch_page_time);
    }
  } else if (mouse_Y_pos - event.clientY > 30) {
    console.log("swipe up");
    if (cur_content > 1) {
      --cur_content;
      document.getElementById("content").style.animation =
        "disappear 0.6s forwards";
      for (let i = 1; i <= amount_page; ++i) {
        document.getElementById("switcher_" + i).style.background =
          "transparent";
      }
      document.getElementById("switcher_" + cur_content).style.background =
        "darkorange";
      setTimeout(function() {
        document.getElementById("content").innerHTML = content[cur_content - 1];
        document.getElementById("content").style =
          content_style[cur_content - 1];
        console.log(document.getElementById("content").style);
        document.getElementById("content").style.animation =
          "reappear " + switch_page_time + "ms forwards";
      }, switch_page_time);
    }
  }
});

document.body.addEventListener("touchstart", function(event) {
  mouse_Y_pos = event.touches[0].clientY;
});

document.body.addEventListener(
  "touchend",
  function(event) {
    if (event.changedTouches[0].clientY - mouse_Y_pos > 30) {
      console.log("swipe down");
      if (cur_content < 4) {
        ++cur_content;
        document.getElementById("content").style.animation =
          "disappear 0.6s forwards";
        for (let i = 1; i <= amount_page; ++i) {
          document.getElementById("switcher_" + i).style.background =
            "transparent";
        }
        document.getElementById("switcher_" + cur_content).style.background =
          "darkorange";
        setTimeout(function() {
          document.getElementById("content").innerHTML =
            content[cur_content - 1];
          document.getElementById("content").style =
            content_style[cur_content - 1];
          console.log(document.getElementById("content").style);
          document.getElementById("content").style.animation =
            "reappear " + switch_page_time + "ms forwards";
        }, switch_page_time);
      }
    } else if (mouse_Y_pos - event.changedTouches[0].clientY > 30) {
      console.log("swipe up");
      if (cur_content > 1) {
        --cur_content;
        document.getElementById("content").style.animation =
          "disappear 0.6s forwards";
        for (let i = 1; i <= amount_page; ++i) {
          document.getElementById("switcher_" + i).style.background =
            "transparent";
        }
        document.getElementById("switcher_" + cur_content).style.background =
          "darkorange";
        setTimeout(function() {
          document.getElementById("content").innerHTML =
            content[cur_content - 1];
          document.getElementById("content").style =
            content_style[cur_content - 1];
          console.log(document.getElementById("content").style);
          document.getElementById("content").style.animation =
            "reappear " + switch_page_time + "ms forwards";
        }, switch_page_time);
      }
    }
  },
  false
);
