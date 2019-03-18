import React from "react";
import {shallow} from "enzyme";
import DateSelector from "../DateSelector";


describe('DateSelector', function () {
    let endChange = jest.fn();
    let startChange = jest.fn();
    let endDate = new Date('1995-12-17T03:24:00');
    let startDate = new Date('1995-12-18T03:24:00');
    const component = shallow(<DateSelector endChange={endChange}
                                                                 startChange={startChange}
                                                                 endDate={endDate}
                                                                 startDate={startDate}/>);

    it('should pass in the correct props to start DatePicker', function () {
        let props = component.find('.date-left').props();
        expect(props.selected).toEqual(startDate);
        expect(props.startDate).toEqual(startDate);
        expect(props.endDate).toEqual(endDate);
        expect(props.selectsStart).toEqual(true);
        expect(props.showTimeSelect).toEqual(true);
        expect(props.placeholderText).toEqual('Choose start date...');
        expect(props.onChange).toEqual(startChange);
    });

    it('should pass in the correct props to end DatePicker', function () {
        let props = component.find('.date-right').props();
        expect(props.selected).toEqual(endDate);
        expect(props.startDate).toEqual(startDate);
        expect(props.endDate).toEqual(endDate);
        expect(props.selectsEnd).toEqual(true);
        expect(props.showTimeSelect).toEqual(true);
        expect(props.placeholderText).toEqual('Choose end date...');
        expect(props.onChange).toEqual(endChange);
    });
});
