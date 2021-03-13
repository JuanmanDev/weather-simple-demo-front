import { getWeatherByCityName } from '../../services/openweathermap';

describe('openWeatherMap connection Test', () => {
  test('getWeatherByCityName cityName', async () => {
    const result = await getWeatherByCityName({
      cityName: 'Zamora, ES'
    });

    const numberWeathersExpected = 1;
    const firstElementoInArray = 0;

    expect(result.coord).toEqual({ lon: -5.75, lat: 41.5 });
    expect(result.weather).toBeDefined();
    expect(result.weather).toHaveLength(numberWeathersExpected);
    expect(result.weather[firstElementoInArray].description).toBeDefined();
    expect(result.weather[firstElementoInArray].main).toBeDefined();
  });
});
