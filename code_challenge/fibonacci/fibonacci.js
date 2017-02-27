function fibNumber(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibNumber(n - 2) + fibNumber(n - 1);
  }
}