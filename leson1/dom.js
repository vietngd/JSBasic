//DOM events
//1. Attribute events
/* <h1 onclick="console.log(this)">
  <span onclick="console.log(this"> DownAssiment</span>
</h1>;
/**onclick: khi click vao ptu con thi dau tien lang nghe su kiene cua chinhs no
sau do anh huong den phan tu cha (su kien noi bot) */

//2. Assign event using the

var h1Elements = document.querySelectorAll("h1");

for (var i = 0; i < h1Elements.lenghth; ++i) {
  h1Elements[i].onclick = function (e) {
    console.log(e.target);
  };
}

// h1Element.onclick = function () {
//   console.log(Math.floor(Math.random() * 10));
// };

//1. Input / select
//2.Keyup /
