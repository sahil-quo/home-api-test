const SIZES = {
  "50_50": "50*50",
  "240_359": "240*259",
  "210_118": "210*118",
  "101_151": "101*151",
  "320_186": "320*180",
};

const TYPES = {
  carousel: 0,
  carouselWithSelection: 1,
  carouselWithEmoticons: 2,
  carouselWithIcons: 3,
  zip: 4,
  youtube: 5,
  qewdDigest: 6,
};
const KEYS = {
  addYourShows: "addYourShows",
  yourQewdDigest: "yourQewdDigest",
  yourNewEpisodes: "yourNewEpisodes",
  whatYourFriends: "whatYourFriends",
  zipCode: "zipCode",
  awardsWinnigSeason: "awardsWinnigSeason",
  topDocumentarySeries: "topDocumentarySeries",
  youtubeConnect: "youtubeConnect",
  popularAroundYou: "popularAroundYou",
  bestYouTubePicks: "bestYouTubePicks",
  hiddenGems: "hiddenGems",
  latestReleases: "latestReleases",
};
const addYourShows = {
  id: 1,
  type: TYPES.carouselWithSelection,
  size: SIZES["101_151"],
  title: "Add Your Shows",
  icon: "",
  key: KEYS.addYourShows,
};

const yourQewdDigest = {
  id: 2,
  type: TYPES.qewdDigest,
  size: null,
  title: "Your Qewd Digest",
  icon: "",
  key: KEYS.yourQewdDigest,
};

const yourNewEpisodes = {
  id: 3,
  type: TYPES.carousel,
  size: SIZES["320_186"],
  title: "Your New Episodes",
  icon: "",
  key: KEYS.yourNewEpisodes,
};

const whatYourFriends = {
  id: 4,
  type: TYPES.carouselWithEmoticons,
  size: SIZES["210_118"],
  title: "What Your Friends Are Watching",
  icon: "",
  key: KEYS.whatYourFriends,
};
const zipCode = {
  id: 5,
  type: TYPES.zip,
  cardType: null,
  title: "Where are you at",
  icon: "",
  subtitle: "Your location will help us show you what's popular in your area.",
  key: KEYS.zipCode,
};
const awardsWinnigSeason = {
  id: 6,
  type: TYPES.carousel,
  size: SIZES["320_186"],
  title: "2020 Award-Winning Season",
  icon: "",
  key: KEYS.awardsWinnigSeason,
};

const topDocumentarySeries = {
  id: 7,
  type: TYPES.carousel,
  size: SIZES["101_151"],
  title: "Top Documentary Series",
  icon: "",
  key: KEYS.topDocumentarySeries,
};

const youtubeConnect = {
  id: 8,
  type: TYPES.youtube,
  size: null,
  title: "Supercharge your Qewd",
  icon: "",
  subtitle:
    "Connect YouTube account and enjoy all your video content in one place.",
  key: KEYS.youtubeConnect,
};

const popularAroundYou = {
  id: 9,
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "People Around You",
  icon: "",
  key: KEYS.popularAroundYou,
};

const bestYouTubePicks = {
  id: 10,
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "Best YouTube Picks for You",
  icon: "",
  key: KEYS.bestYouTubePicks,
};

const hiddenGems = {
  id: 11,
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "Hidden Gems for you",
  icon: "",
  key: KEYS.hiddenGems,
};

const latestReleases = {
  id: 12,
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "Latest Releases",
  icon: "",
  key: KEYS.latestReleases,
};

const pageContent = {
  1: [addYourShows, yourQewdDigest, yourNewEpisodes],
  2: [whatYourFriends, zipCode, awardsWinnigSeason],
  3: [topDocumentarySeries, youtubeConnect, popularAroundYou],
  4: [bestYouTubePicks, hiddenGems, latestReleases],
};

module.exports = {
  TYPES,
  KEYS,
  pageContent,
  SIZES,
  addYourShows,
  yourQewdDigest,
  yourNewEpisodes,
  whatYourFriends,
  zipCode,
  awardsWinnigSeason,
  topDocumentarySeries,
  youtubeConnect,
  popularAroundYou,
  bestYouTubePicks,
  hiddenGems,
  latestReleases,
};
