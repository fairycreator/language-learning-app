import "./homePage.css";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container/ResponsiveContainer";
import Button from "../components/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="homeMainBox">
        <div className="hero">
          <div className="heroAbout">
            <h1 className="heroTitle">
              Unlock your potential with the best{" "}
              <span className="heroTitleAccent">language</span> tutors
            </h1>
            <p className="heroAboutText">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Button
              text="Get started"
              onClick={() => {
                navigate("/teachers");
              }}
            />
          </div>
          <div className="heroImg">
            <img
              className="heroImgFace"
              width="339px"
              height="339px"
              src={process.env.PUBLIC_URL + "/face.png"}
              alt="face"
            />
            <img
              className="heroImgLeptop"
              width="359px"
              height="176px"
              src={process.env.PUBLIC_URL + "/leptop.png"}
              alt="leptop"
            />
          </div>
        </div>
        <div className="statisticListBox">
          <ul className="statisticList">
            <li className="statisticItem">
              <p className="statisticNamber">32,000 +</p>
              <p className="statisticText">Experienced tutors</p>
            </li>
            <li className="statisticItem">
              <p className="statisticNamber">300,000 +</p>
              <p className="statisticText">5-star tutor reviews</p>
            </li>
            <li className="statisticItem">
              <p className="statisticNamber">120 +</p>
              <p className="statisticText">Subjects taught tutors</p>
            </li>
            <li className="statisticItem">
              <p className="statisticNamber">200 +</p>
              <p className="statisticText">Tutor nationalities</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
