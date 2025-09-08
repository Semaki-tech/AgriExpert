import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Users, Ship } from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Location de Matériel Agricole",
    description: "Accédez à une large gamme de matériel (tracteurs, moissonneuses...) partagé par les membres de la coopérative à des tarifs préférentiels.",
    action: "Voir le matériel",
  },
  {
    icon: Users,
    title: "Recherche de Main-d'œuvre",
    description: "Besoin d'un coup de main pour les récoltes ou d'autres tâches saisonnières ? Trouvez des travailleurs qualifiés et disponibles près de chez vous.",
    action: "Trouver de l'aide",
  },
  {
    icon: Ship,
    title: "Logistique et Transport",
    description: "Coordonnez le transport de vos récoltes vers les marchés ou les entrepôts. Optimisez les coûts en groupant les expéditions avec d'autres agriculteurs.",
    action: "Organiser un transport",
  },
];

export default function CooperativePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight">
          Plateforme Coopérative
        </h1>
        <p className="text-muted-foreground">
          Partage de ressources et entraide entre agriculteurs.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              <service.icon className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full">{service.action}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
