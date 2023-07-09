// khai bao bien
var hoVaTen = "Nguyen Duc Viet";
var age = 20;
// ham alert(): goi ham thong bao
// alert(fullName);
// alert(age);
/**
 * hehe
 * hehe
 * hehe
 *  comment nhiều dòng */
/**
  giới thiệu một số hàm built-in
    1. Alert: hàm thông báo
    2. Console: thong bao tren element
    3. Confirm: ham thong bao co OK va Cancel
    4. Prompt: ham thong bao co OK va Cancel co the nhap thong tin
    5. setTimeout: chay 1 doan code sau 1 khoangr tgian (1 lan)
    6. setInterval: chay 1 doan code sau 1 khoang tgian nhung lap di lap lai

 */
/** 
 1. 
 var fullName = "Nguyen Duc Viet";
 console.log(fullName);

 2.
 confirm("Xac nhan ban du tuoi");

 3.
 prompt("Xac nhan ban du tuoi");

 4.
 setTimeout(function () {
  alert("thong bao");
 }, 1000);

 5.
 setInterval(function () {
  console.log("day la 1 log " + Math.random);
 }, 1000);
*/
/**
 Toán tử chuỗi
 */
var name = "Viet";
name += "Dang";

console.log(name);
/**
 * Boolean : log ra true hoac false
 
 */
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);
/**
 * if-else
 * có 6 giá trị khi java chuyển kiểu dữ liệu dang dạng boolean:
 1. 0
 2. false/true
 3. '' hoặc ""
 4. undefined
 5. NaN
 6. null
 ngoài 6 giá trị này tất cả convert sang boolean đều là true
 */

if (isSuccess) {
  console.log("DIEU KIEN DUNG");
} else {
  console.log("DIEU KIEN SAI");
}
