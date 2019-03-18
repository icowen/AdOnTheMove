import React from "react";
import {shallow} from "enzyme";
import HomePage from "../HomePage";


describe('HomePage', function () {
    let homePage;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
            id: 'id',
            name: 'name'
        })
    }));
    beforeEach(() => {homePage = shallow(<HomePage/>)});


    it('should contain two parameter components', function () {
        expect(homePage.find("ParameterComponent").length).toEqual(2);
    });

    it('should call fetch to get devices', function () {
        homePage.instance().getDevices();
        expect(window.fetch).toHaveBeenCalledWith('https://api.reveldigital.com/api/devices?api_key=JqZcD6X-fxF_HX6TBHeeKQ&include_snap=true');
    });

    it('should call fetch to get media', function () {
        homePage.instance().getMedia();
        expect(window.fetch).toHaveBeenCalledWith('https://api.reveldigital.com/api/media?api_key=JqZcD6X-fxF_HX6TBHeeKQ')
    });

    it('should pass in the correct props to each parameter component', function () {
        let DeviceComponent = homePage.find('ParameterComponent').first().props();
        expect(DeviceComponent.name).toEqual('Devices');
        expect(DeviceComponent.value).toEqual(null);
    });

    it('should have a dateSelector with correct props', function () {
        let dateSelector = homePage.find('DateSelector');
        expect(dateSelector.length).toEqual(1);
        let props = dateSelector.props();
        expect(props.startDate).toEqual(null);
        expect(props.endDate).toEqual(null);
    });
});
