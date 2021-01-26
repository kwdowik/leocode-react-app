import users from "./userApi";
import * as expectedResponse from "../mocks/response.json";

test("mock server response is correct", async () => {
  const actualResponse = await users().then((res) => res);

  expect(actualResponse).toEqual(expectedResponse);
});
