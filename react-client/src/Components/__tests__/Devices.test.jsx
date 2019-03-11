import React from "react";
import {shallow} from "enzyme";
import DevicesComponent from "../DevicesComponent";
import Loader from 'react-loader-spinner';

describe('DevicesComponent', function () {
    it('should fetch list of devices', function () {
        const fetchSpy = jest.spyOn(window, "fetch");
        const devices = shallow(<DevicesComponent/>);
        expect(devices.find('Loader').length).toEqual(1);
        expect(fetchSpy).toBeCalled();
    });
});
