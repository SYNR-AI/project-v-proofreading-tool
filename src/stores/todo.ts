import { create } from 'zustand';
import { apiConfig } from '@/plugins';

import {
  StoryVHandlerApi,
  ScanStoryResp,
  Story
} from '@/api'

const storyVHandlerApi = new StoryVHandlerApi(apiConfig)

type TodoState = {
  todos: Story[];
  fetchTodos: () => Promise<void>;
};

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  fetchTodos: async () => {

    const resp: ScanStoryResp = await storyVHandlerApi.storyVHandlerScanStory()


    set({ todos: resp.stories?.slice(0, 5) }); // 仅展示前5个
  },
}));

export default useTodoStore;