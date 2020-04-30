import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;
const selectData = ({ country, setValue }) => {
  return (
    <div>
      <Select
        showSearch
        style={{ width: 300, margin: '2rem' }}
        placeholder="Select a Country"
        optionFilterProp="children"
        onChange={(value) => setValue(value)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {country.map((item) => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
};

selectData.propTypes = {
  country: PropTypes.node,
  setValue: PropTypes.func,
};
selectData.defaultProps = {
  country: [],
  setValue: () => {},
};
export default selectData;
