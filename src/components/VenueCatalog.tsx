import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venueJsonReady = await venuesJson;
  return (
    <>
      <div className="text-center text-xl">
        Explore {venueJsonReady.count} fabulous venues in our catalog
      </div>
      <div className="m-5 flex flex-row content-around justify-around flex-wrap p-2.5">
        {venueJsonReady.data.map((venue: VenueItem) => (
          <Link key={venue.id} href={`/venue/${venue.id}`}>
            <Card
              key={venue.id}
              venueName={venue.name}
              imgSrc={venue.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
