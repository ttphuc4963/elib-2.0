import React from 'react';
import styled from 'styled-components';
import SingleBookHorizontal from '../../components/Book/SingleBookHorizontal';
import Tags from '../Search/components/Tags';
import BooksSlider from '../../components/Book/BooksSlider';

const tags = [
  { ID: 1, tagName: 'AI' },
  { ID: 2, tagName: 'Trí tuệ nhân tạo' },
  { ID: 3, tagName: 'Cơ sở dữ liệu' },
  { ID: 4, tagName: 'Hệ Thống Thông Tin' },
  { ID: 5, tagName: 'Công Nghệ Phần Mềm' },
  { ID: 6, tagName: 'Mạng máy tính' },
];

function BookDetail() {
  return (
    <Container>
      <BookDetailWrapper>
        <LeftSide>
          <SingleBookHorizontal />
          <BookDescription>
            <BookDescriptionHeading>Mô tả</BookDescriptionHeading>
            <BookDescriptionContent>
              {' '}
              This text introduces readers to the algebraic concepts of group
              and rings, providing a comprehensive discussion of theory as well
              as a significant number of applications for each. Number Theory:
              Induction; Binomial Coefficients; Greatest Common Divisors; The
              Fundamental Theorem of Arithmetic Congruences; Dates and Days.
              Groups I: Some Set Theory; Permutations; Groups; Subgroups and
              Lagrange's Theorem; Homomorphisms; Quotient Groups; Group Actions;
              Counting with Groups.Commutative Rings I: First Properties;
              Fields; Polynomials; Homomorphisms; Greatest Common Divisors;
              Unique Factorization; Irreducibility; Quotient Rings and Finite
              Fields; Officers, Magic, Fertilizer, and Horizons.Linear Algebra:
              Vector Spaces; Euclidean Constructions; Linear Transformations;
              Determinants; Codes; Canonical Forms.Fields: Classical Formulas;
              Insolvability of the General Quintic; Epilog. Groups II: Finite
              Abelian Groups; The Sylow Theorems; Ornamental Symmetry.
              Commutative Rings III: Prime Ideals and Maximal Ideals; Unique
              Factorization; Noetherian Rings; Varieties; Grobner Bases. For all
              readers interested in abstract algebra.
            </BookDescriptionContent>
          </BookDescription>
        </LeftSide>
        <RightSide>
          <Tags tags={tags} title={'Thể loại'} />
        </RightSide>
      </BookDetailWrapper>
      <BooksSlider title="Sách liên quan" />
    </Container>
  );
}

export default BookDetail;

const Container = styled.div`
  padding-bottom: 10rem;
`;

const BookDetailWrapper = styled.div`
  margin: 0 auto 0;
  width: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin-left: 5%;
  div {
    border-top: none;
  }
  .book-img {
    height: 25rem;
  }
  .book-title {
    display: block;
    font-size: 2.2rem;
  }
  .book-content-wrapper {
    width: 70rem;
  }
`;

const BookDescription = styled.div`
  width: 92%;
  margin-left: 2%;
`;

const BookDescriptionHeading = styled.h2`
  display: inline-block;
  color: var(--royal-blue);
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  border-bottom: 2px solid var(--royal-blue);
`;

const BookDescriptionContent = styled.p`
  font-size: 1.6rem;
`;

const RightSide = styled.div`
  margin-top: 6rem;
  margin-left: 6.2rem;
`;
