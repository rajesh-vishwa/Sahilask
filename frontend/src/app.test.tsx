import React from "react";

import App from "./app.component";

import { shallow } from "enzyme";

describe("<App />", () => {
  const wrapper = shallow(<App />);
  it("should render App", () => {
    wrapper;
  });
  it("should contain 1 main html element", () => {
    expect(wrapper.find("main").length).toBe(1);
  });
  it("should contain header component", () => {
    expect(wrapper.find("Header").length).toBe(1);
  });
});
