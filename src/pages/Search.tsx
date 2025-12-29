import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProviderCard } from "@/components/ProviderCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Search = () => {
  const { t } = useLanguage();
  const [searchService, setSearchService] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const allProviders = [
    {
      id: "1",
      name: "Kouame Mensah",
      title: "Plombier certifié",
      location: "Yaoundé, Centre",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
      skills: ["Dépannage", "Installation", "Rénovation"],
    },
    {
      id: "2",
      name: "Amina Njoya",
      title: "Coiffeuse professionnelle",
      location: "Douala, Littoral",
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&q=80",
      skills: ["Coupe", "Coloration", "Coiffure mariage"],
    },
    {
      id: "3",
      name: "Ebenezer Kamga",
      title: "Électricien agréé",
      location: "Yaoundé, Centre",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
      skills: ["Dépannage", "Installation", "Mise aux normes"],
    },
    {
      id: "4",
      name: "Grace Fouda",
      title: "Peintre décoratrice",
      location: "Douala, Littoral",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
      skills: ["Peinture intérieure", "Décoration", "Rénovation"],
    },
    {
      id: "5",
      name: "Ibrahim Nana",
      title: "Mécanicien automobile",
      location: "Yaoundé, Centre",
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&q=80",
      skills: ["Entretien", "Réparation", "Diagnostic"],
    },
    {
      id: "6",
      name: "Fatima Bella",
      title: "Aide ménagère",
      location: "Douala, Littoral",
      rating: 5.0,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=80",
      skills: ["Ménage", "Repassage", "Organisation"],
    },
  ];

  const filteredProviders = useMemo(() => {
    return allProviders.filter((provider) => {
      const matchesService = 
        searchService === "" ||
        provider.title.toLowerCase().includes(searchService.toLowerCase()) ||
        provider.skills.some(skill => skill.toLowerCase().includes(searchService.toLowerCase()));
      
      const matchesLocation = 
        searchLocation === "" ||
        provider.location.toLowerCase().includes(searchLocation.toLowerCase());
      
      return matchesService && matchesLocation;
    });
  }, [searchService, searchLocation]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              {t('search.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input
                  placeholder={t('hero.search_service')}
                  className="h-12"
                  value={searchService}
                  onChange={(e) => setSearchService(e.target.value)}
                />
              </div>
              <div className="md:col-span-4">
                <Input 
                  placeholder={t('hero.search_location')}
                  className="h-12"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <div className="md:col-span-3">
                <Button size="lg" className="h-12 w-full">
                  <SearchIcon className="h-5 w-5 mr-2" />
                  {t('hero.search_button')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <p className="text-lg font-semibold">
                  {filteredProviders.length} {t('search.results')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <Select defaultValue="rating">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder={t('search.sort_by')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">{t('search.rating')}</SelectItem>
                    <SelectItem value="relevance">{t('search.relevance')}</SelectItem>
                    <SelectItem value="price_low">{t('search.price_low')}</SelectItem>
                    <SelectItem value="price_high">{t('search.price_high')}</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="lg">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {t('search.filters')}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProviders.length > 0 ? (
                filteredProviders.map((provider, index) => (
                  <ProviderCard key={provider.id} {...provider} delay={index * 0.05} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    {t('common.error')}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                {t('search.load_more')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
