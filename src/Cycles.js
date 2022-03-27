/*
В функцию rangeSum() приходят два целых неотрицательных числа.
Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let res = 0;
    for (start; start <= end; start++) {
        if (start % 2 == 0) {
            res += start;
        }
    }
    return res;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
  */
export function iterationCount(a) {
    let count = 0;
    while (a / 2 > 0.1) {
        count++;
        a /= 2;
    }
    count++;
    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  0 1 2+ 3 4 5+ 6 7
  1 2 3 4 5 6 7 8
  
  и верните итоговый результат.
  */
export function symbolsReplace(message) {
    let index = 2;
    do {
        message = message.substr(0, index) + '_' + message.substr(index + 1);
        index += 3;
    } while (index + 1 <= message.length);
    return message;
}
