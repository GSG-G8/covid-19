import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';

function Loading() {
  return (
    <div>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
