import { describe, test, vi, expect, afterEach } from "vitest";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../helpers/saveToLocalStorage";

describe("Test for CriticNameComponent", () => {
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  afterEach(() => {
    localStorage.clear();
    setItemSpy.mockClear();
  });
  test("Should save the name to local storage", () => {
    //assign
    const innerCriticName = "Göran";
    const key = "innerCriticName";

    //act
    saveToLocalStorage(key, innerCriticName);

    //assert
    expect(setItemSpy).toHaveBeenCalledWith(
      key,
      JSON.stringify(innerCriticName)
    );

    //act
    getFromLocalStorage(key);

    //assert
    expect(getItemSpy).toHaveBeenCalledWith(key);
    expect(getFromLocalStorage(key)).toStrictEqual(innerCriticName);
  });
});
