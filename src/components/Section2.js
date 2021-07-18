import Cards from "./Cards";
import "./Section2.css";
function Section2() {
  return (
    <div class="section-2">
      <Cards
        img={
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Hyo9?ver=47a5&q=90&m=6&h=291&w=517&b=%23FFFFFFFF&l=f&o=t&aim=true"
        }
        heading={"Surface Laptop Go"}
        para={
          "Make the most of every day with the sleek style and performance of our lightest Surface laptop."
        }
        btn={"Shop Now"}
        btn2={""}
        isHidden={true}
      />

      <Cards
        img={
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rR?ver=1daf&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
        }
        heading={"Microsoft 365"}
        para={
          "Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription."
        }
        btn={"For upto 6 people"}
        btn2={"For 1 person"}
        isHidden={false}
      />

      <Cards
        img={
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDhA6?ver=d8db&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
        }
        heading={"Microsoft Teams"}
        para={
          "Chat, call and make plans with family and friends – all in one app."
        }
        btn={"Learn More"}
        btn2={""}
        isHidden={true}
      />

      <Cards
        img={
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4P80m?ver=316d&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&x=1157&y=247&aim=true"
        }
        heading={"Xbox Game Pass Ultimate"}
        para={
          "Get your first month of membership for ₹50. Play on the devices you own. Includes EA Play. Offer available to new subscribers only."
        }
        btn={"Join Now"}
        btn2={""}
        isHidden={true}
      />
    </div>
  );
}

export default Section2;
