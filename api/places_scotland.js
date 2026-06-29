
export default async function handler(req, res) {
  const places = [
    "Edinburgh",
    "Glasgow",
    "Aberdeen",
    "Inverness",
    "Dundee",
    "Stirling",
    "Perth",
    "Paisley",
    "Ayr",
    "Oban",
    "Fort William",
    "Dumfries",
    "Elgin",
    "Falkirk",
    "Dunfermline"
  ];

  const randomPlace =
    places[Math.floor(Math.random() * places.length)];

  res.status(200).send(randomPlace);
}