import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from '../../../constants/breakpoint';

function Dropdown({ option, onSelect }) {
  const dropdownRef = useRef();
  const [items] = useState(option);
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(option[0].id);

  const handleShowDropdown = () => {
    setOpen(!isOpen);
  };

  const handleItemClick = (id) => {
    id = parseInt(id);
    setOpen(!isOpen);
    const { orderBy, orderType } = items.find((item) => item.id === id);
    onSelect({ data: { orderBy, orderType } });
    setSelectedItem(id);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen]);

  return (
    <Container className="dropdown">
      <DropdownHeader onClick={handleShowDropdown}>
        {typeof selectedItem != 'undefined'
          ? items.find((item) => item.id === selectedItem).label
          : 'Sắp xếp kết quả tìm kiếm'}
        <i className={`fas fa-chevron-right ${isOpen ? 'icon-open' : ''}`}></i>
      </DropdownHeader>
      <DropdownBody ref={dropdownRef} className={isOpen ? 'open' : ''}>
        {items.map((item) => (
          <DropdownItem
            key={item.id}
            id={item.id}
            onClick={(e) => handleItemClick(e.target.id)}
            className={item.id === selectedItem ? 'selected' : ''}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownBody>
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  position: relative;
  font-size: 1.4rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid var(--line-color);
  width: 20rem;
  height: fit-content;
  // box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  .open {
    display: block;
  }
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const DropdownHeader = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: var(--text-color-light);
    transition: var(--nice-transition);
  }
  .icon-open {
    transform: rotate(90deg);
  }
`;
const DropdownBody = styled.div`
  z-index: 10;
  padding: 0.5rem;
  display: none;
  position: absolute;
  background-color: white;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid var(--line-color);
  top: 4.2rem;
  // box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  .selected {
    color: var(--my-orange);
  }
`;
const DropdownItem = styled.div`
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
