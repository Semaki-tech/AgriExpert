import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudLightning,
  Sunrise,
  Sunset,
  Wind,
  Droplets,
} from "lucide-react";
import { ReactNode } from "react";

const weatherIcons: { [key: string]: ReactNode } = {
  Ensoleillé: <Sun className="h-6 w-6 text-yellow-500" />,
  "Partiellement nuageux": <CloudSun className="h-6 w-6 text-gray-500" />,
  Nuageux: <Cloud className="h-6 w-6 text-gray-400" />,
  Averses: <CloudRain className="h-6 w-6 text-blue-500" />,
  Orages: <CloudLightning className="h-6 w-6 text-yellow-600" />,
};

const currentWeatherData = {
  location: "Lomé, Togo",
  temperature: 31,
  condition: "Partiellement nuageux",
  humidity: 78,
  wind: 12,
  sunrise: "05:58",
  sunset: "18:05",
};

const forecastData = [
  { day: "Mar", condition: "Orages", temp: "30°" },
  { day: "Mer", condition: "Averses", temp: "29°" },
  { day: "Jeu", condition: "Partiellement nuageux", temp: "31°" },
  { day: "Ven", condition: "Ensoleillé", temp: "32°" },
  { day: "Sam", condition: "Ensoleillé", temp: "32°" },
];

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight">Météo Agricole</h1>
        <p className="text-muted-foreground">
          Prévisions météo pour vous aider à planifier vos activités agricoles.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Conditions Actuelles - {currentWeatherData.location}</CardTitle>
          <CardDescription>
            Mise à jour à l'instant
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <div className="text-6xl font-bold">{currentWeatherData.temperature}°C</div>
            <div className="flex flex-col">
              {weatherIcons[currentWeatherData.condition]}
              <span>{currentWeatherData.condition}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2"><Droplets className="h-4 w-4" /> Humidité: {currentWeatherData.humidity}%</div>
            <div className="flex items-center gap-2"><Wind className="h-4 w-4" /> Vent: {currentWeatherData.wind} km/h</div>
            <div className="flex items-center gap-2"><Sunrise className="h-4 w-4" /> Lever: {currentWeatherData.sunrise}</div>
            <div className="flex items-center gap-2"><Sunset className="h-4 w-4" /> Coucher: {currentWeatherData.sunset}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prévisions sur 5 Jours</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around">
          {forecastData.map((forecast) => (
            <div key={forecast.day} className="flex flex-col items-center space-y-2">
              <div className="font-medium">{forecast.day}</div>
              {weatherIcons[forecast.condition]}
              <div className="text-lg font-semibold">{forecast.temp}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
