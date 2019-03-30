import React from "react";
import {shallow} from "enzyme";
import HomePage from "../HomePage";
import ReportSelectorComponent from "../ReportSelectorComponent";


describe('HomePage', function () {
    let homePage;
    const mockDeviceReturn = [ { value: 'id1', label: 'name1' },
                               { value: 'id2', label: 'name2' },
                               { value: 'id3', label: 'name3' } ];
    const mockMediaReturn = [ { value: 'id1', label: '[group1] name1' },
                              { value: 'id2', label: '[group2] name2' },
                              { value: 'id3', label: '[group3] name3' } ];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve([{
            id: 'id2',
            name: 'name2',
            group_name: 'group2'
        }, {
            id: 'id1',
            name: 'name1',
            group_name: 'group1'
        }, {
            id: 'id3',
            name: 'name3',
            group_name: 'group3'
        }])
    }));
    beforeEach(() => {homePage = shallow(<HomePage/>)});


    it('should contain two parameter components', function () {
        expect(homePage.find("ParameterContainer").length).toEqual(4);
    });

    it('should call fetch to get devices', async () => {
        expect(await homePage.instance().getDevices()).toEqual(mockDeviceReturn);
    });

    it('should call fetch to get media', async () => {
        expect(await homePage.instance().getMedia()).toEqual(mockMediaReturn);
    });

    it('should pass in the correct props to each parameter component', function () {
        let DeviceContainer = homePage.find('ParameterContainer').first().props();
        expect(DeviceContainer.name).toEqual('Report');
        expect(DeviceContainer.component.type).toEqual(<ReportSelectorComponent/>.type);
    });

    it('should have four parameterContainers', function () {
        expect(homePage.find('ParameterContainer').length).toEqual(4);
    });
});
