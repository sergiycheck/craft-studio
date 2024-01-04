export const image_600x600 = "https://picsum.photos/seed/picsum/600/600";

export const projects = [
  {
    id: "1",
    project: "CryptoSwap Hub",
    domain: "Crypto",
    features:
      "Easily trade, swap, bridge tokens, and fetch NFTs with CryptoSwap Hub. Manage your crypto assets securely using advanced features in a user-friendly interface.",
    challenges_overcome:
      "Implementing efficient token bridging algorithms, ensuring secure and seamless trade and swap functionality, and integrating NFT fetching capabilities.",
    images: [image_600x600, image_600x600],
  },
  {
    id: "2",
    project: "FinTechPro Analytics",
    domain: "Fintech",
    features:
      "Gain deep insights into your financial portfolio with FinTechPro Analytics. Utilize advanced analytics tools for comprehensive financial planning and investment strategies.",
    challenges_overcome:
      "Developing sophisticated algorithms for accurate financial predictions and overcoming data integration challenges to provide real-time financial data.",
    images: [image_600x600, image_600x600],
  },
  {
    id: "3",
    project: "StreamSync Live",
    domain: "Streaming Platform",
    features:
      "Experience seamless streaming with StreamSync Live, offering low-latency and high-definition video. Collaborate in real-time with viewers through interactive features.",
    challenges_overcome:
      "Overcoming bandwidth limitations for smooth streaming and integrating interactive features without compromising on video quality.",
    images: [image_600x600, image_600x600],
  },
  {
    id: "4",
    project: "MarketFlow Hub",
    domain: "Marketplace",
    features:
      "Explore a dynamic marketplace experience with MarketFlow Hub. Enjoy personalized recommendations, secure transactions, and a user-friendly interface.",
    challenges_overcome:
      "Developing an advanced recommendation algorithm and implementing a secure payment system to ensure trust and reliability in transactions.",
    images: [image_600x600, image_600x600],
  },
  {
    id: "5",
    project: "ConnectHub Network",
    domain: "Social Network",
    features:
      "Foster meaningful connections with ConnectHub Network's intuitive social networking features. Create and join communities, share content, and engage in vibrant discussions.",
    challenges_overcome:
      "Implementing effective content moderation to ensure a safe and inclusive environment and optimizing server infrastructure to handle large user communities.",
    images: [image_600x600, image_600x600],
  },
  {
    id: "6",
    project: "GreenTrade EcoMarket",
    domain: "Marketplace",
    features:
      "Shop sustainably with GreenTrade EcoMarket, offering a curated selection of eco-friendly products and services.",
    challenges_overcome:
      "Establishing partnerships with environmentally conscious suppliers, implementing a transparent supply chain, and creating a user-friendly platform for discovering and purchasing eco-friendly products.",
    images: [image_600x600, image_600x600],
  },
];

export type ProjectItem = {
  id: string;
  project: string;
  domain: string;
  features: string;
  challenges_overcome: string;
  images: string[];
};
