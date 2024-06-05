
import React from 'react';

const MenuButton = ({title}) => {
  return (
    <div>
        <button class=" bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            {title}
        </button>
    </div>
  );
};

export default MenuButton;


