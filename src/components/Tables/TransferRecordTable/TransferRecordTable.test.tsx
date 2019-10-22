import React from "react";
import { mockStore } from "../../../store/data";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { TransferRecordTable } from ".";
import "@testing-library/jest-dom/extend-expect";

describe("<TransferRecordTable />", () => {
  let t: any;

  afterEach(cleanup);

  describe("User can search through transfer records", () => {
    beforeEach(() => {
      t = render(<TransferRecordTable {...mockStore} />);
      fireEvent.change(t.getByPlaceholderText(/search$/i), {
        target: { value: "margaret" }
      });
    });

    it("should show related data", () => {
      expect(t.getAllByTestId("date").length).toBe(2); // Header and the only 
      expect(t.getByTestId("records-table-body")).toHaveTextContent(
        /margaret/i
      );
    });

    it("should filter out data", () => {
      expect(t.getByTestId("records-table-body")).not.toHaveTextContent(
        /bill/i
      );
    });

    it("should show all data if the search input is empty", () => {
      fireEvent.change(t.getByPlaceholderText(/search$/i), {
        target: { value: "" }
      });
      expect(t.getByTestId("records-table-body")).toHaveTextContent(/bill/i);
      expect(t.getAllByTestId("date").length).toBe(10);
    });
  });
});
