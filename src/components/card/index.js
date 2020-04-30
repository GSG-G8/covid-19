import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './index.css';

const gridStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const cardView = ({ location, confirmed, recovered, deaths }) => {
  return (
    <div className="card">
      <Card title={location}>
        <Card.Grid style={gridStyle}>
          <span>𝗖𝗢𝗡𝗙𝗜𝗥𝗠𝗘𝗗</span>
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
          <span>𝗥𝗘𝗖𝗢𝗩𝗘𝗥𝗘𝗗</span>
          <Avatar
            style={{
              backgroundColor: '#15a0d1',
              margin: '1rem',
            }}
            icon={<UserOutlined />}
          />
          {recovered}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <span>𝗗𝗘𝗔𝗧𝗛𝗦</span>
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
