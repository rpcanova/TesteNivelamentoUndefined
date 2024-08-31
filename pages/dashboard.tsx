"use client"
import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Table from '@/components/Table';
import React, { useState } from 'react';
export default function Dashboard() {
  // State to manage the sidebar's visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Content Area */}
        
          <Cards />
          <Table />
        
      </div>
    </div>
  );
}