import { shallow, mount, render } from "enzyme";
import CounterButton from "./CounterButtom";

it("test button get click", () => {
  const test = shallow(<CounterButton />);
  test.find('[id="counter"]').simulate("click");
  expect(test.state()).toEqual({ count: 1 });
});
