import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {
  return (
    <div>
      <Link to='/'>
        <FaBeer />
        <StyledAbout>About</StyledAbout>
      </Link>
    </div>
  );
};

export default About;

const StyledAbout = styled.div`
  background-color: red;
`;
