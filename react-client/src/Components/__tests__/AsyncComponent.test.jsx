import React from "react";
import {shallow} from "enzyme";
import AsyncComponent from "../AsyncComponent";
import AsyncSelect from 'react-select/lib/Async';

describe('AsyncComponent', function () {
    let getOptions = jest.fn();
    let selected = jest.fn();
    let value = {value: 'id1', label: 'name1'};
    const component = shallow(<AsyncComponent getOptions={getOptions}
                                              selected={selected}
                                              value={value}/>);

    it('should pass in the correct props to AsyncSelect', function () {
        let asyncSelect = component.props();
        expect(asyncSelect.value).toEqual(value);
        expect(asyncSelect.loadOptions).toEqual(getOptions);
        expect(asyncSelect.isMulti).toEqual(true);
        expect(asyncSelect.defaultOptions).toEqual(true);
    });

    it('should call selected when onChange is called', function () {
        component.find(AsyncSelect).simulate('change', { value: 'id2', label: 'name2'});
        expect(selected).toHaveBeenCalledWith({value: 'id2', label: 'name2'});
    });
});
