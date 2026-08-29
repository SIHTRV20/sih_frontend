import React from "react";
import Badge from "./Badge";

const MAP = {
  Published: "green", Active: "green", Accepted: "green", Available: "green",
  Pending: "amber", "In review": "amber", "Low stock": "amber",
  Flagged: "red", Suspended: "red", Declined: "red", "Sold out": "red", Open: "red",
};

export default function StatusBadge({ status }) {
  return <Badge tone={MAP[status] || "neutral"}>{status}</Badge>;
}
