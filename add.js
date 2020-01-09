let fs=require('fs')
module.exports = (opts, note) => {
  let rawdata = fs.readFileSync("Note.json", "utf8");
  let notes = JSON.parse(rawdata);
  note = notes;
  note.push({
    title: opts.title,
    body: opts.body
  });
  fs.writeFileSync("Note.json", JSON.stringify(note));
  console.log("added successfully!", note);
};