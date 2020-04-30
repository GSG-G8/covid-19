import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './index.css';

const gridStyle = {
  textAlign: 'center',
};
const cardView = ({ location, confirmed, recovered, deaths }) => {
  return (
    <div className="card">
      <Card title={location}>
        <Card.Grid style={gridStyle}>
          <Avatar
            style={{
              backgroundColor: '#87d068',
              margin: '1rem',
            }}
            icon={<UserOutlined />}
          />
          {confirmed}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Avatar
            style={{
              backgroundColor: '#47C4F4',
              margin: '1rem',
            }}
            icon={<UserOutlined />}
          />
          {recovered}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Avatar
            style={{
              backgroundColor: '#D6242C',
              margin: '1rem',
            }}
            icon={<UserOutlined />}
          />
          {deaths}
        </Card.Grid>
      </Card>
    </div>
  );
};

cardView.propTypes = {
  location: PropTypes.string,
  deaths: PropTypes.number,
  recovered: PropTypes.number,
  confirmed: PropTypes.number,
};
cardView.defaultProps = {
  location: '',
  deaths: 0,
  recovered: 0,
  confirmed: 0,
};

export default cardView;
