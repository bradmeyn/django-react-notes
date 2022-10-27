import React from 'react';

const ListItem = ({ note }) => {
  return (
    <li>
      <div>{note.body}</div>
    </li>
  );
};

export default ListItem;
