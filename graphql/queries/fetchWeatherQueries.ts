import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery($current: String, $daily: String, $hourly: String, $latitude: String, $longitude: String, $timezone: String) {
  myQuery(
    current: $current
    hourly: $hourly
    latitude: $latitude
    longitude: $longitude
    timezone: $timezone
    daily: $daily
  ) {
    current {
      interval
      relative_humidity_2m
      temperature_2m
      time
    }
    current_units {
      interval
      relative_humidity_2m
      temperature_2m
      time
    }
    daily {
      temperature_2m_max
      time
      weather_code
    }
    daily_units {
      temperature_2m_max
      time
      weather_code
    }
    elevation
    generationtime_ms
    hourly {
      apparent_temperature
      dew_point_2m
      precipitation_probability
      relative_humidity_2m
      temperature_2m
      time
      uv_index
      uv_index_clear_sky
    }
    hourly_units {
      apparent_temperature
      dew_point_2m
      precipitation_probability
      relative_humidity_2m
      temperature_2m
      time
      uv_index
      uv_index_clear_sky
    }
    latitude
    longitude
    timezone
    timezone_abbreviation
    utc_offset_seconds
  }
  }`; // Add a closing backtick here


export default fetchWeatherQuery;