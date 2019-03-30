import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

class DateSelectorComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {startDate, endDate, startChange, endChange} = this.props;
        return (<div className={'date-picker'}>
                    <DatePicker className={'date-left'}
                                selected={startDate}
                                startDate={startDate}
                                endDate={endDate}
                                selectsStart={true}
                                showTimeSelect={true}
                                isClearable={true}
                                placeholderText={'Choose start date...'}
                                onChange={startChange}/>
                    <DatePicker className={'date-right'}
                                selected={endDate}
                                startDate={startDate}
                                endDate={endDate}
                                selectsEnd={true}
                                showTimeSelect={true}
                                isClearable={true}
                                placeholderText={'Choose end date...'}
                                onChange={endChange}/>
            </div>
        );
    }
}

DateSelectorComponent.propTypes = {
    endChange: PropTypes.func,
    endDate: PropTypes.instanceOf(Date),
    startChange: PropTypes.func,
    startDate: PropTypes.instanceOf(Date)
};

export default DateSelectorComponent;

