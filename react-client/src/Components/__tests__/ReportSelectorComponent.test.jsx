import React from "react";
import {shallow} from "enzyme";
import ReportSelectorComponent from "../ReportSelectorComponent";


describe('ReportSelectorComponent', function () {
    let selected = jest.fn();
    let value = null;
    let options = ['NetworkSnapshot', 'DeviceEventLog',
        'Affidavit', 'VisibilityIndex',
        'DeviceActivity', 'NetworkOverview',
        'UserListing', 'MediaImpressions',
        'ImpressionsDetail', 'DeviceListing',
        'Transaction', 'AffidavitSummary',
        'MotionSensorTotals'].map(d => {return {label: d, value: d}});
    const component = shallow(<ReportSelectorComponent selected={selected}
                                                       value={value}/>);

    it('should pass in the correct props to Select', function () {
        let props = component.props();
        expect(props.value).toEqual(null);
        expect(props.options).toEqual(options);
    });
});
