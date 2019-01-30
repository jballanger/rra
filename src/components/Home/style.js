import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 120px;
  padding: 20px;
  background-color: #001f3f;
`;

export const StyledLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
`;
