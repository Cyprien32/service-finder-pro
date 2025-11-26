import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProviderCardProps {
  id: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  skills: string[];
  delay?: number;
}

export const ProviderCard = ({
  id,
  name,
  title,
  location,
  rating,
  reviews,
  image,
  skills,
  delay = 0,
}: ProviderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden transition-smooth hover:shadow-medium">
        <div className="aspect-square overflow-hidden bg-muted">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <Link to={`/provider/${id}`}>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews} avis)</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <Link to={`/provider/${id}`} className="w-full">
            <Button className="w-full" variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contacter
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};
