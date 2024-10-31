import { ReactSvg } from "./ReactSvg";
import { Button } from "./Button";
import { ShoppingBasket, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg
          size={32}
          className="me-0 flex origin-center text-sm transition-all ease-in-out"
        />
        <span>ReactJourney</span>
      </h1>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost">
          <ShoppingBasket size={24} />
        </Button>
        <Button variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
