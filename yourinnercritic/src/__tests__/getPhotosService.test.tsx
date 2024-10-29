import { describe, expect, test, afterEach, vi } from "vitest";
import axios from "axios";
import { getPhotos } from "../service/getPhotosService";
import { IHits } from "../models/IPixabayResponse";
import { photosMock } from "./__mocks__/photosMock";

describe("API tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should handle successful get from API", async () => {
    //assign
    vi.spyOn(axios, "get").mockResolvedValue(photosMock);

    const searchText = "nature";

    //act
    const photos: IHits[] = await getPhotos(searchText);

    //assert
    expect(photos).toBe(photosMock.data.hits);
    expect(photos[0].id).toBe(1);
  });

  test("should return an empty response if the searchtext doesn't match any photos", async () => {
    // assign
    const searchText = "Hfmsvelv";

    const mockedAPIResponse = {
      data: {
        Response: "False",
        Error: "No photos found",
      },
    };

    vi.spyOn(axios, "get").mockResolvedValue(mockedAPIResponse);

    //act
    await getPhotos(searchText);

    //assert
    expect(mockedAPIResponse.data.Response).toBe("False");
    expect(mockedAPIResponse.data.Error).toBe("No photos found");
  });

  test("should handle a not successful get to API", async () => {
    //assign
    const errorMessage = {
      status: "error",
      message: "Bad request",
    };

    //act
    vi.spyOn(axios, "get").mockRejectedValue(errorMessage);

    //assert
    await expect(getPhotos("nature")).rejects.toThrow("Bad request");
  });
});
