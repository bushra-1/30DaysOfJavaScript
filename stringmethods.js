

//? 1.length  => karakter sayısını verir, boşluk varsa o da dahil edilir.

let js= "JavaScript"
console.log(js.length)

let a= "JavaScript dersleri"
console.log(a.length)


//? 2. string ifadede karaktere erişme

let metin= "JavaScript"
console.log(metin[2])
console.log( metin[metin.length-1])



//? 3. büyük harfe çevirme toUpperCase()    küçük harfe çevirme toLoweCase()

let adi= "Toprak"
console.log(adi.toUpperCase())
console.log(adi.toLowerCase())


//? 4. substr()  metni verilen indekse göre ayırma  2 parametre alır  

let metin3= "JavaScript"
console.log(metin3.substr(4,6))      // Script yazar. 4.karakterden sonrasını alır
console.log(metin3.substr(4,2))      // Sc yazar.  4.karakterden  başlar iki karakteri alır


//? 5. substring()

let metin4= "JavaScript"
console.log(metin4.substring(4,7))  // 4.karakterden başlar 7.karaktere kadar (7 dahil) yazar

//? 6. split()   metni böler

let adi2= "Ada Toprak"
console.log(adi2.split(' '))   // parametre boşluk olduğu için metni boşluktan parçalara ayırıyor

//? 7. trim()   metnin başındaki ve sonundaki gereksiz boşlukları kaldırır

let metin5= "      JavaScript öğreniyorum         "
console.log(metin5)
console.log(metin5.trim())

//? 9. includes()   metnin içinde aranmak istenen kelime var mı yok mu kontrol eder, boolean değer döndürür

console.log(metin5.includes('öğreniyorum'))
console.log(metin5.includes('reniyorum'))

//? 10. replace()  kelime değişikliği yapar

let metin6="Python öğreniyorum"
console.log(metin6.replace("Python", "JavaScript"))

//? 11. charAt(index)  

console.log(metin4.charAt(3))   

//? 12. charCodeAt(index)    karakterin ASCII karşılığını döndürür

console.log(metin4.charCodeAt(3))   

//? 13. indexOf()   aranan kelimenin başlangıç indexini döndürür

console.log(metin5.indexOf("öğreniyorum"))
console.log(metin5.indexOf("o"))

//? 14. lastIndexOf()   aranan kelimeyi en son gördüğü indexi döndürür

let metin7= "JavaScript bir programlama dilidir. JavaScript öğreniyorum"
console.log(metin7.lastIndexOf("JavaScript"))

//? 15. startsWith()    metnin herhangi bir kelimeyle başlayıp başlamadığını sorgulamak için kullanılır boolean değer döndürür

console.log(metin7.startsWith("hello"))
console.log(metin7.startsWith("JavaScript"))
console.log(metin7.startsWith("JavaS"))

//? 16. endsWith()      metnin herhangi bir kelimeyle bitip bitmediğini sorgulamak için kullanılır boolean değer döndürür

console.log(metin7.endsWith("hello"))
console.log(metin7.endsWith("öğreniyorum"))
console.log(metin7.endsWith("niyorum"))

//? 17. repeat()  metni tekrarlar

let metin8= "JavaScript"
console.log(metin8.repeat(4))

// Veti tipi değiştirme

// String to Int  -> parseInt(), number(), +

let sayi= "8"
console.log(typeof(sayi))                  //string
console.log(typeof(parseInt(sayi)))        //number
console.log(typeof(+sayi))                 //number


// String to Float  -> parseFloat(), number(), +

let sayi1= "9.81"
console.log(typeof(sayi1))                    //string
console.log(typeof(parseFloat(sayi)))        //number
console.log(typeof(+sayi1))                 //number



// Float to Int  -> parseInt()

let sayi2= 4.65
console.log(parseInt(sayi2))
