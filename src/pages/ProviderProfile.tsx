import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Award,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

const ProviderProfile = () => {
  const { t, language } = useLanguage();

  const provider = {
    name: "Kouame Yao",
    title: language === 'fr' ? "Plombier certifié" : "Certified Plumber",
    location: "Yaoundé, Centre",
    rating: 4.9,
    reviewCount: 127,
    completedJobs: 245,
    memberSince: "2020",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    skills: [
      language === 'fr' ? "Dépannage" : "Repairs",
      "Installation",
      language === 'fr' ? "Rénovation" : "Renovation",
      language === 'fr' ? "Chauffage" : "Heating",
      language === 'fr' ? "Sanitaires" : "Sanitary",
      language === 'fr' ? "Débouchage" : "Unclogging",
    ],
    description: language === 'fr' 
      ? "Plombier professionnel avec plus de 15 ans d'expérience à Yaoundé. Je propose des services de qualité pour tous vos besoins en plomberie, du simple dépannage aux installations complexes. Disponible 7j/7 pour les urgences dans toute la région du Centre."
      : "Professional plumber with over 15 years of experience in Yaoundé. I offer quality services for all your plumbing needs, from simple repairs to complex installations. Available 7 days a week for emergencies throughout the Centre region.",
    certifications: language === 'fr' 
      ? [
          "Certification professionnelle de plombier",
          "Habilitation gaz",
          "Formation énergies renouvelables",
        ]
      : [
          "Professional Plumber Certification",
          "Gas Authorization",
          "Renewable Energy Training",
        ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    ],
    reviewsList: [
      {
        id: 1,
        author: "Grace N.",
        rating: 5,
        date: language === 'fr' ? "Il y a 2 semaines" : "2 weeks ago",
        comment: language === 'fr'
          ? "Excellent service ! Kouame est arrivé à l'heure et a résolu mon problème de fuite rapidement. Très professionnel et prix raisonnable."
          : "Excellent service! Kouame arrived on time and fixed my leak quickly. Very professional and reasonable price.",
      },
      {
        id: 2,
        author: "Paul M.",
        rating: 5,
        date: language === 'fr' ? "Il y a 1 mois" : "1 month ago",
        comment: language === 'fr'
          ? "Très satisfait de l'installation de ma nouvelle salle de bain. Travail soigné et de qualité. Je recommande vivement !"
          : "Very satisfied with my new bathroom installation. Careful and quality work. I highly recommend!",
      },
      {
        id: 3,
        author: "Sophie E.",
        rating: 4,
        date: language === 'fr' ? "Il y a 2 mois" : "2 months ago",
        comment: language === 'fr'
          ? "Bon service, réactif et efficace. Petit délai d'attente mais le travail était impeccable."
          : "Good service, responsive and efficient. Small wait time but the work was impeccable.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="shrink-0"
                  >
                    <Avatar className="h-32 w-32 border-4 border-background shadow-strong">
                      <AvatarImage src={provider.image} alt={provider.name} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 space-y-4"
                  >
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        {provider.name}
                      </h1>
                      <p className="text-xl text-muted-foreground">
                        {provider.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{provider.location}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">
                          {provider.rating}
                        </span>
                        <span className="text-muted-foreground">
                          ({provider.reviewCount} {t('providers.reviews')})
                        </span>
                      </div>
                      <Separator orientation="vertical" className="h-6" />
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          {provider.completedJobs} {t('profile.completed_jobs')}
                        </span>
                      </div>
                      <Separator orientation="vertical" className="h-6" />
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          {t('profile.member_since')} {provider.memberSince}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {provider.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6 space-y-4 sticky top-24">
                  <h3 className="font-semibold text-lg">{t('profile.contact')}</h3>
                  <Button className="w-full" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {t('profile.contact')}
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    {language === 'fr' ? 'Appeler' : 'Call'}
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('profile.about')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.description}
                    </p>
                  </Card>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      {language === 'fr' ? 'Certifications et qualifications' : 'Certifications and Qualifications'}
                    </h2>
                    <ul className="space-y-2">
                      {provider.certifications.map((cert, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('profile.gallery')}</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {provider.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="aspect-video rounded-lg overflow-hidden cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${language === 'fr' ? 'Réalisation' : 'Work'} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Reviews */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">
                      {t('profile.reviews')} ({provider.reviewsList.length})
                    </h2>
                    <div className="space-y-6">
                      {provider.reviewsList.map((review) => (
                        <div key={review.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback>
                                  {review.author.substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{review.author}</p>
                                <p className="text-sm text-muted-foreground">
                                  {review.date}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                          {review.id !== provider.reviewsList[provider.reviewsList.length - 1].id && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>

              <div className="space-y-6">
                {/* Quick Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-4">
                      {language === 'fr' ? 'Informations rapides' : 'Quick Info'}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === 'fr' ? 'Taux de réponse' : 'Response Rate'}
                        </p>
                        <p className="font-semibold">98%</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {t('profile.response_time')}
                        </p>
                        <p className="font-semibold">{language === 'fr' ? '2 heures' : '2 hours'}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === 'fr' ? 'Disponibilité' : 'Availability'}
                        </p>
                        <p className="font-semibold">7j/7</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProviderProfile;
