import React, { Component } from "react";
import { connect } from "react-redux";
import "./Nav.css";
import axios from "axios";

class Nav extends Component {
  onGenreClick = async (e) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${e.target.id}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGQ2YjFmOGE4ZmM2ZGJmOGU0YWY0M2U3MzBhNDY2MSIsInN1YiI6IjY0Nzc4OGJhOTM4MjhlMDBiZjljOTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5PaH_RToi9pI0GJ_K_BtR3PlwJiScoFClmEfUqXuUzo`,
        },
      }
    );

    console.log(data);
  };

  render() {
    const { genres } = this.props;

    return (
      <div className="navLinkContainer">
        {genres.map((item) => {
          return (
            <p onClick={this.onGenreClick} id={item.id}>
              {item.name}
            </p>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { genres: state.genres };
}

export default connect(mapStateToProps)(Nav);
