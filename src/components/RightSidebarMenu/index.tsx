import React, { useState } from "react";
import {
  CloseIcon,
  Container,
  LangIcon,
  LanguageText,
  Line,
  MenuItemsContainer,
  MenuItemStyled,
  MenuText,
  OpenContainer,
  OpenContainerContent,
  PhoneAndLangContainer,
  PhoneBlock,
  PhoneIcon,
  PhoneNumber,
  PhoneText,
  SandwichIcon,
} from "./components";
import { menuItems } from "../../assets/const/preferencies";

const MenuItem = ({
  item,
  id,
  onClick,
}: {
  id: string;
  item: { title: string; url: string };
  onClick?: () => void;
}) => {
  return (
    <MenuItemStyled id={id} onClick={onClick}>
      <MenuText>{item.title}</MenuText>
      <Line />
    </MenuItemStyled>
  );
};

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleSelectMenuItem = (item: { title: string; url: string }) => {
    toggleMenu();
  };

  const langChangeHandler = () => {
    alert("І як ти хочеш, щоб було?");
  };

  return (
    <Container>
      <SandwichIcon margin={10} onClick={toggleMenu} />
      <PhoneIcon />
      <LangIcon onClick={langChangeHandler} />
      {isOpenMenu ? (
        <OpenContainer visible={isOpenMenu}>
          <OpenContainerContent>
            <CloseIcon onClick={toggleMenu} />
            <PhoneBlock>
              <PhoneText>Телефон</PhoneText>
              <PhoneNumber>8 (499) 908-04-64</PhoneNumber>
            </PhoneBlock>
            <PhoneAndLangContainer>
              <LanguageText>Язык интерфейса</LanguageText>
              <LangIcon onClick={langChangeHandler} />
            </PhoneAndLangContainer>
            <MenuItemsContainer>
              {menuItems.map((item) => (
                <MenuItem
                  item={item}
                  id={item.title}
                  onClick={() => handleSelectMenuItem(item)}
                />
              ))}
            </MenuItemsContainer>
          </OpenContainerContent>
        </OpenContainer>
      ) : null}
    </Container>
  );
};

export default Menu;
