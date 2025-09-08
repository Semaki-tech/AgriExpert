import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Trend = "up" | "down" | "stable";

const marketData: {
  product: string;
  price: string;
  unit: string;
  trend: Trend;
}[] = [
  { product: "Maïs", price: "18,500", unit: "sac de 100kg", trend: "up" },
  { product: "Sorgho", price: "17,000", unit: "sac de 100kg", trend: "stable" },
  { product: "Igname", price: "800", unit: "tubercule moyen", trend: "down" },
  { product: "Haricot", price: "35,000", unit: "sac de 100kg", trend: "up" },
  { product: "Soja", price: "28,000", unit: "sac de 100kg", trend: "stable" },
  { product: "Manioc (Gari)", price: "25,000", unit: "sac de 100kg", trend: "up" },
  { product: "Tomate", price: "5,000", unit: "panier de 25kg", trend: "down" },
];

const trendIcons = {
  up: <ArrowUp className="h-4 w-4 text-green-500" />,
  down: <ArrowDown className="h-4 w-4 text-red-500" />,
  stable: <Minus className="h-4 w-4 text-gray-500" />,
};

export default function MarketPricesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight">Prix du Marché</h1>
        <p className="text-muted-foreground">
          Consultez les derniers prix des produits agricoles clés au Togo.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Prix Actuels</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produit</TableHead>
                <TableHead className="text-right">Prix (XOF)</TableHead>
                <TableHead className="text-right">Unité</TableHead>
                <TableHead className="text-right">Tendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketData.map((item) => (
                <TableRow key={item.product}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                  <TableCell className="text-right">{item.unit}</TableCell>
                  <TableCell className="flex justify-end">
                    {trendIcons[item.trend]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
