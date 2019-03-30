import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class ReportSelectorComponent extends Component {
    constructor(props) {
        super(props);
    }

    getOptions() {
        let options = ['NetworkSnapshot', 'DeviceEventLog',
            'Affidavit', 'VisibilityIndex',
            'DeviceActivity', 'NetworkOverview',
            'UserListing', 'MediaImpressions',
            'ImpressionsDetail', 'DeviceListing',
            'Transaction', 'AffidavitSummary',
            'MotionSensorTotals'];
        return options.map(d =>
            {return {label: d, value: d}});
    }

    render() {
        let {selected, value} = this.props;
        return (<Select value={value}
                        onChange={(e) => selected(e)}
                        options={this.getOptions()}/>
        )
    }
}

ReportSelectorComponent.propTypes = {
    selected: PropTypes.func,
    value: PropTypes.object
};

export default ReportSelectorComponent;