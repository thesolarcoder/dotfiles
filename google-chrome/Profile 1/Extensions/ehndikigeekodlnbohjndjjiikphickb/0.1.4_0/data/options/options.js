var background = (function () {
  let tmp = {};
  chrome.runtime.onMessage.addListener(function (request) {
    for (let id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "background-to-options") {
          if (request.method === id) {
            tmp[id](request.data);
          }
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {
      tmp[id] = callback;
    },
    "send": function (id, data) {
      chrome.runtime.sendMessage({
        "method": id, 
        "data": data,
        "path": "options-to-background"
      }, function () {
        return chrome.runtime.lastError;
      });
    }
  }
})();

var config = {
  "render": function (e) {
    if (e) {
      const path = document.getElementById("path");
      const args = document.getElementById("args");
      const clear = document.getElementById("clear");
      /*  */
      path.value = e.path;
      clear.checked = e.clear;
      args.value = e.args.join(',');
    }
  },
  "load": function () {
    const path = document.getElementById("path");
    const args = document.getElementById("args");
    const clear = document.getElementById("clear");
    /*  */
    path.addEventListener("change", function (e) {
      background.send("path", e.target.value);
    }, false);
    /*  */
    args.addEventListener("change", function (e) {
      background.send("args", e.target.value.split(','));
    }, false);
    /*  */
    clear.addEventListener("click", function (e) {
      background.send("clear", e.target.checked);
    }, false);
    /*  */
    background.send("load");
    window.removeEventListener("load", config.load, false);
  }
};

background.receive("storage", config.render);
window.addEventListener("load", config.load, false);
