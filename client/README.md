to run app 

set .env.development.local
REACT_APP_GOOGLE_KEY="AIzaSyBL2C6h7_O5EQN6JGrrP58OIWwjMsxjyJU"
REACT_APP_SERVER_URL="http://localhost:3001"


run - npm i
npm run serverdev \\for server
npm run dev \\ for client

then you will see map with 5000 marks

to chang location of mark 

send to http://localhost:3001/markers or to the url
https://tomer-map.herokuapp.com/markers


method:post
{
	"id":"car0" //the name you will see in the list,
    "position":{
        "lat":39.8//new lat // when over item on list you will see is lat and lng,
        "lng":-103.17//new lng // when over item on list you will see is lat and lng
    }
}

if you would like to chang to 10000 marks go to server services/Map.js
and change  this.numberOfMarks to 10000;

thank you for the opportunity.