import React from 'react';

const styles = {
  app: {
    width: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '\'Roboto\', sans-serif',
    marginTop: '50px',
  },
  h1: {
    fontSize: '50px',
    fontFamily: '\'Lobster\', cursive',
    marginBottom: '20px',
  },
  form: {
    display: 'inline-block',
    borderRadius: '20px',
    boxShadow: '0 0 19px 1px rgba(0, 0, 0, 0.39)',
    marginBottom: '30px',
  },
  input: {
    lineHeight: '40px',
    borderRadius: '20px 0 0 20px',
    border: 'none',
    width: '400px',
    padding: '0 20px',
  },
  button: {
    lineHeight: '40px',
    border: 'none',
    backgroundColor: '#f6f6f6',
    padding: '0 20px',
    borderRadius: '0 20px 20px 0',
    cursor: 'pointer',
  },
  searchResultDiv: {
    width: '800px',
    margin: '0 auto',
    textAlign: 'left',
    marginBottom: '20px',
  },
  h3: {
    color: '#1a0dab',
  },
  h3a: {
    color: '#1a0dab',
    display: 'inline-block',
    lineHeight: '16px',
    textDecoration: 'none',
  },
  h3aHover: {
    borderBottom: '3px solid',
  },
  link: {
    textDecoration: 'none',
    color: '#287e44',
  },
  linkHover: {
    textDecoration: 'none',
  },
  description: {
    color: '#414141',
  },
};

class Wikipedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      wikiSearchTerms: '',
    };
  }

  useWikiSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: [],
    });

    const pointerToThis = this;

    var url = 'https://en.wikipedia.org/w/api.php';

    var params = {
      action: 'query',
      list: 'search',
      srsearch: this.state.wikiSearchTerms,
      format: 'json',
    };

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += '&' + key + '=' + params[key];
    });

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        for (var key in response.query.search) {
          pointerToThis.state.wikiSearchReturnValues.push({
            queryResultPageFullURL: 'no link',
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet,
          });
        }
      })
      .then(function (response) {
        for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
          let page = pointerToThis.state.wikiSearchReturnValues[key2];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

              pointerToThis.forceUpdate();
            });
        }
      });
  };

  changeWikiSearchTerms = (e) => {
    this.setState({
      wikiSearchTerms: e.target.value,
    });
  };

  render() {
    let wikiSearchResults = [];

    for (var key3 in this.state.wikiSearchReturnValues) {
      wikiSearchResults.push(
        <div style={styles.searchResultDiv} key={key3}>
          <h3>
            <a style={styles.h3a} href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>
              {this.state.wikiSearchReturnValues[key3].queryResultPageTitle}
            </a>
          </h3>
          <span style={styles.link}>
            <a style={styles.link} href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>
              {this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}
            </a>
          </span>
          <p style={styles.description} dangerouslySetInnerHTML={{ __html: this.state.wikiSearchReturnValues[key3].queryResultPageSnippet }}></p>
        </div>
      );
    }

    return (
      <div style={styles.app}>
        <h1 style={styles.h1}>INFI-TENTS Search Engine</h1>
        <form style={styles.form} action="">
          <input
            style={styles.input}
            type="text"
            value={this.state.wikiSearchTerms || ''}
            onChange={this.changeWikiSearchTerms}
            placeholder="Search Articles...."
          />
          <button style={styles.button} type="submit" onClick={this.useWikiSearchEngine}>
            Search
          </button>
        </form>
        {wikiSearchResults}
      </div>
    );
  }
}

export default Wikipedia;
