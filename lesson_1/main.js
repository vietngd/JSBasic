// khai bao bien
var fullName = "Nguyen Duc Viet";
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
var a = 4;
var b = 3;
if (a > b && b < 0) {
  console.log("Dung");
} else console.log("NguyenDucViet");
