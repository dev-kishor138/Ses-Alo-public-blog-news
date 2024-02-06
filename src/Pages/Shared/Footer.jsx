import Container from "../../components/Container";
import logoImage from "../../assets/rater-alo.png";
import Logo from "../../components/Logo";
import SocialIcons from "../../components/SocialIcons";
import InputWithButton from "../../components/InputWithButton";

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
      </div>
    </Container>
  );
};

export default Footer;
