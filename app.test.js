const app = require("./app");

test("5 + 7은 12입니다.", () => {
  const req = {
    body: {
      num1: 5,
      num2: 7,
    },
  };
  const res = {
    send: jest.fn(),
  };
  const next = jest.fn();
  app.add_number(req, res, next);
  expect(res.send).toBeCalledWith(12);
});
