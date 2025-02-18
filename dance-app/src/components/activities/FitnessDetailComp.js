"use client";
import {
  getUserData,
  addThisUserToActivity,
  deleteThisUserFromThisActivity,
} from "@/lib/apilandrupdans";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FitnessDetailComp({ fitness, userActivityId }) {
  const [existedActivityForThisUser, setExistedActivityForThisUser] =
    useState(false);
  const [isMaxAgeLimit, setIsMaxAge] = useState(false);
  const myRole = Cookies.get("cookieRole");
  const myToken = Cookies.get("cookieToken");
  const userId = Cookies.get("cookieUserId");

  // Tilmeld kravSpecs
  async function handleAddLoggedInUserToThisActivity() {
    const thisUserData = await getUserData(userId);
    console.log("thisUserData: ", thisUserData); // to check if the activity is added against this user

    thisUserData.activities.forEach((activity) => {
      console.log("activity.id", activity.id);
      console.log("user activity Id", userActivityId);

      if (activity.id == userActivityId) {
        setExistedActivityForThisUser(true);
        return;
      }
    }); // ended forEach

    if (!existedActivityForThisUser) {
      const addedActivityToThisUser = await addThisUserToActivity(
        userId,
        userActivityId
      );
    }
  }

  async function handleDeleteUserFromThisActivity() {
    const userData = await deleteThisUserFromThisActivity(
      userId,
      userActivityId
    );
    console.log("userData: ", userData);
    const users = await getUserData(userId);
    console.log("user: ", users);
    setExistedActivityForThisUser(false);
  }
  return (
    <>
      <section>
        <div className="relative h-96 mb-4 w-[100vw]">
          <Image
            src={fitness.asset.url}
            layout="fill"
            objectFit="cover"
            priority
            alt={`fitness-${fitness.asset.url}`}
            className="absolute md:rounded-xl transform md:hover:scale-105 md:hover:rounded-xl md:duration-200"
          />
          {/* instructor user should not display tilmeld/forlad button */}
          {myToken === undefined || myRole === "instructor" ? (
            ""
          ) : !existedActivityForThisUser ? (
            <button
              onClick={handleAddLoggedInUserToThisActivity}
              className="absolute right-1/4 bottom-4 rounded-xl px-32 py-8 bg-mehroonish text-grayish font-ubuntu text-2xl"
            >
              Tilmeld
            </button>
          ) : existedActivityForThisUser ? (
            <button
              onClick={handleDeleteUserFromThisActivity}
              className="absolute right-1/4 bottom-4 rounded-xl px-32 py-8 bg-mehroonish text-grayish font-ubuntu text-2xl"
            >
              Forlad
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col p-12 text-white px-12 py-4 brightness-100">
          <h2 className="text-[24px]">{fitness.name}</h2>
          <p className="text-[18px]">
            {fitness.minAge}-<span>{fitness.maxAge} år</span>
          </p>
          <p className="text-[18px]">{fitness.description}</p>
        </div>
      </section>
    </>
  );
}
