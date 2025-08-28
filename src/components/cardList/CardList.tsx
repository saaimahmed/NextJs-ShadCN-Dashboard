import React from "react";

import { popularContents, latestTransactions } from "@/constains/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "popular Contents" ? popularContents : latestTransactions;

  return (
    <>
      <div>
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <Card
              key={item.id}
              className="flex flex-row  items-center justify-between gap-4 p-4"
            >
              {/* <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader> */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20  rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-0 gap-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                  <Badge className="flex my-1" variant="secondary">
                    {item.badge}
                  </Badge>
                </CardTitle>
              </CardContent>
              <CardFooter className="p-0">{item.count / 1000}k</CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
