import React from "react";
import {shallow} from "enzyme";
import HomePage from "../HomePage";


describe('HomePage', function () {
    const homePage = shallow(<HomePage/>);
    it('should contain a Device list', function () {
        expect(homePage.find("DevicesComponent").length).toEqual(1);
    });
});
