import "./styles/teachers.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import Container from "../components/Container/ResponsiveContainer";
import PropagateLoader from "react-spinners/PropagateLoader";
import FlexContainer from "../components/Container/CentredFlexContainer";
import Button from "../components/Button/Button";

const FavoriteTeachersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);
  const favoriteList = useSelector((state) => state.favorite.favorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

  const favoriteTeacher = teachers?.filter((el) =>
    favoriteList.includes(el.id)
  );

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  return (
    <Container>
      {isLoading ? (
        <FlexContainer>
          <PropagateLoader
            color={"var(--accent-color)"}
            size={40}
            cssOverride={{ marginBottom: "64px" }}
          />
        </FlexContainer>
      ) : favoriteTeacher.length !== 0 ? (
        <ul className="teachersList">
          {favoriteTeacher
            .map((el) => <TeacherCard key={nanoid()} teacher={el} />)
            .slice(0, loadedTeachersCount)}
        </ul>
      ) : (
        <FlexContainer>
          <p className="bleackTitle">There are no favorite teachers yet</p>
        </FlexContainer>
      )}
      {favoriteTeacher.length > loadedTeachersCount && !isLoading && (
        <FlexContainer>
          <Button text="Load more" onClick={handleLoadMore} />
        </FlexContainer>
      )}
    </Container>
  );
};

export default FavoriteTeachersPage;
