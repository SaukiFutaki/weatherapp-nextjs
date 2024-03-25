"use client";
import { City, Country } from "country-state-city";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";

type option = {
  value: {
    latitude: number;
    longitude: number;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    name: string;
    latitude: number;
    longitude: number;
    countryCode: string;
    stateCode: string;
  };
  label: string;
} | null;

// const option = Country.getAllCountries().map((country) => ({
//     value: {
//       latitude: country.latitude,
//       longitude: country.longitude,
//       isoCode: country.isoCode
//     },
//     label: country.name

// }));

export default function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const options = Country.getAllCountries().map((country) => ({
    value: {
      latitude: Number(country.latitude),
      longitude: Number(country.longitude),
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectCity = (option : cityOption)=> {
    setSelectedCity(option);
    router.push(`/location/${option?.value?.name}/${option?.value?.latitude}/${option?.value?.longitude}`)

  }

  return (
    <div>
      <div className="text-black">
        <label htmlFor="country">Country</label>
      </div>
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectCountry}
        options={options}
      />

      {selectedCountry && (
        <div className="space-y-2">
           <div className="flex items-center space-x-2 text-white/80">
            <label htmlFor="city">City</label>
           </div>
           <Select 
           className="text-black"
            value={selectedCity}
            onChange={handleSelectCity}
            options={
              selectedCountry?.value?.isoCode ? City?.getCitiesOfCountry(selectedCountry?.value?.isoCode)?.map((city) => ({
                value : {
                  name: city.name,
                  latitude: Number(city.latitude),
                  longitude: Number(city.longitude),
                  countryCode: city.countryCode,
                  stateCode: city.stateCode
                },
                label: city.name
              })) : []
            }
           />
        </div>

      )}
    </div>
  );
}
