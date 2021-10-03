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
  type: TYPES.carouselWithSelection,
  size: SIZES["101_151"],
  title: "Add Your Shows",
  icon: "",
  key: KEYS.addYourShows,
};

const yourQewdDigest = {
  type: TYPES.qewdDigest,
  size: null,
  title: "Your Qewd Digest",
  icon: "",
  key: KEYS.yourQewdDigest,
};

const yourNewEpisodes = {
  type: TYPES.carousel,
  size: SIZES["320_186"],
  title: "Your New Episodes",
  icon: "",
  key: KEYS.yourNewEpisodes,
};

const whatYourFriends = {
  type: TYPES.carouselWithEmoticons,
  size: SIZES["210_118"],
  title: "What Your Friends Are Watching",
  icon: "",
  key: KEYS.whatYourFriends,
};
const zipCode = {
  type: TYPES.zip,
  cardType: null,
  title: "Where are you at",
  icon: "",
  subtitle: "Your location will help us show you what's popular in your area.",
  key: KEYS.zipCode,
};
const awardsWinnigSeason = {
  type: TYPES.carousel,
  size: SIZES["320_186"],
  title: "2020 Award-Winning Season",
  icon: "",
  key: KEYS.awardsWinnigSeason,
};

const topDocumentarySeries = {
  type: TYPES.carousel,
  size: SIZES["101_151"],
  title: "Top Documentary Series",
  icon: "",
  key: KEYS.topDocumentarySeries,
};

const youtubeConnect = {
  type: TYPES.youtube,
  size: null,
  title: "Supercharge your Qewd",
  icon: "",
  subtitle:
    "Connect YouTube account and enjoy all your video content in one place.",
  key: KEYS.youtubeConnect,
};

const popularAroundYou = {
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "People Around You",
  icon: "",
  key: KEYS.popularAroundYou,
};

const bestYouTubePicks = {
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "Best YouTube Picks for You",
  icon: "",
  key: KEYS.bestYouTubePicks,
};

const hiddenGems = {
  type: TYPES.carousel,
  size: SIZES["210_118"],
  title: "Hidden Gems for you",
  icon: "",
  key: KEYS.hiddenGems,
};

const latestReleases = {
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
