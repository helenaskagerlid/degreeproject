import { afterEach, describe, test, vi, expect } from "vitest";
import {
  getSavedCriticalThoughts,
  saveCriticalThoughts,
} from "../helpers/saveToLocalStorage";

const criticalThoughtsKey = "criticalThoughts";

describe("Ciritical thoughts component tests", () => {
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  afterEach(() => {
    localStorage.clear();
    setItemSpy.mockClear();
  });
  test("Should save the text to localstorage", () => {
    //assign
    const savedText = "Test";

    //act
    saveCriticalThoughts(savedText);

    //assert
    expect(setItemSpy).toHaveBeenCalledWith(
      criticalThoughtsKey,
      JSON.stringify(savedText)
    );

    //act
    getSavedCriticalThoughts();

    //assert
    expect(getItemSpy).toHaveBeenCalledWith(criticalThoughtsKey);
    expect(getSavedCriticalThoughts()).toStrictEqual(savedText);
  });
});
