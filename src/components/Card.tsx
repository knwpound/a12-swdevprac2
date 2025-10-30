import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import { Rating } from "@mui/material";

export default function Card({
  venueName,
  imgSrc,
  onCompare,
}: {
  venueName: string;
  imgSrc: string;
  onCompare?: Function;
}) {
  return (
    <InteractiveCard contentName="">
      <div className="w-full h-[70%] relative">
        <Image
          src={imgSrc}
          alt="Banner pic"
          fill={true}
          priority
          className="object-cover rounded-lg"
        />
      </div>
      <div style={{ marginTop: "8px" }}>
        <h2 className="text-xl font-medium">{venueName}</h2>
        <p className="text-sm font-sans">Bankok, Thailand</p>
        {onCompare ? (
          <div onClick={(e) => e.stopPropagation()}>
            <Rating
              className="mt-2"
              id={venueName + " Rating"}
              name={venueName + " Rating"}
              data-testid={venueName + " Rating"}
              defaultValue={0}
              size="small"
              onChange={(e, newValue) => {
                if (newValue !== null) {
                  onCompare(venueName, newValue);
                }
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </InteractiveCard>
  );
}
