import axios from "axios";
import Tag from "../types/Tag";

export async function GetTagsFromAPI(url: string): Promise<Tag[]> {
  const response = await axios.get(url);
  return response.data.items.map((item: { count: number; name: string }) => ({
    name: item.name,
    count: item.count,
  }));
}
