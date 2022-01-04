require('dotenv').config();
const { response } = require('express');
const express = require('express');
const app = express();
const rawData = require('./rawData');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const port = process.env.PORT || 3000;
const client = require('twilio')(accountSid, authToken);

app.use(express.json());

app.get('/', (req, res) => {
  let sections = [];
  let rows = [];
  let seatManifest = [];

	res.set({
		'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
	});

  sections = [...new Set(rawData.map(seat => {
    if(+seat.Section < 101) {
      return seat.Section = `1510 Reserve Section ${seat.Section}`;
    }
    return seat.Section;
  }))];

  // got this from here -> https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
  const getUniqueList = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  sections.forEach(section => {
    seatManifest.push({"section": section, "rows": []});
  });

  seatManifest.forEach(section => {
    rawData.forEach(seat => {
      if(section.section === seat.Section) {
        section.rows.push({"row": seat.Row, "seats": []});
        section.rows = getUniqueList(section.rows, 'row');
      }
    });
  });

  seatManifest.forEach(section => {
    rawData.forEach(seat => {
      if(section.section === seat.Section) {
        section.rows.forEach(row => {
          if(row.row === seat.Row) {
            row.seats.push(seat.Seat)
          }
        });
      }
    })
  })

  res.json(seatManifest);
});

app.get('/phone/:phone', (req, res) => {
  res.set({
		'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
	});

  client.lookups.v1.phoneNumbers(req.params.phone)
    .fetch({type: ['carrier']})
    .then(phone_number => {
      res.json(phone_number)
    });
  });

app.listen(port);