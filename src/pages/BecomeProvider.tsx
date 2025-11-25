import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BecomeProvider = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    title: "",
    services: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.city || !formData.title || !formData.services) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Demande envoyée !",
      description: "Nous examinerons votre candidature et vous contacterons bientôt.",
    });

    // Réinitialiser le formulaire
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      title: "",
      services: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    "Accès à une large base de clients potentiels",
    "Profil professionnel personnalisé",
    "Système de notation et d'avis clients",
    "Gestion simplifiée de vos demandes",
    "Visibilité accrue pour votre activité",
    "Aucun frais d'inscription",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Devenez prestataire sur BantuHire
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Rejoignez notre communauté de professionnels et développez votre activité.
                Connectez-vous avec des clients qui ont besoin de vos services.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi nous rejoindre ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Formulaire d'inscription
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Nom complet <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Téléphone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+237 6XX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">
                      Ville <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yaounde">Yaoundé</SelectItem>
                        <SelectItem value="douala">Douala</SelectItem>
                        <SelectItem value="bamenda">Bamenda</SelectItem>
                        <SelectItem value="garoua">Garoua</SelectItem>
                        <SelectItem value="bafoussam">Bafoussam</SelectItem>
                        <SelectItem value="maroua">Maroua</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">
                      Titre/Profession <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Ex: Plombier certifié, Coiffeuse professionnelle..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services">
                      Services offerts <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="Ex: Dépannage, Installation, Rénovation (séparés par des virgules)"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description de votre activité</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Décrivez votre expérience, vos qualifications et ce qui vous distingue..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">
                      Photos de vos réalisations (à venir)
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                      <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Fonctionnalité d'upload disponible prochainement
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full">
                      Soumettre ma candidature
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez nos conditions d'utilisation
                    et notre politique de confidentialité.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeProvider;
