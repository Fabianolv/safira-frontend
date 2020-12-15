import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from '../App';
import Aside from '../components/Aside/Aside';
import CustomerCard from '../components/CustomerCard/CustomerCard';



configure({ adapter: new Adapter() });

describe("Render each component alone", ()=>{
  it("Renders Aside without crashing", () => {
    shallow(<Aside />);
  });
  it("Renders CustomerCard without crashing", () => {
    shallow(<CustomerCard />);
  });
});


describe("Render with child components", ()=>{
  const wrapper = shallow(<App />);

  it("Should contain Aside", () => {
    expect(wrapper.contains(<Aside />)).toEqual(true);
  });
  it("Should contain CustomerCard", () => {
    expect(wrapper.contains(<CustomerCard />)).toEqual(true);
  });
})
