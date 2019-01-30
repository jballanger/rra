import styled from 'styled-components';

const randomRotate = Math.round(Math.random() * (180));

export const MagicText = styled.p`
  font-size: 72px;
  transform: rotate(${randomRotate}deg);
  animation: rainbow 3s infinite;
  @keyframes rainbow{
    0% { color: orange; }
    10% { color: purple; }
    20% { color: red; }
    30% { color: CadetBlue; }
    40% { color: yellow; }
    50% { color: coral; }
    60% { color: green; }
    70% { color: cyan; }
    80% { color: DeepPink; }
    90% { color: DodgerBlue; }
    100% { color: orange; }
  }
`;
