import styled from "styled-components";
import { WiDaySunny } from 'react-icons/wi';


const ForeCastContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

const DayCard = styled.div`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
    min-width: 100px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
`;

const DateText = styled.p`
    margin: 0;
    font-weight: bold;
`;

const TempText = styled.p`
    margin: 5px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;  
`;  

const WeatherForecast = ({forecast}) => {
    return (   
    <ForeCastContainer>
        {forecast.map((day, index) => (
            <DayCard key={index}>
                <DateText>{day.date}</DateText>
                <TempText>
                    <WiDaySunny size={20} />
                    Min: {day.minTemp}°C</TempText>
                <TempText>
                    <WiDaySunny size={20} />
                    Max: {day.maxTemp}°C</TempText>
            </DayCard>
        ))}
    </ForeCastContainer>
    );
};
export default WeatherForecast;