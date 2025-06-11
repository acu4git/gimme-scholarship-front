"use client";

import { useUser } from "@clerk/nextjs";

const UserPage = () => {
  const { user } = useUser();

  if (!user) {
    <div>Error: Not Signed in.</div>;
  }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div></div>
    </div>
  );
};

export default UserPage;
