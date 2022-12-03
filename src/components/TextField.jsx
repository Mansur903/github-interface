import React, { useEffect, useRef } from 'react';

const TextField = (props) => {
  const { value, setValue } = props;
  const ref = useRef(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <label htmlFor="input" className="block w-4/5">
      <span className="text-white">Введите логин github</span>
      <input
        id="input"
        type="text"
        className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    h-12
                  "
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </label>
  );
};

export default TextField;
