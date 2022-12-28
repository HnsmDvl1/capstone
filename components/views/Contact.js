import html from "html-literal";

export default () => html`
  <section id="contact">
    <form action="" method="POST">
      <h1>
        Please input the following information inorder to recieve a response.
      </h1>
      <div class="nameEmail"
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="your name"
        required
      /><br >
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.com"
      />
      </div>

      <div class="msgBox">
        <!-- <label for="msg">Enter your message:</label> -->
        <textarea name="msg" id="msg" placeholder="Enter your message here" cols="60" rows="3"></textarea>
      </div>

      <div class="questions">
        <p>What's this message about?</p>
        <div>
          <input
            type="radio"
            name="subject"
            value="professional"
            id="pro"
            checked
          />
          <label for="pro">I'd like to hire you!</label>
        </div>
        <div>
          <input type="radio" name="subject" value="personal" id="personal" />
          <label for="personal">Personal message</label>
        </div>
        <div>
          <input type="radio" name="subject" value="other" />
          <label>Don't know/something else</label>
        </div>
      </div>

      <input type="checkbox" name="optIn" value="trusting" id="news" checked />
      <label for="news">Subscribe me to your newsletter!</label>

      <div>
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
