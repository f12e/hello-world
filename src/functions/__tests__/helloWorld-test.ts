import { helloWorld } from "../helloWorld";

describe("'helloworld'", () => {
  it("prints 'Hello World'", () => {
    expect(helloWorld()).toEqual("Hello World");
  });
});
