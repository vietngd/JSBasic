// document.write("HELLO GUYS!!");

/**
 1. getElementById: trả về trực tiếp element
 2. getElementsByClassName: trả về 1 HTML collection( gần giống mảng, kco các phương thức map(), filter(), reduce() ...)
 3. getElementsByTagName: trả về 1 HTML collection
 4. querySelector:  trả về trực tiếp element
 5. querySelectorAll: trả về 1 nodelist
 */
/**HTML DOM
 1. Element: ID, class , tag, CSS selector, HTML collection
 */
// var headingNode = document.getElementById("heading");
// console.log(headingNode);

// var headingNodes = document.getElementsByClassName("heading");
// console.log(headingNodes);
// var headingNodes = document.getElementsByTagName("p");
// console.log(headingNodes);

// var boxNode = document.querySelector(".box-1");
// console.log(boxNode);
// console.log(boxNode.querySelectorAll("li"));
//Callback

// Array.prototype.map2 = function (callback) {
//   var arrlength = this.length;
//   for (i = 0; i < arrlength; ++i) {
//     callback(this[i], i);
//   }
// };

// var course = ["Javascript", "PHP", "Ruby"];
// course.map2(function (index, course) {});

// //DOM attributes
// // thêm attributes class vào thẻ h1
// // var headingElement = document.querySelector("h1");

// // headingElement.className = "Heading";
// // headingElement.setAttribute("id", "heading");
// // // lấy ra attributes:
// // headingElement.getAttribute("class");

// // /**  innerText, textContent*/
// // //textContent: tra ve gia tri that ke ca bi an, khoang cach
// // //geter: cong cu lay ra doi tuong
// // //seter: cong cu thay doi doi tuong
// // var headingElement = document.querySelector("h1");
// // headingElement.textContent = "NEW Heading";

// var newText = document.getElementsByClassName("box");
// console.log(newText[0]);

// var newText = document.getElementsByTagName("div");
// console.log(newText[0]);
// var newText = document.querySelector(".box");
// console.log(newText);
// console.log(newText.textContent);

// //innrHTML, outerHTML

// // var boxElement = document.querySelector(".box");
// // console.log(boxElement);

// // boxElement.innerHTML = '<h1 tittle = "Heading"> NEw Heading</h1>';

// // console.log((document.querySelector("h1").innerText = "NEW HEADING"));

// // console.log(boxElement.innerHTML);

// var boxElement = document.querySelector(".box");

// // boxElement.outerHTML = "<span>Heading</span>"; //outerHTML sẽ thêm 1 thẻ mới đè luôn thẻ chứa ".box"

// boxElement.innerHTML = "<span>Heading</span>"; // innterHTML sẽ thêm 1 thẻ span mới bên trong thẻ chứa ".box"

// console.log(document.querySelector(".box").innerText);

// console.log(boxElement.innerHTML);

// var boxElement = document.querySelector(".box");
// // (boxElement.style.width = "200px"),
// //   (boxElement.style.height = "100px"),
// boxElement.style.backgroundColor = Object.assign(boxElement.style, {
//   width: "200px",
//   height: "100px",
//   backgroundColor: "green",
// });

// classList property
//add: them 1 class vao element
// contains: kiem tra 1 class co nam trong element k
//remove: xoa
// toggle: kiem tra xem element co thuoc tinh do khong, neu co thi xoa di, neue khong cos thi them vao
// var newBox = document.querySelector(".box");
// console.log(newBox);
// newBox.classList.add("red"); // them style red
// console.log(newBox.classList.contains("red"));// kiem tra xem thuoc tinh red co ton tai khong
