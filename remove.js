fs=require('fs')
module.exports =(opts,note)=>{
    let rawdata = fs.readFileSync("Note.json", "utf8");
    let notes = JSON.parse(rawdata);
    note = notes;
    note = note.filter(e => e.title !== opts.title);
    fs.writeFileSync("Note.json", JSON.stringify(note));
    console.log("removed successfully! ", note);
}