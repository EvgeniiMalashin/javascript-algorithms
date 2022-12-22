/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
  const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  const array = str.toLowerCase().split("");
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < vowels.length; y++) {
      if (array[i] === vowels[y]) {
        num++;
        break;
      }
    }
  }
  return num;
}
    

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
console.log(findVowels('пвыршдлфпшфрдывпвфышрощ    ЫВППРОЛЫ ЭЭ.,...Б.ЮФЫЬ   89235783тпптыптжвпфвты90832-0  -фффждлдфллдттьбыфаиродж'));