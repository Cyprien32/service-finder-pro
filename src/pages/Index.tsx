import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProviderCard } from "@/components/ProviderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Wrench,
  Scissors,
  Zap,
  PaintBucket,
  Home,
  Car,
  Search,
  CheckCircle,
  Users,
  Shield,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const categories = [
    { icon: Wrench, title: "Plomberie", count: "245" },
    { icon: Scissors, title: "Coiffure", count: "189" },
    { icon: Zap, title: "Électricité", count: "312" },
    { icon: PaintBucket, title: "Peinture", count: "156" },
    { icon: Home, title: "Ménage", count: "421" },
    { icon: Car, title: "Mécanique", count: "198" },
  ];

  const featuredProviders = [
    {
      id: "1",
      name: "Kouame Yao",
      title: "Plombier certifié",
      location: "Yaoundé, Centre",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      skills: ["Dépannage", "Installation", "Rénovation"],
    },
    {
      id: "2",
      name: "Amina Ndong",
      title: "Coiffeuse professionnelle",
      location: "Douala, Littoral",
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      skills: ["Coupe", "Tresses", "Coiffure mariage"],
    },
    {
      id: "3",
      name: "Samuel Ngono",
      title: "Électricien agréé",
      location: "Yaoundé, Centre",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: ["Dépannage", "Installation", "Mise aux normes"],
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Prestataires vérifiés",
      description: "Tous nos prestataires sont vérifiés et certifiés",
    },
    {
      icon: Shield,
      title: "Paiement sécurisé",
      description: "Transactions 100% sécurisées et garanties",
    },
    {
      icon: Clock,
      title: "Disponibilité rapide",
      description: "Trouvez un prestataire disponible près de chez vous",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Trouvez le{" "}
              <span className="text-primary">prestataire idéal</span> près de
              chez vous
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Connectez-vous avec des professionnels qualifiés et vérifiés pour
              tous vos besoins de services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <Input
                  placeholder="Quel service recherchez-vous ?"
                  className="h-12"
                />
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Ville ou code postal"
                  className="h-12"
                />
              </div>
              <Link to="/search">
                <Button size="lg" className="h-12 px-8 w-full sm:w-auto">
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-muted-foreground">Recherches populaires:</span>
              <button className="text-primary hover:underline">Plombier</button>
              <button className="text-primary hover:underline">Coiffeur</button>
              <button className="text-primary hover:underline">Électricien</button>
              <button className="text-primary hover:underline">Peintre</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Explorez nos catégories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés dans tous les domaines
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Prestataires populaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les prestataires les mieux notés par nos clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProviders.map((provider, index) => (
              <ProviderCard
                key={provider.id}
                {...provider}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/search">
              <Button size="lg" variant="outline">
                Voir tous les prestataires
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Vous êtes prestataire ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Rejoignez BantuHire et développez votre activité en touchant des
              milliers de clients potentiels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/become-provider">
                <Button size="lg" className="w-full sm:w-auto">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Devenir prestataire
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                En savoir plus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
