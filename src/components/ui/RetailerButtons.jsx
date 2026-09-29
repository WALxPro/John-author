import Button from "./Button";
import { LINKS, RETAILERS } from "@/config/links";

export default function RetailerButtons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-stagger>
      {RETAILERS.map(({ key, label }) => {
        const isAmazon = key === "amazon";
        return (
          <Button
            key={key}
            href={LINKS.retailers[key]}
            variant={isAmazon ? "primary" : "ghost"}
            className={`w-full justify-center ${isAmazon ? "sm:col-span-2" : ""}`}
          >
            {isAmazon ? "Buy on Amazon" : label}
          </Button>
        );
      })}
    </div>
  );
}
