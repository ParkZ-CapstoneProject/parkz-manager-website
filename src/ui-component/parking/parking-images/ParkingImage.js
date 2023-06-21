import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsTrash,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useParams } from "react-router";
import Loading from "ui-component/back-drop/Loading";
import CreateButton from "ui-component/buttons/create-button/CreateButton";
// import "../../../index.css";

const ParkingImage = () => {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const apiUrl = process.env.REACT_APP_BASE_URL_API_APP;
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `${apiUrl}/parking-spot-image/${id}?pageNo=1&pageSize=11`,
        requestOptions
      );

      const data = await response.json();
      setSlides(data.data);
      console.log("data.data", data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTrashMouseEnter = () => {
    setIsTrashHovered(true);
  };

  const handleTrashMouseLeave = () => {
    setIsTrashHovered(false);
  };

  const handleDelete = (id) => {
    console.log("clicked to id:", id);
  };

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <CreateButton />
      </Grid>
      <div
        className="max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]?.imgPath})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {isHovered && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                onMouseEnter={handleTrashMouseEnter}
                onMouseLeave={handleTrashMouseLeave}
                className={`cursor-pointer ${
                  isTrashHovered ? "cursor-pointer" : ""
                }`}
              >
                <BsTrash
                  style={{ color: "#dad9d4" }}
                  size={40}
                  onClick={() =>
                    handleDelete(slides[currentIndex]?.parkingSpotImageId)
                  }
                />
              </div>
            </div>
          )}
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currentIndex ? "text-white" : ""
              }`}
            >
              {slideIndex === currentIndex ? (
                <RxDotFilled sx={{ color: "red" }} />
              ) : (
                <RxDotFilled />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParkingImage;
