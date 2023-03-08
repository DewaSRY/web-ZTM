import { shallow } from "enzyme";
import App from "./App";

it("test app container", () => {
  const mockStore = {
    robots: [],
    searchfield: "",
  };
  const test = shallow(<App store={mockStore} />);
  expect(test).toMatchSnapshot();
});
