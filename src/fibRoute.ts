// src/fibRoute.ts
import { Request, Response } from 'express'; // Import types
import fibonacci from "./fib";

// 1. Type req and res strictly
export default (req: Request<{ num: string }>, res: Response) => {
  // 2. Access .params safely. params are strings by default in Express.
  const { num } = req.params;

  // 3. Convert string to number before passing to fibonacci
  const parsedNum: number = Number.parseInt(num, 10);
  if (Number.isNaN(parsedNum)) {
    res.status(400).send("Invalid number");
    return;
  }

  const fibN = fibonacci(parsedNum);

  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};

// EOF