import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";

export const Github = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="sections">
      <h1 className="heading">
        <span className="sauce"> My Contributions and Stats</span>
      </h1>
      <div data-aos="fade-up">
        <GitHubCalendar
          fontSize={16}
          blockSize={13}
          year={2023}
          username="shashikantRupin"
        />
      </div>
      <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <img
          id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=shashikantRupin&layout=compact&theme=vue-dark"
          alt="Bharat-Shaw"
        />
      </div>
      <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "3rem",
        }}
        id="github-stat"
      >
        <img
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=shashikantRupin&count_private=true&theme=vue-dark"
          alt="Bharat-Shaw"
        />
        <img
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=shashikantRupin&theme=vue-dark&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
          alt="Bharat-Shaw"
        />
      </div>
    </section>
  );
};
