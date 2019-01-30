import React, { Component } from 'react';
import {
  Container,
  LinkWrapper,
  StyledLink,
} from './style';

class Home extends Component {
  render() {
    const pages = [
      { id: 0, path: '/todo', name: 'Todo' },
      { id: 1, path: '/counter', name: 'Counter' },
      { id: 2, path: '/404', name: '404' },
      { id: 3, path: '/weather', name: 'Weather' },
    ];
    return (
      <Container>
        {pages.map((page) => {
          return (
            <LinkWrapper key={page.id}>
              <StyledLink to={page.path}>{page.name}</StyledLink>
            </LinkWrapper>
          );
        })}
      </Container>
    );
  }
}

export default Home;
