import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

class Survey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "None submitted",
        email: "None submitted",
        currentSit: 'None selected',
        recommend: 'None selected',
        finalComments: 'Please enter any final comments'
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
      alert("The following has been submitted: \r\n" +
      "    Name:\t\t\t" + this.state.name + "\n" +
      "    Email:\t\t\t" + this.state.email + "\n" +
      "    Situation:\t\t" + this.state.currentSit + "\n" +
      "    Recommendations:\t" + this.state.recommend + "\n" +
      "    Comments:\t\t" + this.state.finalComments + "\n");
    }
    
    render() {
      return (
        <div class="container">
        <header class="header">
          <h1 id="title" class="text-center">IST411 Survey Form</h1>
          <p id="description" class="description text-center">
            Thank you for taking the time to help us improve the class.
          </p>
        </header>
        <form id="survey-form" onSubmit={this.mySubmitHandler}>
          <div class="form-group">
            <label id="name-label" for="name">Name  *</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Enter your name (required)"
              onChange={this.myChangeHandler}
              required
            />
          </div>
          <div class="form-group">
            <label id="email-label" for="email">Email  *</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Enter your Email (required)"
              onChange={this.myChangeHandler}
              required
            />
          </div>
          <div class="form-group">
            <p>Which option best describes your current situation?</p>
            <select id="currentSit" name="currentSit" class="form-control" value={this.state.currentSit} onChange={this.myChangeHandler}>
              <option selected value="None selected">Select current situation</option>
              <option value="student">Full Time Student</option>
              <option value="fullfull">Full Time Student/Full Time Job</option>
              <option value="fullpart">Full Time Student/Part Time Job</option>
              <option value="partfull">Part Time Student/Full Time Job</option>
              <option value="partpart">Part Time Student/Part Time Job</option>
              <option value="preferNo">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
          </div>
      
          <div class="form-group">
            <p>Would you recommend this course to a friend?</p>
            <label>
              <input
                name="recommend"
                value="definitely"
                type="radio"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Definitely</label
            >
            <label>
              <input
                name="recommend"
                value="maybe"
                type="radio"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Maybe</label
            >
      
            <label
              ><input
                name="recommend"
                value="not-sure"
                type="radio"
                class="input-radio"
                onChange={this.myChangeHandler}
              />Not sure</label
            >
            <label
              ><input
                name="recommend"
                value="no-way"
                type="radio"
                class="input-radio"
                onChange={this.myChangeHandler}
              />No way</label
            >
          </div>
      
          <div class="form-group">
            <p>Any comments or suggestions?</p>
            <textarea
              name="finalComments"
              class="input-textarea"
              value={this.state.finalComments}
              onChange={this.myChangeHandler}>
              </textarea>
          </div>
      
          <div class="form-group">
            <button type="submit" id="submit" class="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      
      );
    }
  }



export default Survey;

