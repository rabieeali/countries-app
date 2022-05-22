export default function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className=" d-flex justify-content-center m-auto">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span onClick={() => paginate(number)} className="page-link cursor-pointer">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
