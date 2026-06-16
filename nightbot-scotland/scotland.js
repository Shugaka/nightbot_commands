/*
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
*/
/*
export default async function handler(req, res) {
try {
const response = await fetch(
"https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Towns_in_Scotland&cmlimit=500&format=json&origin=*"
);

```
const data = await response.json();

const places = data.query.categorymembers;

const randomPlace =
  places[Math.floor(Math.random() * places.length)];

res.setHeader("Content-Type", "text/plain");
res.status(200).send(randomPlace.title);
```

} catch (error) {
res.status(500).send("Somewhere in Scotland");
}
}
*/

export default async function handler(req, res) {
try {
const categories = [
"Category:Towns_in_Scotland",
"Category:Villages_in_Scotland",
"Category:Islands_of_Scotland",
"Category:Castles_in_Scotland",
"Category:Cities_in_Scotland"
];

let places = [];

for (const category of categories) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=${encodeURIComponent(category)}&cmlimit=500&format=json&origin=*`
  );

  const data = await response.json();

  if (data.query?.categorymembers) {
    places.push(
      ...data.query.categorymembers.map(item => item.title)
    );
  }
}

// Eliminar duplicados
places = [...new Set(places)];

if (places.length === 0) {
  throw new Error("No places found");
}

const randomPlace =
  places[Math.floor(Math.random() * places.length)];

res.setHeader("Content-Type", "text/plain");
res.status(200).send(randomPlace);


} catch (error) {
console.error(error);
res.status(200).send("Somewhere in Scotland");
}




const messages = [
  `Tú eres ${randomPlace}`,
  `Has sido asignado a ${randomPlace}`,
  `Tu hogar está en ${randomPlace}`,
  `Naciste en ${randomPlace}`,
  `La Corona te envía a ${randomPlace}`
];

const randomMessage =
  messages[Math.floor(Math.random() * messages.length)];

res.status(200).send(randomMessage);

}