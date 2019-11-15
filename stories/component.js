import React from 'react';
const Red = props => <span style={{ color: 'red' }} {...props} />;
 
const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td>
            {property}
            {required ? <Red>*</Red> : null}
          </td>
          <td>{propType.name}</td>
          <td>{defaultValue}</td>
          <td>{description}</td>
        </tr>
      );
    }
  );
 
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export default TableComponent