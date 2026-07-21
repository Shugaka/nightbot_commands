const places = [
  { name: "Edinburgh", attractions: ["Edinburgh Castle", "the Royal Mile", "the Palace of Holyroodhouse"] },
  { name: "Glasgow", attractions: ["Glasgow Cathedral", "the Kelvingrove Museum", "the Merchant City district"] },
  { name: "Aberdeen", attractions: ["Dunnottar Castle", "the Old Town House", "Aberdeen Beach"] },
  { name: "Inverness", attractions: ["Inverness Castle", "Loch Ness", "the River Ness"] },
  { name: "Dundee", attractions: ["the RRS Discovery ship", "the V&A Dundee museum", "Broughty Castle"] },
  { name: "Stirling", attractions: ["Stirling Castle", "the Wallace Monument", "the Church of the Holy Rude"] },
  { name: "Perth", attractions: ["Scone Palace", "the Perth Museum", "the River Tay"] },
  { name: "Paisley", attractions: ["Paisley Abbey", "the Paisley Museum", "the River Cart"] },
  { name: "Ayr", attractions: ["Culzean Castle", "the birthplace of Robert Burns", "Ayr Beach"] },
  { name: "Oban", attractions: ["the Oban Distillery", "McCaig's Tower", "St John's Cathedral"] },
  { name: "Fort William", attractions: ["Ben Nevis", "the Glenfinnan Viaduct", "Inverlochy Castle"] },
  { name: "Dumfries", attractions: ["the Robert Burns House", "Caerlaverock Castle", "Burns Mill"] },
  { name: "Elgin", attractions: ["the ruins of Elgin Cathedral", "Spynie Castle", "the Elgin Museum"] },
  { name: "Falkirk", attractions: ["the Kelpies", "the Falkirk Wheel", "the Antonine Wall"] },
  { name: "Dunfermline", attractions: ["Dunfermline Abbey", "Dunfermline Palace", "Pittencrieff Park"] },
  { name: "Atrair's house", attractions: ["his fridge", "the underside of his bed", "his hidden cache of cans of peas"] },
  { name: "Haurbus", attractions: ["his maw", "his throat", "his belly", "his GHD"] },
  { name: "Silk Song", attractions: ["Poshanka", "the respawn bench because Atrair died", "the inside of a Guaraná bottle"] },
];

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default async function handler(req, res) {
  const place = rand(places);
  const attraction = rand(place.attractions);
  res.status(200).send(`${place.name}, specifically ${attraction}`);
}
