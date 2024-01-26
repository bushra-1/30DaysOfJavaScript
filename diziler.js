

const sayilar= [1,2,3,4,5]
console.log(sayilar)
sayilar[0]=-3
sayilar[2]=8
console.log(sayilar)
console.log(sayilar.length)


const isimler=Array(3).fill("Ada")   // fill methodu diziyi aldığı parametreyle doldurur
console.log(isimler)


const sayilar2= [1,2,3,4,5]
const sayilar3= [6,7,8,9,0]
const sayilar4=[-1,-2,-3,-4,-5]
console.log(sayilar2.concat(sayilar3))  // concat()  dizileri birleştirir
console.log(sayilar2.concat(sayilar3,sayilar4))


console.log(sayilar.indexOf(4))  // indexOf ile bir elemanın dizide bulunup bulunmadığını sorgularız
console.log(sayilar.indexOf(-9)) // Eğer eleman dizi içerisindeyse kaçıncı indexte olduğunu, dizi içerisinde değilse -1 döndürür

console.log(sayilar4.includes(-5))  // includes ile bir elemanın dizide bulunup bulunmadığını sorgularız
console.log(sayilar4.includes(7))


console.log(typeof(sayilar))  // Burada dizinin veri tipini object olarak döndürüyor
console.log(Array.isArray(sayilar))  // Burada ise dizinin veri tipinin array olup olmadığını sorgulandı 