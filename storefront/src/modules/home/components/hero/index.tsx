import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import backgroundgradient from "/public/backgroundgradient.jpg"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base  relative bg-ui-bg-subtle">
      <div className="absolute w-full h-full  z-0 overflow-hidden">
        <Image
          src={backgroundgradient}
          alt="Picture of the author"
          className=" object-cover"
          priority
          fill
        ></Image>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Elevate Every Occasion with Effortless Elegance.
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Master the Art of Dressing Up – Shop Our New Arrivals.
          </Heading>
        </span>
        {/* <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>Visit the tutorial</h1>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
