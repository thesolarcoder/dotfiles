var config = {};

config.temporarily = {
  "id": '',
  "url": '',
  "args": []
};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.browser = {
  set args (val) {app.storage.write("browser-args", val)},
  set path (val) {app.storage.write("browser-path", val)},
  set clear (val) {app.storage.write("browser-clear", val)},
  get args () {return app.storage.read("browser-args") !== undefined ? app.storage.read("browser-args") : ['']},
  get clear () {return app.storage.read("browser-clear") !== undefined ? app.storage.read("browser-clear") : true},
  get path () {return app.storage.read("browser-path") !== undefined ? app.storage.read("browser-path") : "C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader\\AcroRd32.exe"}
};
