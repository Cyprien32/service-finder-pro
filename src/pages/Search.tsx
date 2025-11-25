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

const Search = () => {
  const providers = [
    {
      id: "1",
      name: "Jean Dupont",
      title: "Plombier certifié",
      location: "Paris, Île-de-France",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      skills: ["Dépannage", "Installation", "Rénovation"],
    },
    {
      id: "2",
      name: "Marie Laurent",
      title: "Coiffeuse professionnelle",
      location: "Lyon, Auvergne-Rhône-Alpes",
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      skills: ["Coupe", "Coloration", "Coiffure mariage"],
    },
    {
      id: "3",
      name: "Pierre Martin",
      title: "Électricien agréé",
      location: "Marseille, Provence-Alpes-Côte d'Azur",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      skills: ["Dépannage", "Installation", "Mise aux normes"],
    },
    {
      id: "4",
      name: "Sophie Bernard",
      title: "Peintre décoratrice",
      location: "Toulouse, Occitanie",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      skills: ["Peinture intérieure", "Décoration", "Rénovation"],
    },
    {
      id: "5",
      name: "Luc Moreau",
      title: "Mécanicien automobile",
      location: "Bordeaux, Nouvelle-Aquitaine",
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      skills: ["Entretien", "Réparation", "Diagnostic"],
    },
    {
      id: "6",
      name: "Amélie Dubois",
      title: "Aide ménagère",
      location: "Nice, Provence-Alpes-Côte d'Azur",
      rating: 5.0,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      skills: ["Ménage", "Repassage", "Organisation"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Trouvez votre prestataire
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input
                  placeholder="Quel service recherchez-vous ?"
                  className="h-12"
                />
              </div>
              <div className="md:col-span-4">
                <Input placeholder="Ville ou code postal" className="h-12" />
              </div>
              <div className="md:col-span-3">
                <Button size="lg" className="h-12 w-full">
                  <SearchIcon className="h-5 w-5 mr-2" />
                  Rechercher
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
                  {providers.length} prestataires trouvés
                </p>
                <p className="text-sm text-muted-foreground">
                  Affichage de tous les résultats
                </p>
              </div>

              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <Select defaultValue="rating">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Meilleures notes</SelectItem>
                    <SelectItem value="reviews">Plus d'avis</SelectItem>
                    <SelectItem value="recent">Plus récents</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="lg">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {providers.map((provider, index) => (
                <ProviderCard key={provider.id} {...provider} delay={index * 0.05} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                Charger plus de résultats
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
