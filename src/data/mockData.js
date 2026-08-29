export const PLACES = [
  { id: 1, name: "Amber Fort", city: "Jaipur", category: "Heritage", rating: 4.7, tag: "Fort" },
  { id: 2, name: "Baga Beach", city: "Goa", category: "Beach", rating: 4.4, tag: "Beach" },
  { id: 3, name: "Lake Pichola", city: "Udaipur", category: "Lake", rating: 4.8, tag: "Lake" },
  { id: 4, name: "Solang Valley", city: "Manali", category: "Adventure", rating: 4.6, tag: "Valley" },
  { id: 5, name: "Triund Trek", city: "Dharamshala", category: "Trek", rating: 4.9, tag: "Trek" },
  { id: 6, name: "Virupaksha Temple", city: "Hampi", category: "Heritage", rating: 4.5, tag: "Temple" },
  { id: 7, name: "Alleppey Backwaters", city: "Kerala", category: "Backwater", rating: 4.8, tag: "Houseboat" },
  { id: 8, name: "Pangong Lake", city: "Ladakh", category: "Lake", rating: 4.9, tag: "Lake" },
];

export const VIDEOS = [
  { id: 1, title: "Sunrise over Amber Fort", creator: "@rhea.travels", place: "Amber Fort, Jaipur", views: "128K", likes: "9.4K", duration: "0:42", status: "Published" },
  { id: 2, title: "Goa's hidden beach shacks", creator: "@karan.explores", place: "Baga Beach, Goa", views: "94K", likes: "6.1K", duration: "1:05", status: "Published" },
  { id: 3, title: "A houseboat morning in Alleppey", creator: "@meera.wanders", place: "Alleppey Backwaters", views: "212K", likes: "18K", duration: "0:58", status: "Published" },
  { id: 4, title: "Triund at golden hour", creator: "@rhea.travels", place: "Triund Trek", views: "76K", likes: "5.2K", duration: "1:20", status: "Pending" },
  { id: 5, title: "Street food crawl, Jaipur", creator: "@karan.explores", place: "Johari Bazaar, Jaipur", views: "51K", likes: "3.8K", duration: "2:14", status: "Flagged" },
];

export const OFFERS = [
  { id: 1, title: "20% off royal thali", business: "Chokhi Dhani, Jaipur", discount: "20%", expiry: "12 Sep 2026", category: "Food" },
  { id: 2, title: "Free kayak hour w/ stay", business: "Backwater Homestay, Alleppey", discount: "1 hr free", expiry: "30 Sep 2026", category: "Stay" },
  { id: 3, title: "15% off adventure package", business: "Solang Adventures, Manali", discount: "15%", expiry: "05 Oct 2026", category: "Adventure" },
  { id: 4, title: "Buy 1 Get 1 pottery workshop", business: "Hampi Craft Collective", discount: "BOGO", expiry: "18 Sep 2026", category: "Experience" },
];

export const SAVED = PLACES.slice(0, 4);

export const PRODUCTS = [
  { id: 1, name: "Sunset Boat Ride", price: "₹1,200", stock: "Available", category: "Experience" },
  { id: 2, name: "Guided Fort Tour (2hr)", price: "₹800", stock: "Available", category: "Tour" },
  { id: 3, name: "Handmade Blue Pottery Set", price: "₹2,400", stock: "Low stock", category: "Souvenir" },
  { id: 4, name: "Camel Safari (Sunset)", price: "₹1,500", stock: "Sold out", category: "Experience" },
];

export const CAMPAIGN_INVITES = [
  { id: 1, influencer: "@rhea.travels", followers: "142K", offer: "Free 2N stay for a reel", status: "Pending" },
  { id: 2, influencer: "@karan.explores", followers: "88K", offer: "₹5,000 + free tour", status: "Accepted" },
  { id: 3, influencer: "@meera.wanders", followers: "210K", offer: "Free experience + 10% commission", status: "Declined" },
];

export const USERS = [
  { id: 1, name: "Rhea Kapoor", email: "rhea@mail.com", role: "Influencer", status: "Active", joined: "Jan 2026" },
  { id: 2, name: "Karan Mehta", email: "karan@mail.com", role: "Influencer", status: "Active", joined: "Feb 2026" },
  { id: 3, name: "Chokhi Dhani", email: "biz@chokhidhani.com", role: "Shopkeeper", status: "Active", joined: "Mar 2026" },
  { id: 4, name: "Aditi Sharma", email: "aditi@mail.com", role: "Tourist", status: "Suspended", joined: "Apr 2026" },
  { id: 5, name: "Backwater Homestay", email: "stay@alleppey.com", role: "Shopkeeper", status: "Pending", joined: "Aug 2026" },
];

export const INFLUENCER_APPS = [
  { id: 1, name: "Ananya Rao", handle: "@ananya.roams", followers: "64K", platform: "Instagram", submitted: "2 days ago" },
  { id: 2, name: "Vikram Sen", handle: "@vikram.trails", followers: "112K", platform: "YouTube", submitted: "5 days ago" },
];

export const BUSINESS_APPS = [
  { id: 1, name: "Ladakh Base Camp", category: "Adventure", city: "Leh", submitted: "1 day ago" },
  { id: 2, name: "Munnar Tea Trails", category: "Experience", city: "Munnar", submitted: "3 days ago" },
];

export const COMPLAINTS = [
  { id: 1, subject: "Offer not honored at venue", from: "Aditi Sharma", severity: "High", status: "Open" },
  { id: 2, subject: "Video shows outdated pricing", from: "Rohit Verma", severity: "Low", status: "In review" },
  { id: 3, subject: "Fake review suspected", from: "Backwater Homestay", severity: "Medium", status: "Open" },
];

export const GROWTH = [
  { m: "Mar", users: 1200, videos: 340 },
  { m: "Apr", users: 1900, videos: 480 },
  { m: "May", users: 2600, videos: 610 },
  { m: "Jun", users: 3100, videos: 700 },
  { m: "Jul", users: 4200, videos: 890 },
  { m: "Aug", users: 5400, videos: 1050 },
];

export const VIEWS_TREND = [
  { d: "Mon", v: 3200 }, { d: "Tue", v: 4100 }, { d: "Wed", v: 3800 },
  { d: "Thu", v: 5200 }, { d: "Fri", v: 6100 }, { d: "Sat", v: 8400 }, { d: "Sun", v: 7300 },
];
