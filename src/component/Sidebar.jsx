import React from "react";

export default function Sidebar() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div
          class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 "
          style={{ backgroundColor: "#0036be" }}
        >
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <a href="#" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Company</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col py-3">Content area...</div>
      </div>
    </div>
  );
}
