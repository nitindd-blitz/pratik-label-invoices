
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { readPdf } = require("C:/Users/LENOVO/OrdersPOD/node_modules/cypress/scripts/readPdf.js");
const { promisify } = require("util");
const pdf2html = require("C:/Users/LENOVO/OrdersPOD/node_modules/pdf2html/index");

const toHtml = promisify(pdf2html.html);

module.exports = defineConfig({
  projectId: 'rsfpzk',
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile,
        readPdf,
        toHtml,
      });
      // return config; // You might uncomment this line if you need to modify the config object
    },
    specPattern: ["cypress/PlaceOrder/BulkandManualOrder.js/", "cypress/PlaceOrder/Catalogue.js/", "cypress/PlaceOrder/processorder.js/","cypress/PlaceOrder/ExpiredOrder.js","cypress/PlaceOrder/Cancellationflow.js","cypress/PlaceOrder/SystemClubbing.js","cypress/PlaceOrder/ManualLP.js"]
  },
});

