import * as React from "react"
import {Link} from "react-router-dom"
import { ModeToggle } from "./ModeToggle"
import { cn } from "@/lib/utils"
import { useAuth } from "./AuthProvider.jsx"
import { buttonVariants } from "@/components/ui/button"
import ProfileDropdown from "./ProfileDropdown.jsx"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { parseJwt } from "../utility.js"

const components = [
  // {
  //   title: "Blackjack",
  //   href: "/games/blackjack",
  //   description:
  //     "Play blackjack",
  // },
  // {
  //   title: "Slots",
  //   href: "/games/slots",
  //   description:
  //     "Try your luck with the slots!",
  // },
  {
    title: "Daily Spin",
    href: "/games/spin",
    description:
      "Spin the wheel!",
  },
  {
    title: "Roulette",
    href: "/games/roulette",
    description: 
      "Bet on the roulette wheel!",
  },
]

export default function Navbar() {

  const {user, token} = useAuth();
  const [balance, setBalance] = useState();
  // Fetch user balance from API


  React.useEffect(() => {
    if (token) {
      const id = parseJwt(token).id;
      fetch("https://ootd.aldasouqi.com:8000/user/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBalance(data.credits);
          console.log(balance);
        })
    }
  }), [token];


  return (
    <div className="flex flex-row top-0 h-14">
      <div className="basis-1/3 flex flex-row">
        <Link to="/" className="basis-1/3 flex flex-row">
          <img src="https://github.com/ADHFMZ7/TuffyBets/blob/84406662d57b07b06a7a43af8e20964e21899960/frontend/Wooly-Mammoth-modified.png?raw=true" alt="BuffyBets" className="w-12 h-12 ml-5 mt-1" />
          <h1 className="text-2xl font-bold text-blue-500 dark:text-white mt-3 ml-1" >BuffyBets</h1>
        </Link>
      </div>
      <div className="basis-1/3 m-2 flex flex-row">
         <div className="basis-1/3"></div>

        {token !== null ? <NavigationMenu className="basis-1/3">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger><h1 className="text-2xl">Games</h1></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu> : <></>}
      </div> 


      <div className="basis-1/3 flex justify-end m-2">

        {user === null ?       <Link
        to="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "mr-8 top-4 right-4 md:left-8 md:top-8 "
        )}>Login</Link> : <>
        <h1 className="mr-2 mt-2">${balance}</h1>
        <ProfileDropdown />
        </>}
      </div>
      
    </div>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
