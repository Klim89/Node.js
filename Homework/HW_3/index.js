// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require("express");
const fs = require("fs");
const app = express();

function readCounterFromFile() {
  try {
    const data = fs.readFileSync("counter.json");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function writeCounterToFile(counter) {
  fs.writeFileSync("counter.json", JSON.stringify(counter, null, 2));
}

app.get("/", (req, res) => {
  let counter = readCounterFromFile();
  counter["/"] = (counter["/"] || 0) + 1;
  writeCounterToFile(counter);

  res.send(`<h1>Home Page</h1><a href='/about'>Link to about page</a> Просмотры: ${counter["/"]}`);
});

app.get("/about", (req, res) => {
  let counter = readCounterFromFile();
  counter["/about"] = (counter["/about"] || 0) + 1;
  writeCounterToFile(counter);

  res.send(`<h1>About Page</h1><a href='/'>Link to home page</a> Просмотры: ${counter["/about"]}`);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
