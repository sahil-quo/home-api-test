const SIZES = {
  horizontalSmall: "horizontalSmall",
  horizontalMedium: "horizontalMedium",
  horizontalLarge: "horizontalLarge",
};
const TYPES = {
  carousel: "carousel",
  addYourShows: "addYourShows",
  whatYourFriends: "whatYourFriends",
  zip: "zipCode",
  youtube: "youtubeConnect",
  qewdDigest: "qewdDigest",
  awardsWinnigSeason: "awardsWinnigSeason",
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
  type: TYPES.addYourShows,
  title: "Add Your Shows",
  icon: "",
  key: KEYS.addYourShows,
};

const yourQewdDigest = {
  type: TYPES.qewdDigest,
  title: "Your Qewd Digest",
  icon: "",
  key: KEYS.yourQewdDigest,
};

const yourNewEpisodes = {
  type: TYPES.carousel,
  size: SIZES.horizontalLarge,
  title: "Your New Episodes",
  icon: "",
  key: KEYS.yourNewEpisodes,
};

const whatYourFriends = {
  type: TYPES.whatYourFriends,
  title: "What Your Friends Are Watching",
  icon: "",
  key: KEYS.whatYourFriends,
};
const zipCode = {
  type: TYPES.zip,
  title: "Where are you at",
  icon: "",
  subtitle: "Your location will help us show you what's popular in your area.",
  key: KEYS.zipCode,
};
const awardsWinnigSeason = {
  type: TYPES.awardsWinnigSeason,
  title: "2020 Award-Winning Season",
  icon: "",
  key: KEYS.awardsWinnigSeason,
};

const topDocumentarySeries = {
  type: TYPES.carousel,
  size: SIZES.horizontalSmall,
  title: "Top Documentary Series",
  icon: "",
  key: KEYS.topDocumentarySeries,
};

const youtubeConnect = {
  type: TYPES.youtube,
  title: "Supercharge your Qewd",
  icon: "",
  subtitle:
    "Connect YouTube account and enjoy all your video content in one place.",
  key: KEYS.youtubeConnect,
};

const popularAroundYou = {
  type: TYPES.carousel,
  size: SIZES.horizontalMedium,
  title: "People Around You",
  icon: "",
  key: KEYS.popularAroundYou,
};

const bestYouTubePicks = {
  type: TYPES.carousel,
  size: SIZES.horizontalMedium,
  title: "Best YouTube Picks for You",
  icon: "",
  key: KEYS.bestYouTubePicks,
};

const hiddenGems = {
  type: TYPES.carousel,
  size: SIZES.horizontalMedium,
  title: "Hidden Gems for you",
  icon: "",
  key: KEYS.hiddenGems,
};

const latestReleases = {
  type: TYPES.carousel,
  size: SIZES.horizontalMedium,
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
