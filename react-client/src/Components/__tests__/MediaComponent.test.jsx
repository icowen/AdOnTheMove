import React from "react";
import {shallow} from "enzyme";
import MediaComponent from "../MediaComponent";
import Loader from 'react-loader-spinner';

describe('MediaComponent', function () {
    it('should fetch list of devices', function () {
        const fetchSpy = jest.spyOn(window, "fetch");
        const devices = shallow(<MediaComponent/>);
        expect(devices.find('Loader').length).toEqual(1);
        expect(fetchSpy).toBeCalled();
    });
});
