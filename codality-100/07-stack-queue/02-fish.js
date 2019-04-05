// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  const weight = A;
  const direction = B;
  const pipe = [];
  const len = A.length;

  for (let i = 0; i < len; i++) {
    let newFish = [weight[i], direction[i]];

    if (pipe.length === 0) {
      pipe.push(newFish);
      continue;
    }

    if (pipe[pipe.length - 1][1] === newFish[1]) {
      pipe.push(newFish);
      continue;
    }

    if (pipe[pipe.length - 1][1] === 0 && newFish[1] === 1) {
      pipe.push(newFish);
      continue;
    }

    if (pipe[pipe.length - 1][1] === 1 && newFish[1] === 0) {
      // console.log("conflict")

      let lastFish = pipe[pipe.length - 1];

      if (lastFish[0] > newFish[0]) {
        continue;
      }

      if (newFish[0] > lastFish[0]) {

        while (newFish[1] !== lastFish[1]) {
          pipe.pop()
          lastFish = pipe[pipe.length - 1];

          if (pipe.length === 0) {
            pipe.push(newFish);
            break;
          }

          if (lastFish[1] === newFish[1]) {
            pipe.push(newFish);
            break;
          }

          if (lastFish[0] > newFish[0]) {
            break;
          }
        }
      }

    }

  }

  return pipe.length;


}

console.log(solution([4, 2], [1, 0]));
