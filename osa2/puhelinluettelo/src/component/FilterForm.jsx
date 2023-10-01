import React, { useState } from 'react';

const FilterForm = ({ onFilterChange, handler, value}) => {
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
