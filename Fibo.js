function fibonacci(a){
  if ( a <= 1) {
    return a;
  }
  return fibonacci(a-1) + fibonacci(a-2)
}