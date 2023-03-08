import { shallow, mount, render } from "enzyme";
import Card from "./Card";

it("test card was render ", () => {
  const test = shallow(<Card />);
  expect(test.length).toMatchSnapshot();
});
