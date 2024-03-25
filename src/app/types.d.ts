interface CurrentData {
  interval: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
}

interface CurrentUnitsData {
  interval: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
}

interface DailyData {
  temperature_2m_max: string;
  time: string;
  weather_code: string;
}

interface DailyUnitsData {
  temperature_2m_max: string;
  time: string;
  weather_code: string;
}

interface HourlyData {
  apparent_temperature: string;
  dew_point_2m: string;
  precipitation_probability: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
}

interface HourlyUnitsData {
  apparent_temperature: string;
  dew_point_2m: string;
  precipitation_probability: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
}
interface Root {
  current: CurrentData;
  current_units: CurrentUnitsData;
  daily: DailyData;
  daily_units: DailyUnitsData;
  elevation: string;
  generationtime_ms: string;
  hourly: HourlyData;
  hourly_units: HourlyUnitsData;
  latitude: string;
  longitude: string;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: string;
}



interface MyQueryVariables {
  current: string;
  daily: string;
  hourly: string;
  latitude: string;
  longitude: string;
  timezone: string;
}
interface MyQueryResponse {
  myQuery: MyQueryData;
}

export { MyQueryResponse, MyQueryVariables };