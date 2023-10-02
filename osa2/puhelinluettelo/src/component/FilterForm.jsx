import React, { useState } from 'react';

const FilterForm = ({handler, value}) => {
  console.log('filterForm executed: handler, value', handler, value)
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handler}
      />
      <button type="submit">Filter</button>
    </form>
  );
}

export default FilterForm;
