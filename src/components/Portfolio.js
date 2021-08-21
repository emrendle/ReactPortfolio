import React from "react";

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2">Portfolio</h3>
          <h4 className="subtitle is-5">View my latest projects</h4>
        </div>

        <div className="container">
          <div className="section-heading">
            <h3 className="title is-2">Featured Project</h3>
            <h4 className="subtitle is-5">Hero Battle</h4>
            <img
              src="assets/images/HeroBattle.gif"
              className="demo"
              alt="Hero battle demo"
            />
            <figcaption>
              A full stack application where users can select from hundreds of
              heroes and go to battle with other heroes.
            </figcaption>
            <a
              href="https://herobattle.herokuapp.com/"
              className="card-footer-item"
            >
              View Deployed Application
            </a>
          </div>

          <div className="container portfolio-container">
            <div className="columns">
              <div className="column is-4">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>On This Day...</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img
                        src="assets/images/OnThisDay.png"
                        alt="Screenshot of On This Day deployment"
                      />
                    </figure>
                    <figcaption className="card-content">
                      A project utilizing multiple API's to serve the user with
                      interesting facts about a selected date.
                    </figcaption>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://something-new-from-group-2.github.io/FloridaMan/"
                      className="card-footer-item"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/something-new-from-group-2/FloridaMan"
                      className="card-footer-item"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>

                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>Weather Dashboard</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img
                        src="assets/images/WeatherDashboard.png"
                        alt="Screenshot of Weather Dashboard deployment"
                      />
                    </figure>
                    <figcaption className="card-content">
                      Find the current day and five day forecast for any
                      location.
                    </figcaption>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://emrendle.github.io/WeatherDashboard/"
                      className="card-footer-item"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/emrendle/WeatherDashboard"
                      className="card-footer-item"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>
              </div>

              <div className="column is-4">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>Timed Quiz</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img
                        src="assets/images/QuizScreenshot.png"
                        alt="Screenshot of Timed Quiz deployment"
                      />
                    </figure>
                    <figcaption className="card-content">
                      A simple quiz using basic HTML, CSS, and JavaScript.
                    </figcaption>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://emrendle.github.io/TimedQuiz/"
                      className="card-footer-item"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/emrendle/TimedQuiz"
                      className="card-footer-item"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>

                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>Workday Scheduler</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img
                        src="assets/images/WorkDayScheduler.png"
                        alt="Screenshot of Workday Scheduler deployment"
                      />
                    </figure>
                    <figcaption className="card-content">
                      An exercise utilizing jQuery and Moment.js to create a
                      work day scheduler, hour by hour.
                    </figcaption>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://emrendle.github.io/WorkDayScheduler/"
                      className="card-footer-item"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/emrendle/WorkDayScheduler"
                      className="card-footer-item"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>
              </div>

              <div className="column is-4">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      <span>Random Password Generator</span>
                    </p>
                  </header>
                  <div className="card-content">
                    <figure className="image">
                      <img
                        src="assets/images/RandomPasswordGen.png"
                        alt="Screenshot of Random Password Generator deployment"
                      />
                    </figure>
                    <figcaption className="card-content">
                      A JavaScript exercise to generate a random password from
                      user inputs.
                    </figcaption>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://emrendle.github.io/Random-Password-Generator/"
                      className="card-footer-item"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/emrendle/Random-Password-Generator"
                      className="card-footer-item"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
