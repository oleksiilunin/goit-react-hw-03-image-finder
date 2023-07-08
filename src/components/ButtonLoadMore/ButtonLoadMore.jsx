import React from 'react';
import { Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more...
    </Button>
  );
};

export default ButtonLoadMore;
