import { ICalculator } from "./icalculator";

export type OperationType = "+" | "-" | "*" | "/" | "%";

export class Calculator implements ICalculator {
  constructor() {}

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    return num1 / num2;
  }

  percent(num: number, percent: number): number {
    return num * (percent / 100);
  }

  executeOperation(op: OperationType, num1: number, num2: number): number {
    let result: number;
    switch (op) {
      case "+":
        result = this.add(num1, num2);
        break;
      case "-":
        result = this.subtract(num1, num2);
        break;
      case "*":
        result = this.multiply(num1, num2);
        break;
      case "/":
        result = this.divide(num1, num2);
        break;
      default:
        result = this.percent(num1, num2);
        break;
    }
    return result;
  }
}
