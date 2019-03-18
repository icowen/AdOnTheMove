import React from "react";
import {shallow} from "enzyme";
import ParameterComponent from "../ParameterComponent";
import AsyncSelect from 'react-select/lib/Async';


describe('ParameterComponent', function () {
    let getOptions = jest.fn();
    let selected = jest.fn();
    const component = shallow(<ParameterComponent name={'CP'}
                                                  value={{value: 'v'}}
                                                  getOptions={getOptions}
                                                  selected={selected}/>);

    it('should pass in the correct props to AsyncSelect', function () {
        const props = component.find(AsyncSelect).props();
        expect(props.value).toEqual({value: 'v'});
        expect(props.loadOptions).toEqual(getOptions);
    });

    it('should call selected when a new option is selected', function () {
        component.find(AsyncSelect).props().onChange('Option');
        expect(selected).toHaveBeenCalledWith('Option');
    });

    it('should have the correct header', function () {
        expect(component.find('.section-header').text()).toEqual('CP');
    });
});
