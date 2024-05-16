Video Link - https://youtu.be/Yc8tSlL-2zM

SETUP CODESPACES:
In the Terminal, run
npm install react-swipeable-views --force
npm install
npm start

Under ports, start forwarding on port 3000 (this should be automatic).

MOCKUP CONVERSION:
The following parent component have been marked up and styled:
Dashboard
SeasonInsights
PlantProfileh
PlantSearch

Your mockup should have the following reusable components. 
Plant - Used in PlantItem, PlantProfile
WeatherWarning - Used in PlantItem
PlantItem - Used in Dashboard, SeasonalInsights, PlantSearch
CommunityForum - Used in PlantProfile
WeatherForecast - Used in SeasonalInsights

TOGGLE CLASSES: 
App
Toggle Classes
PlantItem
 - frost-warning
 - heat-warning
 - rain-warning
 - wind-warning
SeasonalInsights
 - spring
 - summer
 - fall
 - winter

BINDING INTERACTION
Use the provided setScreen function (in App.jsx) to move between screens. Note that you need to pass setScreen as a prop wherever you will be using it. 

SeasonalInsights (5 pts)
 SwipeRight - Go back to Dashboard
 onDrag - Update season (see toggle classes), Bold active season.
Dashboard (5 pts)
 onClick (PlantItem) - Go to PlantProfile
 onClick (Add) - Go to PlantSearch
PlantProfile  (10 pts)
 onTap (Send Button) - Adds text from input to the bottom of Conversation.
 onClick (Back) - Goes back to Dashboard.
 onClick (Add) - Goes back to Dashboard. PlantItem appears in Dashboard.
PlantSearch(10 pts)
 onChange (SearchInput) - List updates based off of what has been input.
 onTap (PlantItem) - Go to PlantProfile (Add button should be present)
