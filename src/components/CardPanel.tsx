"use client";
import Card from "./Card";
import { useReducer } from "react";
import Link from "next/link";

export default function CardPanel() {
  let vanueMap = new Map<string, number>();
  vanueMap.set("The Bloom Pavilion", 0);
  vanueMap.set("Spark Space", 0);
  vanueMap.set("The Grand Table", 0);

  const compareReducer = (
    compareList: Map<string, number>,
    action: { type: string; venueName: string; star: number }
  ) => {
    switch (action.type) {
      case "add": {
        return new Map(compareList.set(action.venueName, action.star));
      }
      case "remove": {
        compareList.delete(action.venueName);
        return new Map(compareList);
      }
      default:
        return compareList;
    }
  };

  const [compareList, dispatchCompare] = useReducer(compareReducer, vanueMap);

  const mockVenueRepo = [
    { vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
    { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
    { vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg" },
  ];

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {mockVenueRepo.map((venue) => (
          <Link href={`/venue/${venue.vid}`}>
          <Card
            key={venue.vid}
            venueName={venue.name}
            imgSrc={venue.image}
            onCompare={(venueName: string, star: number) =>
              dispatchCompare({ type: "add", venueName: venueName, star: star })
            }
          />
          </Link>
          
        ))}
      </div>
      <div className="ms-3">
        <div className="w-full text-2xl">Venue List: {compareList.size}</div>
        {Array.from(compareList).map(([venueName, star]) => (
          <div
            key={venueName}
            data-testid={venueName}
            onClick={() =>
              dispatchCompare({
                type: "remove",
                venueName: venueName,
                star: star,
              })
            }
          >
            {venueName} : {star}
          </div>
        ))}
      </div>
    </div>
  );
}
