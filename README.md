# QMUL.WeatherApp


# API
API Key - `602176be6e70af936a462534053985a7`

API Website - https://openweathermap.org/api

Example API Call - https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=602176be6e70af936a462534053985a7

# Updating data
### Data Structure:
    state = {
        location: {
            city: 'LONDON',
            date: 'SATURDAY, 01 FEB 2019',
            altitude: 130
        },
        weather: {
            temperature: 75,
            wind: 18,
            humidity: 78,
            clouds: 100
        },
        daylight: {
            first: '06:00 AM',
            last: '21:00 PM'
        }
    }
