
import styled from 'styled-components';

const CardContainer = styled.div
`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;
`;

const CardImage = styled.img
`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardTitle = styled.h2
`
  font-size: 1.5em;
  margin-top: 10px;
  color: #333;
`;

const CardDescription = styled.p
`
  font-size: 1em;
  color: #666;
  margin-top: 10px;
`;

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
