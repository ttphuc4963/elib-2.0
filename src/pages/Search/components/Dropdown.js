import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

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
  font-size: 1.6rem;
  background-color: white;
  border-radius: 1rem;
  width: 30rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  .open {
    display: block;
  }
`;

const DropdownHeader = styled.div`
  padding: 1.5rem;
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
  padding: 0.5rem;
  border-top: 1px solid #e5e8ec;
  display: none;
  .selected {
    color: var(--my-orange);
  }
`;
const DropdownItem = styled.div`
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
