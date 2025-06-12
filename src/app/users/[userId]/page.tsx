"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <div className="h-[90vh] flex flex-row justify-center items-center gap-2">
          <label>Error:</label>
          <p>Not signed in</p>
        </div>
      </>
    );
  }

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div>
        <Image src={user.imageUrl} alt="User Icon" width={400} height={400} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <label>User ID:</label>
          <p>{user.id}</p>
        </div>
        <div className="flex flex-row gap-2">
          <label>Username:</label>
          <p>{user.fullName}</p>
        </div>
        <div className="flex flex-row gap-2">
          <label>Email:</label>
          <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
