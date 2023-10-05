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
