import Select from 'react-select';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Container, Wrapper, Title, WrapFilter } from './style';
import { useAppDispatch, useAppSelector } from 'reduxtoolkit/hooks';
import { setOptionValue, setSearchByName } from 'reduxtoolkit/blogs';

const Header = () => {
  const dispatch = useAppDispatch();
  const [option, setOption] = useState(null);
  const { options, searchByName } = useAppSelector((state) => state.blogs);

  const handleSelect = (e: any) => {
    setOption(e);
    dispatch(setOptionValue(e));
  };

  const handleChange = (e: any) => dispatch(setSearchByName(e.target.value));

  return (
    <Container>
      <Wrapper>
        <Title>NARUTO</Title>
        <WrapFilter>
          <Select
            value={option}
            options={options}
            isClearable={true}
            onChange={handleSelect}
            placeholder="Select Type"
          />
          <TextField
            value={searchByName}
            placeholder="Search By Name"
            onChange={handleChange}
          />
        </WrapFilter>
      </Wrapper>
    </Container>
  );
};

export default Header;
