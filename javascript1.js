var year1= prompt('Введите год для начала цыкла ' , '');
var year2 = prompt('Введите год для конца цикла ' , '');


if(year2 < year1) {
console.log(year, "неверный ввод");
} else {

for(var year = year1; year <= year2; year++) {

if ((year%400==0)||((year%4==0)&&(year%100!=0))) {
console.log(year, " високосный");
} else {
console.log(year, "не високосный");
}

}
}
