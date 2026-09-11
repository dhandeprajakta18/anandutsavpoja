import fs from "fs";
import path from "path";

import SocialActivitiesClient from "./SocialActivitiesClient";

// Read the CSR folder on every server render
export const dynamic = "force-dynamic";

function getCsrImages() {
  const csrDirectory = path.join(
    process.cwd(),
    "public",
    "csr"
  );

  try {
    const files = fs.readdirSync(csrDirectory);

    return files
      .filter((file) => {
        return /\.(jpg|jpeg|png|webp|avif)$/i.test(file);
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
      .map((file) => `/csr/${file}`);
  } catch (error) {
    console.error("Unable to read CSR images:", error);

    return [];
  }
}

export default function SocialActivitiesPage() {
  const activities = getCsrImages();

  return (
    <SocialActivitiesClient
      activities={activities}
    />
  );
}