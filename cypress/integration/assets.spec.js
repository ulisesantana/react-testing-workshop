const { assets, holders } = require("../fixtures/data.mock.json");
const assetsIDs = Object.keys(assets);
const holdersIDs = Object.keys(holders);
const asset = {
  name: "Nintendo Switch",
  notes: "Try a Mario Kart between tasks.",
  blocked: false,
  serial: "IT96A9ETOG12T0867TG01G08G8AS0DV6",
  assignedTo: holdersIDs[1]
};
const holder = holders[asset.assignedTo].name;
const KPI = '[data-testid="kpi"]';
const assetsTable = '[data-testid="assets-table"]';
const recordsTable = '[data-testid="records-table"]';
const backButton = '[data-testid="back-button"]';
const assetsFormButton = '[data-testid="open-asset-form-button"]';
const assetsForm = '[data-testid="asset-form"]';
const assetsFormSubmit = "[data-testid=assets-form-submit]";
const getFormInput = prop => (s = "") =>
  `${assetsForm} [data-testid="${prop}"]`.concat(` ${s}`);
const getAssetRow = id => `${assetsTable} [data-testid="asset-${id}"]`;
const getAssetCell = (id, prop) =>
  `${getAssetRow(id)} > [data-testid="asset-${prop}"]`;

function checkRowById(id) {
  cy.get(getAssetCell(id, "name")).contains(assets[id].name);
  cy.get(getAssetCell(id, "blocked")).contains(
    assets[id].blocked ? "Blocked" : "Active"
  );
  cy.get(getAssetCell(id, "serial"));
  cy.get(getAssetCell(id, "assignedTo"));
  cy.get(getAssetCell(id, "notes"));
}

describe("Assets", () => {
  beforeEach(() => {
    cy.loadMockData();
    cy.visit("http://localhost:3000");
  });

  describe("View", () => {
    it("Display a table with the correct headers", () => {
      cy.get(assetsTable).contains("Name");
      cy.get(assetsTable).contains("Status");
      cy.get(assetsTable).contains("Serial");
      cy.get(assetsTable).contains("Assigned to");
      cy.get(assetsTable).contains("Notes");
    });

    it("Display a table with the content", () => {
      assetsIDs.forEach(checkRowById);
    });

    it("Display the total amount of assets", () => {
      cy.get(KPI).contains(assetsIDs.length);
      cy.get(KPI).contains("Total Assets");
    });
  });

  describe("Details view", () => {
    beforeEach(() => cy.get(getAssetRow(assetsIDs[0])).click());

    it("Display a table with asset history", () => {
      cy.get(recordsTable).contains("Date");
      cy.get(recordsTable).contains("Asset");
      cy.get(recordsTable).contains("Asset Serial");
      cy.get(recordsTable).contains("From");
      cy.get(recordsTable).contains("To");
      cy.get(recordsTable).contains("Notes");
    });

    it("You can enter and go back from details view", () => {
      cy.get(backButton).click();
      cy.get(assetsTable);
    });
  });

  describe("Add", () => {
    beforeEach(() => cy.get(assetsFormButton).click());

    it("There is a button to show form and is shown after click", () => {
      cy.get(assetsForm);
    });

    it("You can create an asset", () => {
      cy.get(getFormInput("name")("input")).type(asset.name);
      cy.get(getFormInput("notes")()).type(asset.notes);
      cy.get(getFormInput("serial")("input")).type(asset.serial);
      cy.get(getFormInput("assignedTo")("input")).type(holder + "{enter}");
      cy.get(assetsFormSubmit).click();

      cy.get("body").type("{esc}");

      const newAsset = cy.get(assetsTable).contains(asset.serial);
      newAsset.parent().contains(holder);
      cy.get(KPI).contains(assetsIDs.length + 1);
    });
  });

  describe("Edit", () => {
    beforeEach(() => {
      cy.get(getAssetRow(assetsIDs[1])).click();
      cy.get(assetsFormButton).click();
    });

    it("There is a button to show form and is shown after click", () => {
      cy.get(assetsForm);
    });

    it("Asset fields are prefilled with correct data", () => {
      const assetToEdit = assets[assetsIDs[1]];
      const holderName = holders[assetToEdit.assignedTo].name;

      cy.get(getFormInput("name")("input")).should("be", assetToEdit.name);
      cy.get(getFormInput("notes")()).should("be", assetToEdit.notes);
      cy.get(getFormInput("serial")("input")).should("be", assetToEdit.serial);
      cy.get(getFormInput("blocked")("input")).should(
        "be",
        assetToEdit.blocked
      );
      cy.get(getFormInput("assignedTo")("input")).should("be", holderName);
    });

    it("You can edit an asset", () => {
      cy.get(getFormInput("serial")("input"))
        .clear()
        .type(asset.serial);
      cy.get(getFormInput("assignedTo")("input"))
        .clear()
        .type(holder + "{enter}");
      cy.get(assetsFormSubmit).click();

      cy.get("body").type("{esc}");
      cy.get(backButton).click();

      const assetEdited = cy.get(assetsTable).contains(asset.serial);
      assetEdited.parent().contains(holder);
      cy.get(KPI).contains(assetsIDs.length);
    });
  });
});
