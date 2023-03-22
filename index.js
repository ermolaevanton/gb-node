import colors from 'colors';

const numArray = process.argv.slice(2);
const num1 = Number(numArray[0]);
const num2 = Number(numArray[1]);

const array = [];
const arrayGroup = [];

if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
    for (let i = num1; i <= num2; i++) {
        let flag = 1;
        for (let j = 2; (j <= i / 2) && (flag == 1); j++) {
            if (i % j == 0) {
                flag = 0;
            }
        }
        if (flag == 1 && i !== 2) {
            array.push(i);
        }
    }
} else {
    console.log(colors
        .red('Ошибка, введите два целых положительных числа больше 0.'));
}

while (array.length) {
    arrayGroup.push(array.splice(0, 3));
}

arrayGroup.forEach(e => {
    console.log(colors.green(e[0]));
    console.log(colors.yellow(e[1]));
    console.log(colors.red(e[2]));
});



