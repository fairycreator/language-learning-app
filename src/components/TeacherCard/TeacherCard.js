import "./TeacherCard.css";
import { PiBookOpen } from "react-icons/pi";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorite/favoriteSlice";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import Modal from "../Modals/Modal";
import BookLessonForm from "../Modals/BookLessonModal";
import { AvatarGenerator } from "random-avatar-generator";

const TeacherCard = ({ teacher }) => {
  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const favoriteList = useSelector((state) => state.favorite.favorite);

  const dispatch = useDispatch();

  const isTeacherFavorite = favoriteList.includes(id);

  const generator = new AvatarGenerator();

  return (
    <>
      <li className="teacherItemBox">
        <div className="avatarBox">
          <img
            src={avatar_url}
            className="avatarImg"
            height="100px"
            width="100px"
            alt="Teacher avatar"
          />
        </div>
        <div className="teacherDescriptionBox">
          <div className="teacherDiscrHead">
            <div className="teacherName">
              <p className="greyTitle">Languages</p>
              <h2>
                {name} {surname}
              </h2>
            </div>
            <ul className="teacherDiscrHeadList">
              <li
                className="bleackTitle teacherDiscrHeadItem"
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PiBookOpen size={16} color="#000000" />
                <span>Lessons online</span>
              </li>
              <li className="bleackTitle teacherDiscrHeadItem">
                Lessons done: {lessons_done}
              </li>
              <li
                className="bleackTitle teacherDiscrHeadItem"
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <AiFillStar color="#FFC531" size={16} />
                <span>Rating: {rating}</span>
              </li>
              <li className="bleackTitle">
                Price / 1 hour:
                <span className="greenText"> {price_per_hour}$</span>
              </li>
            </ul>
          </div>
          <div className="teacherDiscrMain">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <p>
                <span className="greyTitle">Speaks: </span>
                <span className="bleackTitle">{languages.join(", ")}</span>
              </p>
              <p>
                <span className="greyTitle">Lesson Info: </span>
                <span className="bleackTitle">{lesson_info}</span>
              </p>
              <p>
                <span className="greyTitle">Conditions: </span>
                <span className="bleackTitle">{conditions}</span>
              </p>
            </div>

            {isExpanded && (
              <>
                <p className="teacherOpenDiscr">{experience}</p>
                <ul className="fitbackList">
                  {reviews.map((el) => (
                    <li key={nanoid()} className="fitbackItem">
                      <div className="fitbackUser">
                        <img
                          src={generator.generateRandomAvatar()}
                          className="fidbackAvatar"
                          alt="Fitback avatar"
                          height="44px"
                          width="44px"
                        />
                        <div className="fidbackAuthor">
                          <span className="greyTitle">{el.reviewer_name}</span>
                          <span className="fitbackStars">
                            <AiFillStar color="#FFC531" size={16} />
                            {el.reviewer_rating},0
                          </span>
                        </div>
                      </div>
                      <p className="fidbackText bleackTitle">{el.comment}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {!isExpanded && (
              <button
                className="bleackTitle ReadMoreBtn"
                onClick={() => setIsExpanded(true)}
              >
                Read more
              </button>
            )}

            <ul className="levelsList">
              {levels.map((el) => (
                <li key={nanoid()} className="levelsItem">
                  {el}
                </li>
              ))}
            </ul>
            <Button
              text="Book trial lesson"
              onClick={() => setIsModalActive(true)}
            />
          </div>
        </div>
        {isTeacherFavorite && isAuth ? (
          <button
            type="button"
            className="addFavoriteBtn"
            onClick={() => {
              if (!isAuth) {
                toast.warn(
                  "The functionality is available only to authorized users"
                );
                return;
              }
              dispatch(removeFavorite(id));
            }}
          >
            <AiFillHeart color={`var(--accent-color)`} size={26} />
          </button>
        ) : (
          <button
            type="button"
            className="addFavoriteBtn heartbeat"
            onClick={() => {
              if (!isAuth) {
                toast.warn(
                  "The functionality is available only to authorized users"
                );
                return;
              }
              dispatch(addFavorite(id));
            }}
          >
            <AiOutlineHeart color={`var(--accent-color)`} size={26} />
          </button>
        )}
      </li>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <BookLessonForm
          teacherName={name}
          surname={surname}
          avatar_url={avatar_url}
          setIsModalActive={setIsModalActive}
        />
      </Modal>
    </>
  );
};

export default TeacherCard;
