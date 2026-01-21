export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  // Because 'n' is now a number, the '+' operator is safe
  return fibonacci(n - 1) + fibonacci(n - 2);
}
 // EOF