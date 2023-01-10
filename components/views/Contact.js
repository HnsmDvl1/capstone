import html from "html-literal";

export default () => html`
  <section id="contact">
    <form action="" method="POST">
      <h1>
        Please input the following information in order to receive a response.
      </h1>
      <div class="nameEmail">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
        />
      </div>

      <div class="msgBox">
        <textarea
          name="msg"
          id="msg"
          cols="80"
          rows="3"
          placeholder="Enter your message here"
        >
        Enter your message here</textarea
        >
      </div>

      <div class="questions">
        <p>What's this message about?</p>
      </div>
      <div class="q">
        <input
          type="radio"
          name="subject"
          value="professional"
          id="pro"
          checked
        />
        <label for="pro">I'd like to hire you!</label>
      </div>
      <div class="q">
        <input type="radio" name="subject" value="personal" id="personal" />
        <label for="personal">Personal message</label>
      </div>
      <div class="q">
        <input type="radio" name="subject" value="other" />
        <label>Don't know/something else</label>
      </div>

      <div class="refereed">
        <label for="marketing">How did you hear about me?</label>
        <select name="marketing" id="marketing">
          <optgroup label="Online">
            <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
          </optgroup>
          <optgroup label="In-Person">
            <option value="networking">We met at a networking event</option>
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
          </optgroup>
          <option value="other">Other</option>
        </select>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </section>
`;
