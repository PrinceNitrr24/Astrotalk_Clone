import Blog from "@/components/_Blog/Blog";
import HomePage from "@/components/_Homepage/HomePage";
import News from "@/components/_News/News";
import OurAstrologer from "@/components/_OurAstrologer/OurAstrologer";
import OurCelebrity from "@/components/_OurCelebrity/OurCelebrity";
import PhoneVerificationForm from "@/components/_PhoneVerification/PhoneVerification";
import Service from "@/components/_Services/Service";
import WhyAstrology from "@/components/_WhyAstrology/WhyAstrology";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Service />
      <News />
      <Blog />
      <OurCelebrity />
      <OurAstrologer />
      <WhyAstrology />
      <PhoneVerificationForm />
    </div>
  );
}
