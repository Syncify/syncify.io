import React from "react";

import {
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
export function Index() {
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "100%",
      }}
    >
      {/* <div className="titlebar">
        <div></div>
        <div className="links">
          <div style={{ padding: 12, paddingRight: 4 }}>
            <a href="" target="_blank">
              <GithubOutlined />
            </a>
          </div>
          <div style={{ padding: 12, paddingRight: 0 }}>
            <a href="" target="_blank">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div> */}
      <div className="contents">
        <h1>Syncify</h1>
        <h2>
          Product(s)
          <span className="header-callout">
            <span className="callout-content">
              <div style={{ paddingBottom: 6 }}>There's more on the way!</div>
              <div>
                <CaretDownOutlined />
              </div>
            </span>
          </span>
          &nbsp;to help product teams.
        </h2>
        <div className="products">
          <div className="product">
            <div className="title">
              <img src="contentsync.png" />
              <div
                style={{
                  paddingLeft: 6,
                  paddingTop: 5,
                  fontWeight: 900,
                  color: "#2892FF",
                }}
              >
                ContentSync
              </div>
            </div>
            <div className="body">
              ContentSync connects content between{" "}
              <strong>Design Applications</strong> and&nbsp;
              <strong>Spreadsheets</strong> to help product teams create smarter
              content.
              <div className="product-link">
                <a href="https://www.contentsync.com" target="_blank">
                  www.contentsync.com <SendOutlined />
                </a>
              </div>
            </div>
          </div>
          <div className="product" style={{ width: 290 }}>
            <div className="title">
              <div
                style={{
                  paddingLeft: 6,
                  paddingTop: 5,
                  fontWeight: 900,
                  color: "#2892FF",
                }}
              >
                Syncify
              </div>
            </div>
            <div className="body">
              <strong>Work with us</strong> to create products to streamline
              your business and workflow.
              <div className="product-link">
                <a href="mailto:hello@syncify.io" target="_blank">
                  Contact Us <SendOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          <div className="people">
            <div>
              <img src="girl_1.png" />
              <div className="shadow"></div>
              <div className="shadowbox"></div>
            </div>
            <div>
              <img src="guy_1.png" />
              <div className="shadow"></div>
              <div className="shadowbox"></div>
            </div>
            <div>
              <img src="girl_2.png" />
              <div className="shadow"></div>
              <div className="shadowbox"></div>
            </div>
            <div>
              <img src="girl_3.png" />
              <div className="shadow"></div>
              <div className="shadowbox"></div>
            </div>
            <div>
              <img src="guy_2.png" />
              <div className="shadow"></div>
              <div className="shadowbox"></div>
            </div>
          </div>
          <a className="getintouch" href="mailto:hello@syncify.io">
            Get In Touch <SendOutlined />
          </a>
          <div>
            <small>&copy; {year} Syncify, Inc.</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
