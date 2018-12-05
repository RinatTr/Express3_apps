const express = require("express");
const app = express();

app.get("/math/:oper", (req, res) => {
  let [a, b] = [req.query.a, req.query.b];
  let [num1, num2] = [parseInt(a), parseInt(b)];

  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only");
  }

  let result = { input: { a: num1, b: num2 } };

  switch (req.params.oper) {
    case "add":
      result.sumString = `${a} + ${b}`;
      result.sum = num1 + num2;
      res.json(result); //json sends it.
      break;
    case "divide":
      result.quotientString = `${a} / ${b}`;
      result.quotient = num1 / num2;
      res.json(result);
      break;
    case "multiply":
      result.productString = `${a} * ${b}`;
      result.product = num1 * num2;
      res.json(result);
      break;
    case "subtract":
      result.differenceString = `${a} - ${b}`;
      result.difference = num1 - num2;
      res.json(result);
      break;
    default:
      res.send(
        "invalid response. try again: /operator/num1/num2. operators: add/sub/mul/div"
      );
  }
});

app.listen(3000, () => {
  console.log("you are listening to port 3000");
});
