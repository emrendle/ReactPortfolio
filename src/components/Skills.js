import React from "react";

function Skills() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content skills-content">
          <h3 className="title is-4">Skills</h3>
          <div className="content">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    {/* eslint-disable-next-line */}
                    <strong>JavaScript:</strong>
                    <br />
                    <progress
                      className="progress is-dark"
                      value="95"
                      max="100"
                    ></progress>
                  </p>
                </div>
              </div>
            </article>

            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>HTML5:</strong>
                    <br />
                    <progress
                      className="progress is-dark"
                      value="90"
                      max="100"
                    ></progress>
                  </p>
                </div>
              </div>
            </article>

            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>CSS3:</strong>
                    <br />
                    <progress
                      className="progress is-dark"
                      value="75"
                      max="100"
                    />
                  </p>
                </div>
              </div>
            </article>

            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Node.js:</strong>
                    <br />
                    <progress
                      className="progress is-dark"
                      value="85"
                      max="100"
                    />
                  </p>
                </div>
              </div>
            </article>

            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Databases:</strong>
                    <br />
                    <progress
                      className="progress is-dark"
                      value="65"
                      max="100"
                    />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
