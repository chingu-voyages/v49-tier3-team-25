import React from "react";

export default function UserProfile() {
  return (
    <div>
      <div className="flex justify-between">
        <div>{/* breadcrumb component */}</div>
        <div>
          <span>welcome user</span>
        </div>
      </div>
      {/* grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* menu */}
        <div className="col-span-1 bg-yellow-400">menu</div>
        {/* profile/ wishlist/ order history/ order detail component */}

        <div className="col-span-2 bg-blue-300">
          profile/ wishlist/ order history/ order detail component
        </div>
      </div>
    </div>
  );
}
