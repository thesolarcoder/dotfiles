var app = {};

app.error = function () {
  return chrome.runtime.lastError;
};

app.notifications = {
  "id": "open-in-pdf-notifications-id",
  "create": function (e, callback) {
    if (chrome.notifications) {
      chrome.notifications.create(app.notifications.id, {
        "type": e.type ? e.type : "basic",
        "message": e.message ? e.message : '',
        "title": e.title ? e.title : "Notifications",
        "iconUrl": e.iconUrl ? chrome.runtime.getURL(e.iconUrl) : chrome.runtime.getURL("data/icons/64.png")
      }, function (e) {
        if (callback) callback(e);
      });
    }
  }
};

app.contextmenu = {
  "create": function (options, callback) {
    if (chrome.contextMenus) {
      chrome.contextMenus.create(options, function (e) {
        if (callback) callback(e);
      });
    }
  },
  "on": {
    "clicked": function (callback) {
      if (chrome.contextMenus) {
        chrome.contextMenus.onClicked.addListener(function (info, tab) {
          app.storage.load(function () {
            callback(info, tab);
          });
        });
      }
    }
  }
};

app.options = {
  "port": null,
  "message": {},
  "receive": function (id, callback) {
    if (id) {
      app.options.message[id] = callback;
    }
  },
  "send": function (id, data) {
    if (id) {
      chrome.runtime.sendMessage({"data": data, "method": id, "path": "background-to-options"}, app.error);
    }
  },
  "post": function (id, data) {
    if (id) {
      if (app.options.port) {
        app.options.port.postMessage({"data": data, "method": id, "path": "background-to-options"});
      }
    }
  }
};

app.nativeclient = {
  "postMessage": function (args, callback) {
    if (chrome.runtime.sendNativeMessage) {
      chrome.runtime.sendNativeMessage("com.mybrowseraddon.node", {
        "args": args,
        "permissions": ["child_process"],
        "script": `
          var stdout = '';
          var stderr = '';
          var app = require('child_process').spawn(args[0], args.slice(1), {'detached': true});
          //
          app.stdout.on('data', function (data) {stdout += data});
          app.stderr.on('data', function (data) {stderr += data});
          //
          app.on('close', function (code) {
            push({code, stdout, stderr});
            close();
          });
        `
      }, callback);
    }
  }
};

app.tab = {
  "query": {
    "index": function (callback) {
      chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
        let tmp = chrome.runtime.lastError;
        if (tabs && tabs.length) {
          callback(tabs[0].index);
        } else callback(undefined);
      });
    }
  },
  "open": function (url, index, active, callback) {
    let properties = {
      "url": url, 
      "active": active !== undefined ? active : true
    };
    /*  */
    if (index !== undefined) {
      if (typeof index === "number") {
        properties.index = index + 1;
      }
    }
    /*  */
    chrome.tabs.create(properties, function (tab) {
      if (callback) callback(tab);
    }); 
  }
};

app.downloads = {
  "start": function (options, callback) {
    if (chrome.downloads) {
      chrome.downloads.download(options, function (e) {
        if (callback) callback(e);
      });
    }
  },
  "erase": function (options, callback) {
    if (chrome.downloads) {
      chrome.downloads.erase(options, function (e) {
        if (callback) callback(e);
      });
    }
  },
  "search": function (options, callback) {
    if (chrome.downloads) {
      chrome.downloads.search(options, function (e) {
        if (callback) callback(e);
      });
    }
  },
  "on": {
    "changed": function (callback) {
      if (chrome.downloads) {
        chrome.downloads.onChanged.addListener(function (e) {
          app.storage.load(function () {
            callback(e);
          });
        });
      }
    }
  }
};

app.storage = {
  "local": {},
  "read": function (id) {
    return app.storage.local[id];
  },
  "update": function (callback) {
    if (app.session) app.session.load();
    /*  */
    chrome.storage.local.get(null, function (e) {
      app.storage.local = e;
      if (callback) {
        callback("update");
      }
    });
  },
  "write": function (id, data, callback) {
    let tmp = {};
    tmp[id] = data;
    app.storage.local[id] = data;
    /*  */
    chrome.storage.local.set(tmp, function (e) {
      if (callback) {
        callback(e);
      }
    });
  },
  "load": function (callback) {
    const keys = Object.keys(app.storage.local);
    if (keys && keys.length) {
      if (callback) {
        callback("cache");
      }
    } else {
      app.storage.update(function () {
        if (callback) callback("disk");
      });
    }
  } 
};

app.on = {
  "management": function (callback) {
    chrome.management.getSelf(callback);
  },
  "uninstalled": function (url) {
    chrome.runtime.setUninstallURL(url, function () {});
  },
  "installed": function (callback) {
    chrome.runtime.onInstalled.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "startup": function (callback) {
    chrome.runtime.onStartup.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "connect": function (callback) {
    chrome.runtime.onConnect.addListener(function (e) {
      app.storage.load(function () {
        if (callback) callback(e);
      });
    });
  },
  "storage": function (callback) {
    chrome.storage.onChanged.addListener(function (changes, namespace) {
      app.storage.update(function () {
        if (callback) {
          callback(changes, namespace);
        }
      });
    });
  },
  "message": function (callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      app.storage.load(function () {
        callback(request, sender, sendResponse);
      });
      /*  */
      return true;
    });
  }
};
