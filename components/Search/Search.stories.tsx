import type { Meta, StoryObj } from "@storybook/react";
import Search from "./Search";
import { ChangeEvent } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Search",
  component: Search,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArg = {
  searchItems: {
    name: "search",
    placeholder: "Search...",
    disabled: false,
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    onClick: () => console.log("Search clicked"),
    recommendedKeyword: {
      title: "Recommended Keywords",
      words: ["apple", "banana", "cherry"],
    },
    recentSearches: {
      title: "Recent Searches",
      words: ["dog", "cat", "rabbit"],
    },
    keywordButton: {
      name: "Clear",
      onClick: () => console.log("Clear clicked"),
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArg,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=383-3486&m=dev`,
    },
  },
  render: ({ ...args }) => (
    <Search searchItems={args.searchItems}>
      <Search.KeywordButton />
      <Search.RecommendedKeyword />
      <Search.RecentSearches />
    </Search>
  ),
};

export const WithoutKeywordButton: Story = {
  args: {
    ...defaultArg,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=383-3486&m=dev`,
    },
  },
  render: ({ ...args }) => (
    <Search searchItems={args.searchItems}>
      <Search.RecommendedKeyword />
      <Search.RecentSearches />
    </Search>
  ),
};

export const WithoutRecommendedKeyword: Story = {
  args: {
    ...defaultArg,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=383-3486&m=dev`,
    },
  },
  render: ({ ...args }) => (
    <Search searchItems={args.searchItems}>
      <Search.KeywordButton />
      <Search.RecentSearches />
    </Search>
  ),
};

export const WithoutRecentSearches: Story = {
  args: {
    ...defaultArg,
  },
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.NEXT_PUBLIC_FIGMA_URL}?node-id=383-3486&m=dev`,
    },
  },
  render: ({ ...args }) => (
    <Search searchItems={args.searchItems}>
      <Search.KeywordButton />
      <Search.RecommendedKeyword />
    </Search>
  ),
};
