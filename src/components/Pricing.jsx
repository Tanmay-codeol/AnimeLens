import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import HeadingTitleFirst from "./HeadingTitleFirst";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}

            alt="Description" onContextMenu={(e) => e.preventDefault()} 
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with AnimeLens"
          title="Help me build a Gaming PC !!!"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            
          
          <br></br>
          </a>

          <Heading
          tag="Https Rate Limits"
          title="Nerd Stuff"
          text={`The server has a global request rate limit of 60/min per IP address. Regardless of which endpoint you're calling. This is always counted by IP address, even if you request with premium accounts.Personally i think this limit cant be reached by a single user without trying to abuse the system using multiple calls by some custom made api's or scripts. 

          The rate limit info is included in the HTTP header. If you hit this HTTP rate limit, request would fail with HTTP 429 (Too Many Requests). This had to be done as a security measure to prevent abuse of the system. I hope you Understand and respect the rules. Thanks for your cooperation.`}

        />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
