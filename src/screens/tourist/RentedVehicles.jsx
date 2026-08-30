import React, { useState } from "react";
import { Calendar, MapPin, Users, Gauge, Heart, ChevronRight } from "lucide-react";
import { SectionHeader, Card } from "../../components/ui";
import { C } from "../../theme";

export default function RentedVehicles() {
  const [saved, setSaved] = useState({});

  const vehicles = [
    { id: 1, name: "Toyota Fortuner", type: "SUV", pricePerDay: "₹2500", capacity: "7", transmission: "Automatic", location: "Jaipur Downtown", rating: 4.8, image: "🚙" },
    { id: 2, name: "Maruti Swift", type: "Hatchback", pricePerDay: "₹800", capacity: "5", transmission: "Manual", location: "Jaipur Downtown", rating: 4.5, image: "🚗" },
    { id: 3, name: "Mahindra XUV500", type: "SUV", pricePerDay: "₹2000", capacity: "7", transmission: "Automatic", location: "Railway Station", rating: 4.7, image: "🚙" },
    { id: 4, name: "Hyundai i20", type: "Sedan", pricePerDay: "₹1000", capacity: "5", transmission: "Automatic", location: "City Center", rating: 4.6, image: "🚗" },
  ];

  const rentals = [
    { id: 1, vehicle: "Toyota Fortuner", startDate: "2026-08-25", endDate: "2026-08-28", status: "Active", totalPrice: "₹7500" },
    { id: 2, vehicle: "Maruti Swift", startDate: "2026-08-20", endDate: "2026-08-22", status: "Completed", totalPrice: "₹2400" },
  ];

  const toggleSave = (id) => {
    setSaved({ ...saved, [id]: !saved[id] });
  };

  return (
    <div>
      <SectionHeader eyebrow="Transportation" title="Rented Vehicles" />

      <div className="mb-6">
        <div className="mb-3 text-[14px] font-medium" style={{ color: C.text }}>Available Vehicles</div>
        <div className="grid gap-3">
          {vehicles.map((v) => (
            <Card key={v.id} className="cursor-pointer hover:opacity-80">
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: C.blue + "22" }}>
                  <span className="text-4xl">{v.image}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-medium" style={{ color: C.text }}>{v.name}</div>
                  <div className="mt-1 flex items-center gap-4 text-[12px]" style={{ color: C.muted }}>
                    <span className="flex items-center gap-1"><Gauge size={12} />{v.transmission}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{v.capacity} seats</span>
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">{v.type}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-[13px] font-medium" style={{ color: C.text }}>{v.pricePerDay}/day</div>
                      <div className="flex items-center gap-1 text-[11px]" style={{ color: C.muted }}>
                        <MapPin size={10} /> {v.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[13px] font-medium" style={{ color: C.text }}>⭐ {v.rating}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSave(v.id)}
                  className="ml-3 transition-all flex-shrink-0"
                  style={{ color: saved[v.id] ? C.red : C.muted }}
                >
                  <Heart size={18} fill={saved[v.id] ? "currentColor" : "none"} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 text-[14px] font-medium" style={{ color: C.text }}>My Rentals</div>
        <div className="grid gap-3">
          {rentals.map((r) => (
            <Card key={r.id}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-[14px] font-medium" style={{ color: C.text }}>{r.vehicle}</div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-[12px]" style={{ color: C.muted }}>
                      <Calendar size={12} /> {r.startDate} to {r.endDate}
                    </div>
                    <div className="text-[12px]" style={{ color: C.muted }}>
                      Status: <span className={r.status === "Active" ? "text-green-600" : "text-gray-500"}>{r.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-medium" style={{ color: C.text }}>{r.totalPrice}</div>
                  <button className="mt-2 text-[12px] text-blue-500 hover:text-blue-600 flex items-center gap-1">
                    View <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
