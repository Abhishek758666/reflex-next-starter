import UITable from "@/components/table";
import React from "react";

const page = () => {
  return (
    <div style={{ height: "120vh" }}>
      <UITable
        rawData={[
          {
            Hello: { value: "lalla" },
          },
        ]}
        headings={[
          {
            display: "Hello",
            name: "Hello",
          },
        ]}
      />
    </div>
  );
};

export default page;
