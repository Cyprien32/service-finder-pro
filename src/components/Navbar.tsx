import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import logo from "@/assets/logobantuhire.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="BantuHire" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.search')}
          </Link>
          <Link to="/become-provider" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.become_provider')}
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.dashboard')}
          </Link>
          <Link to="/my-missions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.my_missions')}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" className="hidden md:flex">
            {t('nav.login')}
          </Button>
          <Button size="sm" className="hidden md:flex">
            {t('nav.signup')}
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
