let fs=require('fs')
module.exports =(opts,note)=>{
    let rawdata = fs.readFileSync("Note.json", "utf8");
    let notes = JSON.parse(rawdata);
    note = notes;
    note
      .filter(e => e.title === opts.title)
      .map(e => console.log(e.title, ":", e.body));
}