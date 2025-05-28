import React from "react";
import styled from "styled-components";
import bg from "../assets/project1.jpg";

const Card = () => {
  return (
    <StyledWrapper>
      <section id="card1" className="card">
        <img
          src={bg}
          className="card__image w-full h-full"
          alt="Card graphic"
        />
        <div className="card__content">
          <p className="card__title">Lorem Ipsum</p>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae justo vel lorem tincidunt ultrices at non nunc. Donec in
            sapien viverra, tincidunt augue id, efficitur massa.
          </p>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 350px;
    height: 200px;
    /* background-color: #474dc3; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;
  }

  .card:hover {
    transform: scale(1);
    box-shadow: 0 8px 16px #000000;
  }

  .card:hover .card__image {
    transform: scale(0);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #7c3aed;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #ffffff;
    font-weight: 700;
  }

  .card__description {
    margin-top: 10px;
    font-size: 14px;
    color: #ffffff;
    line-height: 1.4;
  }
`;

export default Card;
