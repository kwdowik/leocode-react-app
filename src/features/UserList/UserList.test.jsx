import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import UserList from "./UserList.jsx";

test("search query 'gra' only returns 'Leanne Graham' list element", async () => {
  render(<UserList searchTerm={"gra"} />);
  console.log(screen.debug);
  await waitForElementToBeRemoved(() => screen.queryByText("Loading...")).then(
    () => {
      const list = screen.getByTestId("list");
      expect(list).toContainHTML("<li><span>Leanne Graham</span> @Bret</li>");
    }
  );
});
