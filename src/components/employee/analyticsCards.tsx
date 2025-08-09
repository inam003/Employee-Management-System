import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { employeeAnalytics } from "@/lib/data";

export const AnalyticsCards = () => {
  return (
    <>
      {employeeAnalytics.map((data, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center">
            <data.icon className="size-8 text-blue-600 dark:text-blue-500" />
          </CardHeader>
          <CardContent>
            <h2 className="font-bold text-3xl">{data.value}</h2>
          </CardContent>
          <CardFooter className="font-semibold text-gray-500">
            {data.title}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
