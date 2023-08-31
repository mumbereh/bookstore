const Book = ({ id, title, author, onRemove }) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <li className="book">
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default Book;
