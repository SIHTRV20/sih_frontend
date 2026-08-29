import * as Tourist from "./tourist";
import * as Influencer from "./influencer";
import * as Shopkeeper from "./shopkeeper";
import * as Admin from "./admin";

export const SCREENS = {
  tourist: {
    home: Tourist.Home,
    location: Tourist.Location,
    explore: Tourist.Explore,
    videoDetails: Tourist.VideoDetails,
    placeDetails: Tourist.PlaceDetails,
    offers: Tourist.Offers,
    saved: Tourist.Saved,
    profile: Tourist.Profile,
  },
  influencer: {
    dashboard: Influencer.Dashboard,
    upload: Influencer.Upload,
    myVideos: Influencer.MyVideos,
    analytics: Influencer.Analytics,
    collabs: Influencer.Collabs,
  },
  shopkeeper: {
    dashboard: Shopkeeper.Dashboard,
    businessProfile: Shopkeeper.BusinessProfile,
    products: Shopkeeper.Products,
    offers: Shopkeeper.Offers,
    campaigns: Shopkeeper.Campaigns,
    analytics: Shopkeeper.Analytics,
  },
  admin: {
    dashboard: Admin.Dashboard,
    users: Admin.Users,
    influencerVerification: Admin.InfluencerVerification,
    businessVerification: Admin.BusinessVerification,
    moderation: Admin.Moderation,
    reports: Admin.Reports,
    content: Admin.Content,
    platformAnalytics: Admin.PlatformAnalytics,
  },
};
