import React from 'react';
import { useSelector } from 'react-redux';

const Avatar = () => {
  const url = useSelector((state) => state.user.avatar);
  const login = useSelector((state) => state.user.login);
  return (
    <div className="flex items-center">
      <img className="w-36 rounded-full" src={url} alt="Аватар" />
      <h1 className="text-white text-5xl px-10">{login}</h1>
    </div>
  );
};

export default Avatar;
