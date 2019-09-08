const merge = require("./index");

test("merge([[1, 4], [2, 3]]) --> [1, 4]", () => {
  expect(merge([[1, 4], [2, 3]])).toEqual([[1, 4]]);
});

test("merge([[1, 4], [4, 5]]) --> [1, 5]", () => {
  expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
});

test("merge([[1,3],[2,6],[8,10],[15,18]]) --> [[1,6],[8,10],[15,18]]", () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
    [1, 6],
    [8, 10],
    [15, 18]
  ]);
});