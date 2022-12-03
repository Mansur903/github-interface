import React from 'react';

import Avatar from './Avatar';
import Table from './Table';

const UserPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <Avatar />
      <Table />
    </div>
  );
};

export default UserPage;
