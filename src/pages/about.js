import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <div style={{ color: `black` }}>
      <h1 style={{ marginBottom: `2rem` }}> About Me</h1>
      <p>
        I am studying Computer Science at University of Exeter, and I have been
        a Software Developer at CRISIL Irevna since 2017. Passionate about
        developing and maintaining applications that use Python, C++, C,
        JavaScript. Expertise in Low latency, high-frequency applications for
        analyzing real-time data and reporting dashboards using Flask(Python),
        Django, JavaScript, Angular. I work on deep learning algorithms, and on
        open-source softwares for machine learning.
      </p>
      <p>Here is the list of my recent projects:</p>
      <ul>
        <li>
          <a href="https://aarif1430.github.io/covidtrends/">CovidTrends: </a>
          This interactive charts the new deceased cases of COVID-19 in the past
          week vs. the total deceased cases to date. When plotted in this way,
          exponential growth is represented as a straight line that slopes
          upwards. Notice that almost all states follow a very similar path of
          exponential growth.
        </li>
        <li>
          <a href="https://github.com/Aarif1430/Algorithm-Visualizer">
            Algorithm Visualizer:{" "}
          </a>
          Application built using python flask to visualize different sorting
          algorithms. It shows the number of comparsions, user has freedom to
          choose the speed and elements to compare.
        </li>
      </ul>
    </div>
  </Layout>
)
export default AboutPage
