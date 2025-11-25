import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
  delay?: number;
}

export const CategoryCard = ({ icon: Icon, title, count, delay = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <Card className="p-6 cursor-pointer transition-smooth hover:shadow-medium border-border/50">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} prestataires</p>
        </div>
      </Card>
    </motion.div>
  );
};
