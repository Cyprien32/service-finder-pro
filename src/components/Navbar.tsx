import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import logo from "@/assets/logobantuhire.png";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="BantuHire" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Trouver un prestataire
          </Link>
          <Link to="/become-provider" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Devenir prestataire
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Mon tableau de bord
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Comment ça marche
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Connexion
          </Button>
          <Button size="sm" className="hidden md:flex">
            Inscription
          </Button>
          <Link to="/search">
            <Button size="icon" variant="outline" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
