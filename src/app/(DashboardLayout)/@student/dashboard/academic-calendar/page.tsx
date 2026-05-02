"use client";
import React, { useState } from "react";
import { Calendar as CalendarIcon, Bell, Search } from "lucide-react";
import { academicEvents } from "@/actions/studentsApi/AcademicCalendarApi";

const AcademicCalendarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredEvents = academicEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter = filterType === "All" || event.type === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Academic Calendar
        </h1>
        <p className="text-gray-500 mt-1">
          Check all important dates and upcoming events.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto">
          {["All", "Academic", "Exam", "Holiday"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                filterType === type
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="grid gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
            >
              {/* Type Badge */}
              <div
                className={`flex items-center justify-center h-14 w-14 rounded-lg shrink-0 transition-transform group-hover:scale-105 ${event.color}`}
              >
                <span className="text-[10px] font-bold uppercase text-center">
                  {event.type}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <CalendarIcon size={14} />
                  {event.date}
                </p>
              </div>

              {/* Icon */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                <Bell
                  size={18}
                  className="text-zinc-500 group-hover:text-blue-500"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
