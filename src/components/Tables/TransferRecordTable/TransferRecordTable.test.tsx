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

    it("should show related data", () => {});

    it("should filter out data", () => {});

    it("should show all data if the search input is empty", () => {});
  });
});
