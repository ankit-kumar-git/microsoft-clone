import Cards from "./Cards";
import "./Section3.css";
function Section3() {
  return (
    <div className="section-3">
      <h5>For business</h5>
      <div className="section-2">
        <Cards
          img={
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HCqV?ver=5c59&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          }
          heading={"Surface for Business"}
          para={"No matter what you do, there’s a Surface to help you do it."}
          btn={"Shop Now"}
          btn2={""}
          isHidden={true}
        />

        <Cards
          img={
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT?ver=2072&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          }
          heading={"Microsoft 365 for business"}
          para={
            "Stay a step ahead with powerful apps for productivity, connection and security."
          }
          btn={"Shop now "}
          btn2={""}
          isHidden={true}
        />

        <Cards
          img={
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          }
          heading={"Welcome to your Windows 365 Cloud PC"}
          para={
            "Securely stream your Windows experience from the Microsoft cloud to any device. Available 2 August."
          }
          btn={"Learn More"}
          btn2={""}
          isHidden={true}
        />

        <Cards
          img={
            "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWEze0?ver=ab91&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          }
          heading={"Hybrid work solutions"}
          para={
            "Learn about our approach, the lessons Microsoft is learning along the way, plus how to empower your employees and meet new customer needs."
          }
          btn={"Learn More"}
          btn2={""}
          isHidden={true}
        />
      </div>
    </div>
  );
}

export default Section3;
