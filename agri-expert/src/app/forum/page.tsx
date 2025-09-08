import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

const forumTopics = [
  {
    id: 1,
    title: "Comment lutter contre la chenille légionnaire du maïs ?",
    author: "Koffi A.",
    replies: 12,
    imageUrl: "/images/forum/corn-field.jpg",
    authorImageUrl: "/images/avatars/koffi.jpg",
  },
  {
    id: 2,
    title: "Meilleures variétés d'igname pour la région des plateaux",
    author: "Amina B.",
    replies: 8,
    imageUrl: "/images/forum/yams.jpg",
    authorImageUrl: "/images/avatars/amina.jpg",
  },
  {
    id: 3,
    title: "Partage d'expérience sur l'irrigation goutte-à-goutte",
    author: "Jean-Pierre D.",
    replies: 25,
    imageUrl: "/images/forum/drip-irrigation.jpg",
    authorImageUrl: "/images/avatars/jean-pierre.jpg",
  },
    {
    id: 4,
    title: "Quand et comment planter le sorgho cette saison ?",
    author: "Fatou S.",
    replies: 5,
    imageUrl: "/images/forum/sorghum.jpg",
    authorImageUrl: "/images/avatars/fatou.jpg",
  },
];

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ForumPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight">
          Forum des Agriculteurs
        </h1>
        <p className="text-muted-foreground">
          Échangez avec la communauté, posez vos questions et partagez vos connaissances.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {forumTopics.map((topic) => (
          <Card key={topic.id} className="flex flex-col overflow-hidden">
            <div className="h-40 w-full bg-muted">
              {/* Placeholder for image. In a real app, use <Image /> */}
            </div>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={topic.authorImageUrl} alt={topic.author} />
                  <AvatarFallback>{topic.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{topic.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{topic.replies}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
