import styled from 'styled-components';
import { WiDayCloudyHigh } from 'react-icons/wi';


const Container = styled.div`
    text-align: center;
    background: linear-gradient(135deg, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});
    color: white;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
`;

const Temp = styled.h1`
    font-size: 64px;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Location = styled.h2`
    font-size: 28px;
    margin: 10px 0;
    font-weight: 300;
    letter-spacing: 1px;
`;

const CurrentWeather = ({location, temperature}) => {
    return (
    <Container>
        <Location>{location}</Location>
        <Temp>
            <WiDayCloudyHigh size={74} />
            {temperature}°C</Temp> 
    </Container>
    );
};
export default CurrentWeather;
