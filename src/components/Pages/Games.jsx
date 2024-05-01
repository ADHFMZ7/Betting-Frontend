import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Roulette from './Games/Roulette';
import {cn} from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const Games = () => {

    const games = [
        { title: "Roulette", href: "/games/roulette", description: "Play Roulette!", cover: "" },
        { title: "Daily Spin", href: "/games/spin", description: "Spin the wheel!", cover: ""},
        // { title: "Blackjack", href: "/games/blackjack", description: "Play blackjack", cover: "" },
        // { title: "Slots", href: "/games/slots", description: "Try your luck with the slots!", cover: ""},
        // { title: "Poker", href: "/games/poker", description: "Texas Hold'em Poker", cover: ""},
    ]

    return (
        <div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {games.map((game, index) => (
          <Link to={game.href}>
        <Card key={game.title} className="border-2 border-gray-200 dark:border-gray-800">
        <CardContent className="flex aspect-video p-4 items-center justify-center">
          <img
            alt="Game cover"
            className="aspect-video-outer object-cover rounded-lg"
            height="68"
            src="/placeholder.svg"
            width="120"
          />

        </CardContent>
        <CardFooter className="p-3 flex flex-col">
          <div className="text-s font-semibold">{game.title}</div>
          <Separator />
          <div className="text-xs text-gray-500 dark:text-gray-400">{game.description}</div>
        </CardFooter>
      </Card>
      </Link>
                    ))}
      </div>
    </div>
                {/* <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm justify-center mx-auto mt-6"
                >
                <CarouselContent>
                    {games.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card className={cn("w-[180px] h-[200px]", "")}>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{_.title}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel> */}
                {/* <Roulette /> */}
        </div>
    );
};

export default Games;

