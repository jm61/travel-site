const fs = require("fs");
const https = require("https");
const url = "https://i.ytimg.com/vi/JZqvuBxEDnw/maxresdefault.jpg";

/* fs.writeFile(__dirname + "/test.html", "<mark>Brad rules</mark>", function (
  error
) {
  if (error) {
    console.log(error);
  } else {
    return console.log("Congrats you are the boss");
  }
}); */

https.get(url, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});
