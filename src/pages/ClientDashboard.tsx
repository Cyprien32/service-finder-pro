import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Calendar,
  User,
  Euro,
  Eye,
  MessageSquare,
  FileText,
  TrendingUp
} from "lucide-react";

const ClientDashboard = () => {
  const { t } = useLanguage();

  const translations = {
    fr: {
      pageTitle: "Mes Missions",
      pageSubtitle: "Suivez l'état de toutes vos demandes de service",
      allMissions: "Toutes",
      pending: "En attente",
      inProgress: "En cours",
      completed: "Terminées",
      cancelled: "Annulées",
      missionDetails: "Détails",
      contactProvider: "Contacter",
      viewProfile: "Voir profil",
      provider: "Prestataire",
      requestDate: "Date de demande",
      budget: "Budget",
      status: "Statut",
      description: "Description",
      noMissions: "Aucune mission dans cette catégorie",
      statistics: "Statistiques",
      totalMissions: "Total missions",
      activeMissions: "Missions actives",
      completedMissions: "Missions terminées",
      totalSpent: "Total dépensé",
      pendingStatus: "En attente",
      inProgressStatus: "En cours",
      completedStatus: "Terminée",
      cancelledStatus: "Annulée",
      recentActivity: "Activité récente",
      newQuote: "Nouveau devis reçu",
      missionStarted: "Mission démarrée",
      missionCompleted: "Mission terminée",
      hoursAgo: "il y a",
      hours: "heures",
      days: "jours"
    },
    en: {
      pageTitle: "My Missions",
      pageSubtitle: "Track the status of all your service requests",
      allMissions: "All",
      pending: "Pending",
      inProgress: "In Progress",
      completed: "Completed",
      cancelled: "Cancelled",
      missionDetails: "Details",
      contactProvider: "Contact",
      viewProfile: "View Profile",
      provider: "Provider",
      requestDate: "Request Date",
      budget: "Budget",
      status: "Status",
      description: "Description",
      noMissions: "No missions in this category",
      statistics: "Statistics",
      totalMissions: "Total Missions",
      activeMissions: "Active Missions",
      completedMissions: "Completed Missions",
      totalSpent: "Total Spent",
      pendingStatus: "Pending",
      inProgressStatus: "In Progress",
      completedStatus: "Completed",
      cancelledStatus: "Cancelled",
      recentActivity: "Recent Activity",
      newQuote: "New quote received",
      missionStarted: "Mission started",
      missionCompleted: "Mission completed",
      hoursAgo: "ago",
      hours: "hours",
      days: "days"
    }
  };

  const text = translations[t("lang") === "Français" ? "fr" : "en"];

  const [missions] = useState([
    {
      id: 1,
      title: { fr: "Développement site e-commerce", en: "E-commerce Website Development" },
      provider: "Amadou Diallo",
      providerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      status: "in_progress",
      requestDate: "2024-01-15",
      budget: "2500€",
      description: { 
        fr: "Création d'une boutique en ligne complète avec système de paiement", 
        en: "Creation of a complete online store with payment system" 
      }
    },
    {
      id: 2,
      title: { fr: "Logo et identité visuelle", en: "Logo and Visual Identity" },
      provider: "Fatou Sow",
      providerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      status: "completed",
      requestDate: "2024-01-10",
      budget: "800€",
      description: { 
        fr: "Design du logo et création de la charte graphique", 
        en: "Logo design and brand guidelines creation" 
      }
    },
    {
      id: 3,
      title: { fr: "Traduction documents juridiques", en: "Legal Documents Translation" },
      provider: "Moussa Keita",
      providerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      status: "pending",
      requestDate: "2024-01-20",
      budget: "450€",
      description: { 
        fr: "Traduction de contrats commerciaux français-anglais", 
        en: "Translation of commercial contracts French-English" 
      }
    },
    {
      id: 4,
      title: { fr: "Campagne marketing digital", en: "Digital Marketing Campaign" },
      provider: "Aisha Ndiaye",
      providerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      status: "in_progress",
      requestDate: "2024-01-18",
      budget: "1200€",
      description: { 
        fr: "Gestion des réseaux sociaux et campagnes publicitaires", 
        en: "Social media management and advertising campaigns" 
      }
    },
    {
      id: 5,
      title: { fr: "Application mobile iOS", en: "iOS Mobile Application" },
      provider: "Ibrahim Touré",
      providerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      status: "cancelled",
      requestDate: "2024-01-05",
      budget: "5000€",
      description: { 
        fr: "Développement d'une application de livraison", 
        en: "Development of a delivery application" 
      }
    },
    {
      id: 6,
      title: { fr: "Rédaction articles blog", en: "Blog Articles Writing" },
      provider: "Mariama Ba",
      providerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      status: "completed",
      requestDate: "2024-01-08",
      budget: "300€",
      description: { 
        fr: "Rédaction de 10 articles SEO pour le blog", 
        en: "Writing 10 SEO articles for the blog" 
      }
    }
  ]);

  const [recentActivity] = useState([
    { type: "quote", mission: "Développement site e-commerce", time: 2, unit: "hours" },
    { type: "started", mission: "Campagne marketing digital", time: 1, unit: "days" },
    { type: "completed", mission: "Logo et identité visuelle", time: 3, unit: "days" }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            <Clock className="w-3 h-3 mr-1" />
            {text.pendingStatus}
          </Badge>
        );
      case "in_progress":
        return (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <AlertCircle className="w-3 h-3 mr-1" />
            {text.inProgressStatus}
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            {text.completedStatus}
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            <XCircle className="w-3 h-3 mr-1" />
            {text.cancelledStatus}
          </Badge>
        );
      default:
        return null;
    }
  };

  const filterMissions = (status: string) => {
    if (status === "all") return missions;
    return missions.filter(m => m.status === status);
  };

  const stats = {
    total: missions.length,
    active: missions.filter(m => m.status === "in_progress").length,
    completed: missions.filter(m => m.status === "completed").length,
    totalSpent: missions
      .filter(m => m.status === "completed")
      .reduce((acc, m) => acc + parseInt(m.budget.replace(/[^0-9]/g, "")), 0)
  };

  const lang = t("lang") === "Français" ? "fr" : "en";

  const MissionCard = ({ mission }: { mission: typeof missions[0] }) => (
    <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {mission.title[lang]}
              </h3>
              {getStatusBadge(mission.status)}
            </div>
            
            <p className="text-muted-foreground text-sm mb-4">
              {mission.description[lang]}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{mission.provider}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{new Date(mission.requestDate).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US")}</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Euro className="w-4 h-4" />
                <span>{mission.budget}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src={mission.providerImage} 
              alt={mission.provider}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
          <Button variant="outline" size="sm" className="gap-2">
            <Eye className="w-4 h-4" />
            {text.missionDetails}
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            {text.contactProvider}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            {text.viewProfile}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {text.pageTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            {text.pageSubtitle}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  <p className="text-xs text-muted-foreground">{text.totalMissions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.active}</p>
                  <p className="text-xs text-muted-foreground">{text.activeMissions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
                  <p className="text-xs text-muted-foreground">{text.completedMissions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalSpent}€</p>
                  <p className="text-xs text-muted-foreground">{text.totalSpent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Missions List */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 mb-6 bg-muted/50">
                <TabsTrigger value="all">{text.allMissions}</TabsTrigger>
                <TabsTrigger value="pending">{text.pending}</TabsTrigger>
                <TabsTrigger value="in_progress">{text.inProgress}</TabsTrigger>
                <TabsTrigger value="completed">{text.completed}</TabsTrigger>
                <TabsTrigger value="cancelled">{text.cancelled}</TabsTrigger>
              </TabsList>
              
              {["all", "pending", "in_progress", "completed", "cancelled"].map((status) => (
                <TabsContent key={status} value={status} className="space-y-4">
                  {filterMissions(status).length > 0 ? (
                    filterMissions(status).map((mission) => (
                      <MissionCard key={mission.id} mission={mission} />
                    ))
                  ) : (
                    <Card className="bg-card/50 border-border/50">
                      <CardContent className="p-8 text-center">
                        <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">{text.noMissions}</p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Recent Activity Sidebar */}
          <div>
            <Card className="bg-card/50 border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  {text.recentActivity}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-border/50 last:border-0">
                    <div className={`p-2 rounded-full ${
                      activity.type === "quote" ? "bg-yellow-500/20" :
                      activity.type === "started" ? "bg-blue-500/20" :
                      "bg-green-500/20"
                    }`}>
                      {activity.type === "quote" && <FileText className="w-4 h-4 text-yellow-400" />}
                      {activity.type === "started" && <AlertCircle className="w-4 h-4 text-blue-400" />}
                      {activity.type === "completed" && <CheckCircle className="w-4 h-4 text-green-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {activity.type === "quote" && text.newQuote}
                        {activity.type === "started" && text.missionStarted}
                        {activity.type === "completed" && text.missionCompleted}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.mission}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {text.hoursAgo} {activity.time} {activity.unit === "hours" ? text.hours : text.days}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClientDashboard;
