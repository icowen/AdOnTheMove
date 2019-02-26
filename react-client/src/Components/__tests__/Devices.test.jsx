import React from "react";
import {shallow} from "enzyme";
import Devices from "../Devices";
import Loader from 'react-loader-spinner';

describe('Devices', function () {
    it('should fetch list of devices', function () {
        const fetchSpy = jest.spyOn(window, "fetch");
        const devices = shallow(<Devices/>);
        expect(devices.find('Loader').length).toEqual(1);
        expect(fetchSpy).toBeCalled();
    });
});
