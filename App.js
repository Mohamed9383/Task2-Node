let fs = require("fs");
let opts = require("minimist")(process.argv.slice(2), {
  alias: {
    b: "body",
    t: "title"
  }
});  
let note = [{}];
const menus = {
  main: `
    outside [command] <options>
    version ............ show package version
    help ............... show help menu for a command
    add ................ add note
    list ............... show notes
    remove ............. remove note
    read ............... read note`,
  add: `
    argument needed!!
    note add <options>
    --title, -t ..... title note
    --body, -b ...... body note`,
  remove: `
    argument needed!!
    note remove <options>
    --title, -t ..... title note`,
  read: `
    argument needed!!
    note read <options>
    --title, -t ..... title note`
};
switch (opts._[0]) {
  case "version": {
    console.log(
      "v ",
      JSON.parse(fs.readFileSync("package.json", "utf8")).version
    );
    process.exit(1);
  }
  case "list": {
    require("./list")();
    process.exit(1);
  }
  case "add": {
    if (!opts.title || !opts.body) console.log(menus.add);
    else {
      require("./add")(opts, note);
    }
    process.exit(1);
  }
  case "remove": {
    if (!opts.title) console.log(menus.remove);
    else {
      require("./remove")(opts, note);
    }
    process.exit(1);
  }
  case "read": {
    if (!opts.title) console.log(menus.read);
    else {
      require("./read")(opts, note);
    }
    process.exit(1);
  }
  default: {
    console.log(menus.main);
  }
}