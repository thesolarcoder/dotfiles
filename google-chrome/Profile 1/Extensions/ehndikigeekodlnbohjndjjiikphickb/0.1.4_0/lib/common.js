var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    app.contextmenu.create({
      "id": "open-in-pdf",
      "contexts": ["link", "page"],
      "title": "Open in PDF Viewer"
    }, app.error);
  },
  "action": {
    "storage": function (changes, namespace) {
      /*  */
    },
    "contextmenu": function (e) {
      const path = config.browser.path;
      const args = config.browser.args;
      const url = e.linkUrl || e.pageUrl || e.srcUrl || '';
      /*  */
      config.temporarily.args = [];
      config.temporarily.args.push(path);
      /*  */
      if (args.length && args[0]) {
        config.temporarily.args.push("/A");
        for (let i = 0; i < args.length; i++) {
          let arg = args[i];
          arg = arg.trim();
          /*  */
          config.temporarily.args.push(arg);
        }
      }
      /*  */
      const cond = url && url.startsWith("https://www.google.") && url.indexOf("&url=") !== -1;
      if (cond) url = decodeURIComponent(url.split("&url=")[1].split('&')[0]);
      /*  */
      app.downloads.start({"url": url}, function (id) {
        config.temporarily.id = id;
        config.temporarily.url = url;
      });
    },
    "changed": function (e) {
      const complete = e.state && e.state.current === "complete";
      /*  */
      if (complete) {
        app.downloads.search({}, function (arr) {
          for (let i = 0; i < arr.length; i++) {
            const cond_1 = config.temporarily.id && config.temporarily.id === arr[i].id;
            const cond_2 = config.temporarily.url && config.temporarily.url === arr[i].url;
            const cond_3 = config.temporarily.url && config.temporarily.url.indexOf(".pdf") !== -1;
            /*  */
            if (cond_1 && cond_2 && cond_3) {
              if (config.browser.clear) app.downloads.erase({});
              config.temporarily.args.push(arr[i].filename.split("\\").join("\\\\"));
              /*  */
              app.nativeclient.postMessage(config.temporarily.args, function (e) {
                const err = app.error();
                if (e && "error" in e) {
                  const tmp = e.type === "exception" ? "Please make sure PDF client path is correct in the options page" : e.error;
                  app.notifications.create({
                    "title": "Open in PDF Viewer",
                    "message": "An error has occurred! " + tmp
                  });
                } else if (e === undefined) {
                  const tmp = "Please make sure native client patch is installed on your machine.";
                  app.notifications.create({
                    "title": "Open in PDF Viewer",
                    "message": "An error has occurred! " + tmp
                  });
                }
              });
              /*  */
              break;
            }
          }
        });
      }
    }
  }
};

app.options.receive("load", function () {
  app.options.send("storage", {
    "args": config.browser.args,
    "path": config.browser.path,
    "clear": config.browser.clear,
  });
});

app.options.receive("path", function (e) {config.browser.path = e});
app.options.receive("args", function (e) {config.browser.args = e});
app.options.receive("clear", function (e) {config.browser.clear = e});

app.on.startup(core.start);
app.on.installed(core.install);
app.on.storage(core.action.storage);
app.downloads.on.changed(core.action.changed);
app.contextmenu.on.clicked(core.action.contextmenu);
