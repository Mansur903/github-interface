import React, { useState } from 'react';
import { Octokit } from '@octokit/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addUserInfo } from '../slices/usersSlice';
import TextField from './TextField';
import Button from './Button';

const Main = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedValue = e.target[0].value;

    const octokit = new Octokit({ auth: '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' });
    const reposData = await octokit.request(`GET /users/${submittedValue}/repos`, {
      org: 'ORG',
    });
    const userData = await octokit.request(`GET /users/${submittedValue}`);

    const avatarUrl = userData.data.avatar_url;
    const { login } = userData.data;
    const reposList = reposData.data;

    dispatch(addUserInfo({ reposList, login, avatarUrl }));
    setValue('');
    navigate('/user');
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="flex items-end w-1/2">
        <TextField value={value} setValue={setValue} />
        <Button />
      </form>
    </div>
  );
};

export default Main;
