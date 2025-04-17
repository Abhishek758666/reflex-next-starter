"use client";
import React, { ReactNode, useState } from "react";

interface TabProps {
  label: ReactNode;
  disabled?: boolean;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const UITab: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <button
            key={index}
            disabled={tab.disabled ?? false}
            className={
              index === activeTab
                ? "tabActive"
                : tab.disabled
                ? "tabDisable"
                : ""
            }
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content ?? "no data found"}
      </div>
    </div>
  );
};

export default UITab;
