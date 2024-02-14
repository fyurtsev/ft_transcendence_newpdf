import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="cursor">
            <div class="container">
        <div class="HeaderArea" id="HeaderArea">
        <div class="big-text">Indian-Pong</div>
        <div class="small-text">Indian-Pong created for 42 school by Indian Dev!</div>
        <a href="/login" data-link><button type="button" class="PixellButton">Get Started!</button></a>
    </div>
    </div>
    </div>
        `;
    }
}

