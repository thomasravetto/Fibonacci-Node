// Calculating Fibonacci from 0 to index
function fibonacci(index) {
    if (index === 0) {
        return [1][index]
    } else if (index === 1) {
        return [1, 1][index]
    } else {
        let first = 1; let second = 1
    let fibonacci_sequence = [first, second];
    for (let i = 0; i < index - 1; i++) {
        let third = first + second;
        first = second;
        second = third;
        fibonacci_sequence.push(third);
    }
    return fibonacci_sequence[index];
    }
}

function fibonacci_recursive(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2);
}

for (let number = 0; number < 50; number++){
    console.log("Normal:    ",fibonacci(number));
    console.log("Recursive: ",fibonacci_recursive(number), "\n")
}
