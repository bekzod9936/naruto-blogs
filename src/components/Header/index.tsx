import React from 'react';
import { IOptions } from 'types';
import { TextField } from '@mui/material';
import Select, { MultiValue } from 'react-select';
import { Container, Wrapper, Title, WrapFilter } from './style';
import { useAppDispatch, useAppSelector } from 'reduxtoolkit/hooks';
import { setOptionValue, setSearchByName } from 'reduxtoolkit/blogs';

const Header = () => {
  const dispatch = useAppDispatch();

  const { option, options, searchByName } = useAppSelector(
    (state) => state.blogs
  );

  const handleSelect = (e: MultiValue<IOptions>) => {
    dispatch(setOptionValue(e));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchByName(e.target.value));

  return (
    <Container>
      <Wrapper>
        <Title>NARUTO</Title>
        <WrapFilter>
          <Select
            value={option}
            options={options}
            isMulti
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
