import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from '../App';
import Aside from '../components/Aside/Aside';
import CustomerCard from '../components/CustomerCard/CustomerCard';



configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Aside />);
});

describe("render with sons", ()=>{
  const wrapper = shallow(<App />);

  it("Should contain Aside", () => {
    expect(wrapper.contains(<Aside />)).toEqual(true);
  });
  it("Should contain CustomerCard", () => {
    expect(wrapper.contains(<CustomerCard />)).toEqual(true);
  });
})
