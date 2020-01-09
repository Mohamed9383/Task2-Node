let fs=require('fs')
module.exports = () => {
  let rawdata = fs.readFileSync("Note.json", "utf8");
  let notes = JSON.parse(rawdata);
  notes.map(e => console.log(e.title, ":", e.body));
};