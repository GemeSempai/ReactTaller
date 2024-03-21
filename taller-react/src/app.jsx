import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState(undefined);

  function isBookValid(book) {
    return (
      book &&
      book.title &&
      book.authors &&
      book.authors.length > 0 &&
      book.editorial &&
      book.cover
    );
  }

  function handleClick() {
    setBooks([
      {
        id: 1,
        title: "Introduction to Algorithms",
        authors: [
          "Thomas H. Cormen",
          "Charles E. Leiserson",
          "Ronald L. Rivest y Clifford Stein",
        ],
        editorial: "MIT Press",
        cover:
          "https://th.bing.com/th/id/OIP.pUt4zf-hdyUqSGdpI-UYmAAAAA?rs=1",
      },
      {
        id: 2,
        title: "The Art of Computing Programming",
        authors: ["Donald Knuth"],
        editorial: "Addison-Wesley ",
        cover:
          "https://th.bing.com/th/id/OIP.Q2bwjfRj2MpdvcOr0M8CLgAAAA?rs=1",
      },
      {
        id: 3,
        title: "Refactoring: Improving the Design of Existing Code",
        authors: ["Kent Beck", "Martin Fowler"],
        editorial: "Addison-Wesley",
        cover:
          "https://th.bing.com/th/id/R.1dc9d31f719f52b140b562aea799776c?rik=c99D847QiFtLUA&riu=http%3a%2f%2fwww.informit.com%2fShowCover.aspx%3fisbn%3d0201485672&ehk=52rDI%2fpTRGqjw%2fhsi5%2bn3zwbyBUq4HEIJVMJQXBTmvQ%3d&risl=&r=0",
      },
      {
        id: 4,
        title: "",
        authors: [],
        editorial: "",
        cover: "",
      },
    ]);
  }

  return (
    <>
      <button onClick={handleClick} style={{marginLeft: "20px", marginTop: "20px", marginRight: "20px"}}>Populate books variable</button>
      <button onClick={() => setBooks(undefined)}>Remove books variable</button>

      {/* Render the books only if the books variable is defined */}
      {books && (
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", marginTop: "20px" }}>
          {books.map((book) => (
            isBookValid(book) && (
              <div key={book.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "150px", height: "auto", marginRight: "20px" }}
                />
                <div style={{ flex: "1" }}>
                  <h3>{book.title}</h3>
                  <p>Authors: {book.authors.join(", ")}</p>
                  <p>Editorial: {book.editorial}</p>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </>
  );
}

export default App;
