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
import { useLanguage } from "@/contexts/LanguageContext";

const BecomeProvider = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
    
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.city || !formData.title || !formData.services) {
      toast({
        title: t('common.error'),
        description: t('common.error'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('common.success'),
      description: t('common.success'),
    });

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
    { titleKey: "become.benefit1_title", descKey: "become.benefit1_desc" },
    { titleKey: "become.benefit2_title", descKey: "become.benefit2_desc" },
    { titleKey: "become.benefit3_title", descKey: "become.benefit3_desc" },
    { titleKey: "become.benefit4_title", descKey: "become.benefit4_desc" },
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
                {t('become.hero_title')}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t('become.hero_subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('become.benefits_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-semibold">{t(benefit.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(benefit.descKey)}</p>
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
                  {t('become.form_title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      {t('become.full_name')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t('become.full_name')}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t('become.email')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {t('become.phone')} <span className="text-destructive">*</span>
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
                      {t('become.city')} <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t('become.select_category')} />
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
                      {t('become.service_category')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder={t('become.select_category')}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services">
                      {t('become.experience')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="1, 2, 5..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{t('become.description')}</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder={t('become.description_placeholder')}
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">
                      {t('become.documents')}
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                      <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {t('common.loading')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full">
                      {t('become.submit')}
                    </Button>
                  </div>
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
