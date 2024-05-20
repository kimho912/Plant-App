import SucculentImage from './images/Succulent.png';
import LantanaImage from './images/Lantana.png';
import DwarfYauponImage from './images/DwarfYaupon.png';
import BEyedSusanImage from './images/BEyedSusan.png';
import sunflower from './images/sunflower.png';
import cilantro from './images/cilantro.png';
import HeatIcon from './images/HeatIcon.png';
import FrostIcon from './images/FrostIcon.png';
import RainIcon from './images/RainIcon.png';
import WindIcon from './images/WindIcon.png';
import FineIcon from './images/FineIcon.png';
import CloudIcon from './images/cloud.png';
import SunnyIcon from './images/sunny.png';
import WindyIcon from './images/windy.png';

const START_SCREEN = "dashboard";


const plantForum = {
  location: "Arlington",
  chat: [
    { name: "Misty", message: "Great for beginners growing here in Arlington!" },
    { name: "Bob", message: "I’ve been growing every year and I love it!" },

  ]
}
const weatherData = [
  {
    time: '2 PM',
    icon: SunnyIcon,
    temperature: 93,
    precipitation: '20%',
    wind: '8 mph NW',
    humidity: '5%'
  },
  {
    time: '3 PM',
    icon: CloudIcon,
    temperature: 92,
    precipitation: '20%',
    wind: '8 mph NW',
    humidity: '5%'
  },
  {
    time: '4 PM',
    icon: SunnyIcon,
    temperature: 93,
    precipitation: '20%',
    wind: '8 mph NW',
    humidity: '5%'
  },
  {
    time: '5 PM',
    icon: SunnyIcon,
    temperature: 93,
    precipitation: '20%',
    wind: '8 mph NW',
    humidity: '5%'
  },
  {
    time: '6 PM',
    icon: SunnyIcon,
    temperature: 93,
    precipitation: '20%',
    wind: '8 mph NW',
    humidity: '5%'
  },
];

const plantList = [
  {
    name: "Succulent",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "6 hours of bright, indirect sunlight",
      water: "Water when soil is completely dry"
    },
    frost: 36,
    heat: 85,
    rain: 70,
    wind: 30,
    status: "",
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The Wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      summerMessage: "With hot condition next week, consider covering your plants during the daytime.",
      summerIcon: HeatIcon,
      fallMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      fallIcon: WindyIcon,
      springMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      springIcon: RainIcon,
      winterMessage: "With cold condition consider covering your plants.",
      winterIcon: FrostIcon
    },
    image: SucculentImage,
    added: "Planted 3 weeks ago"
  },

  {
    name: "Lantana",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "6-8 hours of direct sunlight",
      water: "Water sparingly once a week"
    },
    frost: 36,
    heat: 85,
    rain: 70,
    wind: 30,
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      fallMessage: "With hot condition next week, consider covering your plants during the daytime.",
      fallIcon: HeatIcon,
      summerMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      summerIcon: WindyIcon,
      winterMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      winterIcon: RainIcon,
      springMessage: "With cold condition next week, consider covering your plants during the night.",
      springIcon: FrostIcon
    },
    image: LantanaImage,
    added: "Planted 2 weeks ago"
  },

  {
    name: "Dwarf Yaupon",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "6-8 hours of bright sunlight",
      water: "Water once a week, increase in dry conditions"
    },
    frost: 36,
    heat: 90,
    rain: 70,
    wind: 30,
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The Wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      winterMessage: "With hot condition next week, consider covering your plants during the daytime.",
      winterIcon: HeatIcon,
      summerMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      summerIcon: WindyIcon,
      fallMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      fallIcon: RainIcon,
      springMessage: "With cold condition next week, consider covering your plants during the night.",
      springIcon: FrostIcon
    },
    image: DwarfYauponImage,
    added: "Planted 1 week ago"
  },

  {
    name: "B. Eyed Susan",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "6 hours of bright, indirect sunlight",
      water: "Water when soil is completely dry"
    },
    frost: 36,
    heat: 90,
    rain: 70,
    wind: 30,
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The Wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      winterMessage: "With hot condition next week, consider covering your plants during the daytime.",
      winterIcon: HeatIcon,
      summerMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      summerIcon: WindyIcon,
      fallMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      fallIcon: RainIcon,
      springMessage: "With cold condition next week, consider covering your plants during the night.",
      springIcon: FrostIcon
    },
    image: BEyedSusanImage,
    added: "Planted 4 weeks ago"

  },

  {
    name: "Cilantro",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "Partial shade to full sun",
      water: "Every 2-3 days"
    },
    frost: 36,
    heat: 90,
    rain: 70,
    wind: 30,
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The Wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      winterMessage: "With hot condition next week, consider covering your plants during the daytime.",
      winterIcon: HeatIcon,
      summerMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      summerIcon: WindyIcon,
      fallMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      fallIcon: RainIcon,
      springMessage: "With cold condition next week, consider covering your plants during the night.",
      springIcon: FrostIcon
    },
    image: cilantro,
    added: false
  },

  {
    name: "Sunflower",
    description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
    requirements: {
      sun: "6 hours of bright, indirect sunlight",
      water: "Water when soil is completely dry"
    },
    frost: 36,
    heat: 90,
    rain: 70,
    wind: 30,
    messages: {
      frost_warning: "It is below 36°F (2°C). Cover the plant",
      heat_warning: "It is above 85°F (29°C). Move the plant",
      rain_warning: "The precipitation is above 70%. Don't water the plant if it's rain",
      wind_warning: "The Wind is above 30 mph. Set walls to block the wind",
      fine: "Good"
    },
    season: {
      winterMessage: "With hot condition next week, consider covering your plants during the daytime.",
      winterIcon: HeatIcon,
      summerMessage: "With windy conditions next week, consider staking taller Succulent to prevent bending.",
      summerIcon: WindyIcon,
      fallMessage: "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week.",
      fallIcon: RainIcon,
      springMessage: "With cold condition next week, consider covering your plants during the night.",
      springIcon: FrostIcon
    },
    image: sunflower,
    added: "Planted 3 weeks ago"
  }
];
function updatePlantStatus(plant, weather) {
  let updatedPlant = { ...plant };

  const { temperature, precipitation, wind } = weather;

  if (temperature > plant.heat) {
    updatedPlant.status = "hot";
    updatedPlant.icon = HeatIcon;
    updatedPlant.message = plant.messages.heat_warning;
  } else if (temperature < plant.frost) {
    updatedPlant.status = "cold";
    updatedPlant.icon = FrostIcon;
    updatedPlant.message = plant.messages.frost_warning;
  } else if (precipitation > plant.rain) {
    updatedPlant.status = "wet";
    updatedPlant.icon = RainIcon;
    updatedPlant.message = plant.messages.rain_warning;
  } else if (wind > plant.wind) {
    updatedPlant.status = "windy";
    updatedPlant.icon = WindIcon;
    updatedPlant.message = plant.messages.wind_warning;
  } else {
    updatedPlant.status = "fine";
    updatedPlant.icon = FineIcon;
    updatedPlant.message = plant.messages.fine;
  }
  if (plant.added === false) {
    updatedPlant.added = false;
  }

  return updatedPlant;
}

export { plantList, plantForum, weatherData, START_SCREEN, updatePlantStatus };