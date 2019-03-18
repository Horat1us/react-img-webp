import * as React from "react";
import { shallow } from "enzyme";

import { Image } from "../src";

describe("<Image>", () => {
    it("renders src when no webp support and webp specified", () => {
        const wrapper = shallow(
            <Image src="image.jpg" webP="image.webp" useWebP={false} />
        );
        expect(wrapper.html()).toEqual(`<img src="image.jpg"/>`);
    });
    it("renders webp when webp enabled and webp specified", () => {
        const wrapper = shallow(
            <Image src="image.jpg" webP="image.webp" useWebP={true} />
        );
        expect(wrapper.html()).toEqual(`<img src="image.webp"/>`);
    });
    it("renders src when webp enabled and webp not specified", () => {
        const wrapper = shallow(
            <Image src="image.jpg" useWebP={true} />
        );
        expect(wrapper.html()).toEqual(`<img src="image.jpg"/>`);
    });
});
