import {
  Home, MapPin, Compass, Film, Landmark, Tag, Bookmark, User,
  LayoutDashboard, Upload, BarChart2, Handshake, Store, Package,
  Megaphone, PieChart, Users, CheckCircle2, Flag, FileText,
  AlertTriangle,
} from "lucide-react";

export const NAV = {
  tourist: [
    { id: "home", label: "Home / Video Feed", icon: Home },
    { id: "location", label: "Location Selection", icon: MapPin },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "videoDetails", label: "Video Details", icon: Film },
    { id: "placeDetails", label: "Place Details", icon: Landmark },
    { id: "offers", label: "Offers", icon: Tag },
    { id: "saved", label: "Saved Places", icon: Bookmark },
    { id: "profile", label: "Profile", icon: User },
  ],
  influencer: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "upload", label: "Upload Video", icon: Upload },
    { id: "myVideos", label: "My Videos", icon: Film },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "collabs", label: "Collaborations", icon: Handshake },
  ],
  shopkeeper: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "businessProfile", label: "Business Profile", icon: Store },
    { id: "products", label: "Products / Services", icon: Package },
    { id: "offers", label: "Offers", icon: Tag },
    { id: "campaigns", label: "Influencer Campaigns", icon: Megaphone },
    { id: "analytics", label: "Analytics", icon: PieChart },
  ],
  admin: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "User Management", icon: Users },
    { id: "influencerVerification", label: "Influencer Verification", icon: CheckCircle2 },
    { id: "businessVerification", label: "Business Verification", icon: Store },
    { id: "moderation", label: "Video Moderation", icon: Flag },
    { id: "reports", label: "Reports / Complaints", icon: AlertTriangle },
    { id: "content", label: "Content Management", icon: FileText },
    { id: "platformAnalytics", label: "Platform Analytics", icon: BarChart2 },
  ],
};
