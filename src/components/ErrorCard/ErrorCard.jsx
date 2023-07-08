import React from 'react';

import errorImage from '../../assets/Oops_1.jpg';
import { ErrorImage, ErrorText, ErrorWrapper } from './ErrorCard.styled';

const ErrorCard = ({ children }) => {
  return (
    <ErrorWrapper>
      <ErrorImage
        src={errorImage}
        alt="Error"
        width="480
			"
      />
      <ErrorText>{children}</ErrorText>
    </ErrorWrapper>
  );
};

export default ErrorCard;
