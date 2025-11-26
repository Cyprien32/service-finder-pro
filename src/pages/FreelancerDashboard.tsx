import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Star, 
  Clock, 
  CheckCircle, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Edit
} from "lucide-react";

// Données simulées
const mockProfile = {
  name: "Jean Mbala",
  title: "Développeur Full Stack",
  location: "Yaoundé, Cameroun",
  phone: "+237 6 XX XX XX XX",
  email: "jean.mbala@email.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
  bio: "Développeur passionné avec 5 ans d'expérience en développement web. Spécialisé en React, Node.js et bases de données.",
  skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  rating: 4.8,
  completedMissions: 24
};

const mockMissions = [
  {
    id: 1,
    title: "Développement site e-commerce",
    client: "Marie Nguesso",
    status: "en_cours",
    budget: "500,000 FCFA",
    deadline: "2025-12-15",
    description: "Création d'un site e-commerce pour boutique de vêtements"
  },
  {
    id: 2,
    title: "Application mobile de livraison",
    client: "Paul Etundi",
    status: "en_cours",
    budget: "800,000 FCFA",
    deadline: "2025-12-30",
    description: "Développement d'une app mobile pour service de livraison"
  },
  {
    id: 3,
    title: "Site vitrine entreprise",
    client: "Sophie Kamga",
    status: "termine",
    budget: "250,000 FCFA",
    deadline: "2025-11-20",
    description: "Site vitrine pour une entreprise de consulting"
  },
  {
    id: 4,
    title: "Refonte site web",
    client: "David Onana",
    status: "termine",
    budget: "400,000 FCFA",
    deadline: "2025-10-15",
    description: "Modernisation d'un site web existant"
  }
];

export default function FreelancerDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockProfile);

  const stats = [
    { label: "Missions terminées", value: profile.completedMissions, icon: CheckCircle, color: "text-green-500" },
    { label: "Missions en cours", value: mockMissions.filter(m => m.status === "en_cours").length, icon: Clock, color: "text-blue-500" },
    { label: "Note moyenne", value: profile.rating, icon: Star, color: "text-yellow-500" },
  ];

  const missionsEnCours = mockMissions.filter(m => m.status === "en_cours");
  const missionsTerminees = mockMissions.filter(m => m.status === "termine");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Tableau de bord</h1>
            <p className="text-muted-foreground">Gérez votre profil et vos missions</p>
          </div>

          {/* Statistiques */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contenu principal */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                Profil
              </TabsTrigger>
              <TabsTrigger value="missions">
                <Briefcase className="h-4 w-4 mr-2" />
                Missions
              </TabsTrigger>
            </TabsList>

            {/* Onglet Profil */}
            <TabsContent value="profile">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Mon profil</CardTitle>
                    <CardDescription>Gérez vos informations personnelles</CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Annuler" : "Modifier"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        Changer la photo
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        disabled={!isEditing}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Titre professionnel</Label>
                      <Input
                        id="title"
                        value={profile.title}
                        disabled={!isEditing}
                        onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={profile.phone}
                          disabled={!isEditing}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          disabled={!isEditing}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Localisation</Label>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="location"
                          value={profile.location}
                          disabled={!isEditing}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biographie</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      disabled={!isEditing}
                      rows={4}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Compétences</Label>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                          {isEditing && (
                            <button className="ml-2 hover:text-destructive">×</button>
                          )}
                        </Badge>
                      ))}
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          + Ajouter
                        </Button>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Annuler
                      </Button>
                      <Button onClick={() => setIsEditing(false)}>
                        Enregistrer
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Onglet Missions */}
            <TabsContent value="missions" className="space-y-6">
              {/* Missions en cours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    Missions en cours ({missionsEnCours.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {missionsEnCours.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Aucune mission en cours
                    </p>
                  ) : (
                    missionsEnCours.map((mission) => (
                      <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{mission.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Client: {mission.client}
                            </p>
                          </div>
                          <Badge variant="secondary">En cours</Badge>
                        </div>
                        <p className="text-sm">{mission.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            Deadline: {new Date(mission.deadline).toLocaleDateString('fr-FR')}
                          </div>
                          <span className="font-semibold">{mission.budget}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Voir les détails
                        </Button>
                      </motion.div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Missions terminées */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Missions terminées ({missionsTerminees.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {missionsTerminees.map((mission) => (
                    <motion.div
                      key={mission.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border rounded-lg p-4 space-y-3 opacity-75"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{mission.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Client: {mission.client}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          Terminée
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{mission.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Complétée le {new Date(mission.deadline).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="font-semibold">{mission.budget}</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
