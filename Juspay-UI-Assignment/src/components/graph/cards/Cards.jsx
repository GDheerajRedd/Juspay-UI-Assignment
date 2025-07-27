import {
  CardCount,
  CardSubCount,
  CardsWrap,
  CountWrap,
  Card,
  DataTitle,
  ProgressIcon,
} from "./CardsStyled";
import { cardData } from "../data";
import { Link } from "react-router-dom";

const Cards = ({ isDarkMode }) => {
  return (
    <CardsWrap>
      {cardData.map((card, index) => {
        const cardContent = (
          <>
            <DataTitle isDarkMode={isDarkMode && card.isDarkMode}>
              {card.title}
            </DataTitle>
            <CountWrap>
              <CardCount isDarkMode={isDarkMode && card.isDarkMode}>
                {card.count}
              </CardCount>
              <CardSubCount
                isPositive={card.isPositive}
                isDarkMode={isDarkMode && card.isDarkMode}
              >
                {card.subCount}
                <ProgressIcon
                  src={isDarkMode && card.isDarkMode ? card.darkIcon : card.icon}
                  alt={card.type}
                />
              </CardSubCount>
            </CountWrap>
          </>
        );

        return (
          <Card key={index} type={card.type} isDarkMode={isDarkMode}>
            {card.title === "Orders" ? (
              <Link to="/orders" style={{ textDecoration: "none", color: "inherit" }}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            )}
          </Card>
        );
      })}
    </CardsWrap>
  );
};

export default Cards;
