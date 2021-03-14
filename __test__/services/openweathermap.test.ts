import { getWeatherByCityName, getWeatherByCityNameOneCall } from '../../services/openweathermap';

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

// describe('openWeatherMap connection Test Historical', () => {
//   test('getWeatherByCityNameWithHistorical cityName', async () => {
//     const days = 5;
//     const result = await getWeatherByCityNameWithHistorical({
//       cityName: 'Zamora, ES',
//       days
//     });

//     expect(result.country).toBeDefined();
//     expect(result.list).toBeDefined();
//     expect(result.cnt).toBe(days);
//     expect(result.list.length).toBe(days);
//   });
// });

describe('openWeatherMap one call connection Test', () => {
  test('getWeatherByCityName cityName', async () => {
    const lat = 41.509156;
    const lon = -5.741572;

    const result = await getWeatherByCityNameOneCall({
      lat,
      lon
    });

    const timeZoneMadrid = 3600;
    const minLength = 5;

    expect(result.lat).toBeCloseTo(lat);
    expect(result.lon).toBeCloseTo(lon);
    expect(result.timezone).toBe('Europe/Madrid');
    expect(result.timezone_offset).toBe(timeZoneMadrid);
    expect(result.minutely.length).toBeGreaterThan(minLength);
    expect(result.hourly.length).toBeGreaterThan(minLength);
    expect(result.daily.length).toBeGreaterThan(minLength);
  });
});
