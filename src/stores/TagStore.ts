import { makeAutoObservable, runInAction } from "mobx";
import Tag from "../types/Tag";
import { GetTagsFromAPI } from "../services/GetTagsFromAPI";
import { isAxiosError } from "axios";

class TagStore {
  tags: Tag[] = [];
  loading: boolean = false;
  error: string | null = null;
  isMoreTags: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTags = async (url: string) => {
    this.error = null;
    this.loading = true;

    try {
      const tags = await GetTagsFromAPI(url);

      runInAction(() => {
        this.tags = tags;
      });
    } catch (error) {
      let errorMessage = "";

      if (isAxiosError(error)) {
        errorMessage = `Error ${
          error.response ? error.response.data.error_id : error.code
        }: ${
          error.response ? error.response.data.error_message : error.message
        }`;
      } else {
        errorMessage = "Failed to fetch tags";
      }

      runInAction(() => {
        this.error = errorMessage;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const tagStore = new TagStore();
export default tagStore;
