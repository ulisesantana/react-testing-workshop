describe("Assets", () => {
  beforeEach(() => cy.loadAppAndMockData());

  describe("View", () => {
    it("Displays the assets", () => {
      cy.get('[data-testid="messageText"]').type("New message");

      cy.get('[data-testid="sendButton"]').click();

      cy.get('[data-testid="messageText"]').should("have.value", "");
    });
  });

  describe("Add", () => {
    it("Displays the assets", () => {
      cy.get('[data-testid="messageText"]').type("New message");

      cy.get('[data-testid="sendButton"]').click();

      cy.get('[data-testid="messageText"]').should("have.value", "");
    });
  });

  describe("Edit", () => {
    it("Displays the assets", () => {
      cy.get('[data-testid="messageText"]').type("New message");

      cy.get('[data-testid="sendButton"]').click();

      cy.get('[data-testid="messageText"]').should("have.value", "");
    });
  });
});
