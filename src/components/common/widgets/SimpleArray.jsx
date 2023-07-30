import React from 'react';
import { DataGrid } from 'devextreme-react/data-grid';

const SimpleArray = ({columns, dataSource}) => {
  return (
    <DataGrid
      dataSource={dataSource}
      keyExpr="ID"
      defaultColumns={columns}
      showBorders={true}
      height={'100%'}
    />
  )
}

export default SimpleArray