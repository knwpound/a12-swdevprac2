import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { Suspense } from "react";
export default function Venue() {
  const venues = getVenues();
  return (
    <main>
      <Suspense fallback={<p>Event Loading...</p>}>
        <VenueCatalog venuesJson={venues} />
      </Suspense>
    </main>
  );
}
