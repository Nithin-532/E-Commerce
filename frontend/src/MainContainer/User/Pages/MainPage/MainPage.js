import React, { useState, useContext, useEffect } from "react";
import "./MainPage.css";
import { data } from "../../../../store/store";
import DealCard from "../../../../Components/Deal/DealCard";
import { UserContext } from "../../User";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ChevronIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chevron-up"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
    />
  </svg>
);

const ArrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-up"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
    />
  </svg>
);

const FilterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-filter"
    viewBox="0 0 16 16"
  >
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
  </svg>
);

export default function MainPage() {
  const { text } = useContext(UserContext);
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    console.log(data);
    console.log(text);
    const updatedData = data.filter(val => val.name.toLowerCase().includes(text.toLowerCase()));
    console.log(updatedData)
    setNewData(updatedData);
  }, [text])

  return (
    <>
      <div className="d-flex flex-column">
        <nav className="navbar bg-body-teritary border">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle d-flex"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <p style={{ margin: 0 }}>{ArrowUp}</p>
                Sort By
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Low to High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    High to low
                  </a>
                </li>
              </ul>
            </div>
            <div className="filter-icon d-block d-md-none">
              <a
                className="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <p
                  style={{ margin: 0, marginRight: "10px", cursor: "pointer" }}
                >
                  {FilterIcon}
                </p>
              </a>
            </div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{ width: "250px" }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="offcanvas-body"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <FilterComponent />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="d-flex flex p-2">
        <div className="d-none d-md-block" style={{ paddingTop: "12px" }}>
          <FilterComponent />
        </div>
        <div
          className="container text-center"
          style={{ padding: 0, width: "100%", maxWidth: '100vw', overflowX: 'hidden' }}
        >
          <div className="row row-cols-2 row-cols-xl-3 row-cols-xxl-4">
            {newData && newData.map((item, i) => (
               <div className="col">
                <DealCard item = {item} />
              </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FilterComponent() {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);

  return (
    <div className="d-flex border flex-column sidebar">
      <div className="w-100 p-2 border-bottom">
        <div className="d-flex flex-column w-100">
          <a
            className="btn"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
            onClick={() => setIsCollapsed1((prev) => !prev)}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <h5 style={{ margin: 0 }}>Categories</h5>
              <p
                style={{ margin: 0 }}
                className={`icon ${isCollapsed1 === true && "rotate"}`}
              >
                {ChevronIcon}
              </p>
            </div>
          </a>
          <div className="collapse" id="collapseExample1">
            <div className="d-flex flex-column p-2">
              <ul>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Laptops</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Desktops</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Accessories</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Mouse</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>SSD</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Graphic Card</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-2 border-bottom">
        <div className="d-flex flex-column w-100">
          <a
            className="btn"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            onClick={() => setIsCollapsed2((prev) => !prev)}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <h5 style={{ margin: 0 }}>Brands</h5>
              <p
                style={{ margin: 0 }}
                className={`icon ${isCollapsed2 === true && "rotate"}`}
              >
                {ChevronIcon}
              </p>
            </div>
          </a>
          <div className="collapse" id="collapseExample2">
            <div className="d-flex flex-column p-2">
              <ul>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Dell</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Lenovo</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>HP</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Apple</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Microsoft</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Asus</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-2 border-bottom">
        <div className="d-flex flex-column w-100">
          <a
            className="btn"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
            onClick={() => setIsCollapsed3((prev) => !prev)}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <h5 style={{ margin: 0 }}>Price</h5>
              <p
                style={{ margin: 0 }}
                className={`icon ${isCollapsed3 === true && "rotate"}`}
              >
                {ChevronIcon}
              </p>
            </div>
          </a>
          <div className="collapse" id="collapseExample3">
            <div className="d-flex flex-column p-2">
              <ul>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Rs. 0 - Rs. 10,000</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Rs. 10,001 - Rs. 20,000</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Rs. 20,001 - Rs. 30,000</div>
                  </label>
                </li>
                <li>
                  <label
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <input type="checkbox" />
                    <div>Rs. 30,000 +</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center p-2 justify-content-between">
        <button className="btn btn-primary">Filter</button>
        <button className="btn btn-light">Reset</button>
      </div>
    </div>
  );
}
