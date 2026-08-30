import React, { useState } from "react";
import { Phone, AlertCircle, MapPin, Clock, Plus, Trash2, Heart, Share2 } from "lucide-react";
import { SectionHeader, Card } from "../../components/ui";
import { C } from "../../theme";

export default function EmergencyContacts() {
  const [saved, setSaved] = useState({ 1: true, 4: true });
  const [newContact, setNewContact] = useState({ name: "", phone: "", type: "" });

  const emergencyContacts = [
    { id: 1, name: "Police", phone: "100", type: "Emergency", address: "Jaipur Police Station", hours: "24/7", distance: "2 km", icon: "🚔" },
    { id: 2, name: "Ambulance", phone: "102", type: "Emergency", address: "SMS Hospital, Jaipur", hours: "24/7", distance: "1.5 km", icon: "🚑" },
    { id: 3, name: "Fire Department", phone: "101", type: "Emergency", address: "Fire Station, Jaipur", hours: "24/7", distance: "3 km", icon: "🚒" },
    { id: 4, name: "Tourist Police Helpline", phone: "+91-1414-2200525", type: "Tourist Support", address: "Central Police Station", hours: "24/7", distance: "2.5 km", icon: "👮" },
    { id: 5, name: "Embassy Hotline (India)", phone: "+91-11-2419-8162", type: "Embassy", address: "Indian Embassy", hours: "9 AM - 5 PM", distance: "N/A", icon: "🏛️" },
    { id: 6, name: "Tourist Medical Centre", phone: "+91-141-256-2000", type: "Medical", address: "Sawai Man Singh Hospital", hours: "24/7", distance: "2 km", icon: "⚕️" },
  ];

  const toggleSave = (id) => {
    setSaved({ ...saved, [id]: !saved[id] });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.type) {
      // Contact would be added here
      setNewContact({ name: "", phone: "", type: "" });
      alert("Contact added successfully!");
    }
  };

  return (
    <div>
      <SectionHeader eyebrow="Safety" title="Emergency Contacts" />

      <Card className="mb-5" style={{ background: C.red + "11", borderColor: C.red }}>
        <div className="flex gap-3">
          <AlertCircle size={20} style={{ color: C.red, flexShrink: 0 }} />
          <div>
            <div className="font-medium text-[13px]" style={{ color: C.red }}>Emergency Alert</div>
            <div className="text-[12px] mt-1" style={{ color: C.muted }}>
              In case of emergency, always call the appropriate emergency number first, then inform your accommodation provider.
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Add Custom Contact</div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Contact name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            className="w-full rounded-lg border px-3 py-2 text-[13px]"
            style={{ borderColor: C.border, background: C.bg, color: C.text }}
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            className="w-full rounded-lg border px-3 py-2 text-[13px]"
            style={{ borderColor: C.border, background: C.bg, color: C.text }}
          />
          <input
            type="text"
            placeholder="Type (e.g., Doctor, Airline)"
            value={newContact.type}
            onChange={(e) => setNewContact({ ...newContact, type: e.target.value })}
            className="w-full rounded-lg border px-3 py-2 text-[13px]"
            style={{ borderColor: C.border, background: C.bg, color: C.text }}
          />
          <button
            onClick={handleAddContact}
            className="flex items-center gap-2 w-full justify-center rounded-lg px-3 py-2 text-[13px] font-medium text-white"
            style={{ background: C.green }}
          >
            <Plus size={14} /> Add Contact
          </button>
        </div>
      </Card>

      <div>
        <div className="mb-3 text-[14px] font-medium" style={{ color: C.text }}>Emergency Services</div>
        <div className="grid gap-3">
          {emergencyContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: C.blue + "22" }}>
                  <span className="text-3xl">{contact.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[14px] font-medium" style={{ color: C.text }}>{contact.name}</div>
                    <span className="rounded text-[10px] px-2 py-0.5 font-medium" style={{ background: C.blue + "22", color: C.blue }}>
                      {contact.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[12px]" style={{ color: C.muted }}>
                      <Phone size={12} />
                      <a href={`tel:${contact.phone}`} className="hover:underline font-medium" style={{ color: C.blue }}>
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[12px]" style={{ color: C.muted }}>
                      <MapPin size={12} /> {contact.address}
                    </div>
                    <div className="flex items-center gap-2 text-[12px]" style={{ color: C.muted }}>
                      <Clock size={12} /> {contact.hours}
                    </div>
                  </div>
                  {contact.distance !== "N/A" && (
                    <div className="mt-2 text-[11px] font-medium px-2 py-1 rounded inline-block" style={{ background: C.bg, color: C.text }}>
                      📍 {contact.distance} away
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 ml-3 flex-shrink-0">
                  <button
                    onClick={() => toggleSave(contact.id)}
                    style={{ color: saved[contact.id] ? C.red : C.muted }}
                    className="transition-all"
                  >
                    <Heart size={18} fill={saved[contact.id] ? "currentColor" : "none"} />
                  </button>
                  <button
                    onClick={() => {
                      const message = `Emergency Contact:\n${contact.name}\n${contact.phone}\n${contact.address}`;
                      navigator.clipboard.writeText(message);
                      alert("Contact details copied!");
                    }}
                    style={{ color: C.muted }}
                    className="hover:text-blue-500"
                  >
                    <Share2 size={16} />
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
