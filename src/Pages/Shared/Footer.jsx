import Container from "../../components/Container";
import logoImage from "../../assets/rater-alo.png";
import Logo from "../../components/Logo";
import SocialIcons from "../../components/SocialIcons";
import InputWithButton from "../../components/InputWithButton";
import List from "../../components/List";
import FooterMoreNews from "../../components/FooterMoreNews";

const Footer = () => {
  return (
    <Container className="bg-slate-900">
      <div className="grid">
        <div className="flex justify-between items-center py-5 border-b border-dashed border-gray-700">
          <div>
            <Logo logoImage={logoImage} />
            <SocialIcons />
          </div>
          <div>
            <InputWithButton type="email" placeholder="Enter Your Email">
              Sign Up
            </InputWithButton>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  text-white">
          <div className="col-span-2 grid grid-cols-2">
            <div className="grid grid-cols-2">
              <List/>
              <List/>
            </div>
            <div>
              <h2>Living</h2>
              <div className="grid grid-cols-2">
               <List/>
               <List/>
              </div>
            </div>
          </div>

          <div>
            <h2>More news</h2>
            <div className="grid grid-cols-1">
              
              <FooterMoreNews/>
              <FooterMoreNews/>
              <FooterMoreNews/>
              <FooterMoreNews/>
              <FooterMoreNews/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
