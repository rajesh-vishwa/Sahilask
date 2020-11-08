import React from "react";

import AllLisitngScreen from "../all-listing-screen.component";

import { shallow } from "enzyme";

describe("<AllLisitngScreen />", () => {
  it("should contain h2 with text ", () => {
    const wrapper = shallow(<AllLisitngScreen />);
    expect(wrapper.find("h2").text()).toBe("All Properties");
  });
});
