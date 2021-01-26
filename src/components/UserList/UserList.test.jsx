import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import UserList from "./UserList.jsx";

test("search query 'gra' only returns 'Leanne Graham' list element", async () => {
  const { getByTestId } = render(<UserList searchTerm={"gra"} />);
  await waitForElementToBeRemoved(() => screen.queryByText("Loading...")).then(
    () => {
      const list = getByTestId("list");
      expect(list).toContainHTML("<li><span>Leanne Graham</span> @Bret</li>");
    }
  );
});
